# 📖 [Remix docs](https://remix.run/docs) + [NextUI](https://nextui.org/docs/frameworks/remix)

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

## Development and Deployment

```sh
npm run dev
```

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to. If you're familiar with deploying Node applications, the built-in Remix app server is production-ready. Make sure to deploy the output of `npm run build` to your production server.

- `build/server`
- `build/client`

## NextUI Installation

```sh
npm i @nextui-org/react framer-motion
```

```tsx
// tailwind.config.ts
import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
```

```tsx
// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { NextUIProvider } from "@nextui-org/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
}
```

---

# 📖 Application
