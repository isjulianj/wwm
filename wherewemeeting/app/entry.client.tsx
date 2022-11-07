import {RemixBrowser} from "@remix-run/react";
import {startTransition, StrictMode} from "react";
import {hydrateRoot} from "react-dom/client";
import {ClientCacheProvider} from "~/helpers/theme/clientCacheProvider";


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
