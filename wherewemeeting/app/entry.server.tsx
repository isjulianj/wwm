import {PassThrough} from "stream";
import React from 'react'
import type {EntryContext} from "@remix-run/node";
import {Response} from "@remix-run/node";
import {RemixServer} from "@remix-run/react";
import isbot from "isbot";
import {renderToPipeableStream} from "react-dom/server";
import {CacheProvider as EmotionCacheProvider} from "@emotion/react";
import createEmotionCache from "~/helpers/theme/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "~/helpers/theme/theme";


const ABORT_DELAY = 5000;

export default function handleRequest(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext
) {
    const callbackName = isbot(request.headers.get("user-agent"))
        ? "onAllReady"
        : "onShellReady";


    return new Promise((resolve, reject) => {
        let didError = false;
        const emotionCache = createEmotionCache();


        const {pipe, abort} = renderToPipeableStream(
            <EmotionCacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>
                    <RemixServer context={remixContext} url={request.url}/>
                </ThemeProvider>
            </EmotionCacheProvider>,
            {
                [callbackName]: () => {
                    const body = new PassThrough();
                    const emotionServer = createEmotionServer(emotionCache);
                    const bodyWithStyles = emotionServer.renderStylesToNodeStream();
                    body.pipe(bodyWithStyles);

                    responseHeaders.set("Content-Type", "text/html");

                    resolve(
                        new Response(body, {
                            headers: responseHeaders,
                            status: didError ? 500 : responseStatusCode,
                        })
                    );

                    pipe(body)
                },
                onShellError: (err: unknown) => {
                    reject(err);
                },
                onError: (error: unknown) => {
                    didError = true;

                    console.error(error);
                },
            }
        );

        setTimeout(abort, ABORT_DELAY);
    });
}
