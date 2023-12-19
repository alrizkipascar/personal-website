// import type { LinksFunction, MetaFunction } from "@remix-run/node";
// import Studio from "sanity/lib/exports";

import { Hydrated } from "~/components/Hydrated";
// import studio from "~/styles/studio.css";

import { config } from "../../sanity.config";
import { Studio } from "sanity";

export const meta = () => [
  { title: "Sanity Studio" },
  { name: "robots", content: "noindex" },
];

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: studio }];
// };

export default function StudioPage() {
  return (
    // <Hydrated>
    // <div className="max-h-screen">
    <Studio
      config={config}
      // To enable guests view-only access to your Studio,
      // uncomment this line!
      // unstable_noAuthBoundary
    />
    // </div>
    // </Hydrated>
  );
}
