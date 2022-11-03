import {RemixBrowser} from "@remix-run/react";
import {startTransition, StrictMode, useMemo, useState} from "react";
import {hydrateRoot} from "react-dom/client";
import {CacheProvider} from "@emotion/react";
import createEmotionCache from "~/src/createEmotionCache";
import { ClientStyleContext } from "./context";



interface ClientCacheProviderProps {
  children: React.ReactNode;
}

function ClientCacheProvider({children}: ClientCacheProviderProps) {
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
          <StrictMode>
            <RemixBrowser/>
          </StrictMode>
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
