import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import {NextUIProvider} from "@nextui-org/react";

import "./tailwind.css";
import NavBar from "./shared/components/NavBar_Components/NavBar";
import Footer from "./shared/components/Footer";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script src="./node_modules/lodash/lodash.min.js"></script>
        <script src="./node_modules/dropzone/dist/dropzone-min.js"></script>
      </head>
      <body className="relative min-h-screen">
        <div className="bg-white text-black dark:bg-black dark:text-white duration-200">
          <NavBar/>
          <NextUIProvider>

          {children}
          <ScrollRestoration />
          <Scripts />
          </NextUIProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
