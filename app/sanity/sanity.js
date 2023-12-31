// import { createClient } from "next-sanity";

import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  apiVersion: process.env.SANITY_API_VERSION || "2023-10-08",
});
