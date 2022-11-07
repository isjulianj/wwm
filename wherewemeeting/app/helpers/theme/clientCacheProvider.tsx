import {ClientCacheProviderProps} from "~/helpers/theme/clientCacheProviderProps";
import {useMemo, useState} from "react";
import createEmotionCache from "~/helpers/theme/createEmotionCache";
import {ClientStyleContext} from "~/context";
import {CacheProvider} from "@emotion/react/dist/emotion-react.cjs";

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
