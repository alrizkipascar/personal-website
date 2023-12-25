// import type { LinksFunction, MetaFunction } from "@remix-run/node";
// import Studio from "sanity/lib/exports";

import { Hydrated } from "~/components/Hydrated";
// import studio from "~/styles/studio.css";

import { config } from "../../sanity.config";
import { Studio } from "sanity";
import React, { Suspense } from "react";

export const meta = () => [
  { title: "Sanity Studio" },
  { name: "robots", content: "noindex" },
];

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: studio }];
// };

export default function StudioPage() {
  const MemoizedMDE = React.memo(Studio);

  return (
    // <Hydrated>
    // <div className="max-h-screen">
    <Suspense fallback={<div>Loading...</div>}>
      <MemoizedMDE
        config={config}
        // To enable guests view-only access to your Studio,
        // uncomment this line!
        // unstable_noAuthBoundary
      />
    </Suspense>
    // </div>
    // </Hydrated>
  );
}
