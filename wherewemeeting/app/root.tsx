import type {LinksFunction, LoaderArgs, MetaFunction} from "@remix-run/node";
import {json} from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";


import {getUser} from "./session.server";
import {withEmotionCache} from "@emotion/react";
import React, {useContext} from "react";
import {ClientStyleContext, ServerStyleContext} from "~/context";
import {theme} from "~/helpers/theme/theme";
import { unstable_useEnhancedEffect as useEnhancedEffect} from '@mui/material';
import Layout from "~/components/layout";


export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Where we meeting",
    viewport: "width=device-width,initial-scale=1",
});

export let links: LinksFunction = () => {
    return [
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
        },
    ]
}

interface DocumentProps {
    children: React.ReactNode;
}

const Document = withEmotionCache(
    ({children}: DocumentProps, emotionCache) => {
        const serverStyleData = useContext(ServerStyleContext);
        const clientStyleData = useContext(ClientStyleContext);

        // Only executed on client
        useEnhancedEffect(() => {
            // re-link sheet container
            emotionCache.sheet.container = document.head;
            // re-inject tags
            const tags = emotionCache.sheet.tags;
            emotionCache.sheet.flush();
            tags.forEach((tag) => {
                (emotionCache.sheet as any)._insertTag(tag);
            });
            // reset cache to reapply global styles
            clientStyleData?.reset();
        }, []);

        return (
            <html lang="en">
            <head>
                <meta name="theme-color" content={theme.palette.primary.main}/>
                <Meta/>
                <Links/>
                {serverStyleData?.map(({key, ids, css}) => (
                    <style
                        key={key}
                        data-emotion={`${key} ${ids.join(' ')}`}
                        dangerouslySetInnerHTML={{__html: css}}
                    />
                ))}
            </head>
            <body>
            {children}
            <ScrollRestoration/>
            <Scripts/>
            <LiveReload/>
            </body>
            </html>
        );
    }
);


export async function loader({request}: LoaderArgs) {
    return json({
        user: await getUser(request),
        cookies: request.headers.get("cookie") ?? ''
    });
}

export default function App() {
// root.tsx
// In your App function
//     const cookies = useLoaderData()
    return (
        <Document>
           <Layout></Layout>
        </Document>
    )
}
