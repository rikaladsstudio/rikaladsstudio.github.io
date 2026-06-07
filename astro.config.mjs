// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        headers: {
            "Permissions-Policy": "geolocation=(), camera=(), microphone=(), attribution-reporting=(), run-ad-auction=(), private-state-token-redemption=(self), browsing-topics=()"
        }
    },
    devToolbar: {
        enabled: false,
    },
    redirects: {
        "/": "/photoalbum"
    }
});
