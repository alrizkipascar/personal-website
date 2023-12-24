import { cssBundleHref } from "@remix-run/css-bundle";
import NavHeader from "app/components/Layout/NavHeader";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useRouteError,
} from "@remix-run/react";
import global from "~/styles/global.css";
import tailwindstyle from "./tailwind.css";
import Empty from "./components/Error/Empty";
import Footer from "./components/Footer/Footer";
import { json } from "@remix-run/node";
import { useEffect } from "react";
import * as gtag from "~/utils/gtags.client";

export const links = () => [
  { rel: "stylesheet", href: global },
  { rel: "stylesheet", href: tailwindstyle },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async () => {
  return json({ gaTrackingId: process.env.GA_TRACKING_ID });
};

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />{" "}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
      </head>
      <body>
        <main className="root-base h-full">
          <Empty />
          {/* add the UI you want your users to see */}
          <Scripts />
        </main>
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();

  const pathname = location?.pathname;
  const admin = "admin";
  const { gaTrackingId } = useLoaderData();

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);
  if (!pathname.includes(admin)) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
          {process.env.NODE_ENV === "development" || !gaTrackingId ? null : (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
              />
              <script
                async
                id="gtag-init"
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
                }}
              />
            </>
          )}
        </head>
        <body>
          {/* root-base  */}
          <NavHeader />

          <main className="root-base h-full">
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
            <Footer />
          </main>
        </body>
      </html>
    );
  } else {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <main className="h-screen">
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </main>
        </body>
      </html>
    );
  }
}
