import {RemixBrowser} from "@remix-run/react";
import {startTransition, StrictMode, useMemo, useState} from "react";
import {hydrateRoot} from "react-dom/client";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "~/helpers/theme/theme";
import {ClientCacheProviderProps} from "~/helpers/theme/clientCacheProviderProps";
import createEmotionCache from "~/helpers/theme/createEmotionCache";
import {ClientStyleContext} from "~/context";
import {CacheProvider} from "@emotion/react";

export function ClientCacheProvider({children}: ClientCacheProviderProps) {
    const [cache, setCache] = useState(createEmotionCache());

    const clientStyleContextValue = useMemo(
        () => ({
            reset() {
                setCache(createEmotionCache());
            },
        }),
        [],
    );

    return (
        <ClientStyleContext.Provider value={clientStyleContextValue}>
            <CacheProvider value={cache}>{children}</CacheProvider>
        </ClientStyleContext.Provider>
    );
}


const hydrate = () => {
    startTransition(() => {
        hydrateRoot(
            document,

            <ClientCacheProvider>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>
                    <StrictMode>
                        <RemixBrowser/>
                    </StrictMode>
                </ThemeProvider>
            </ClientCacheProvider>
        );
    });
};

if (window.requestIdleCallback) {
    window.requestIdleCallback(hydrate);
} else {
    // Safari doesn't support requestIdleCallback
    // https://caniuse.com/requestidlecallback
    window.setTimeout(hydrate, 1);
}
