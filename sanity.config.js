import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemaTypes from "./app/sanity/schemas/index";

export const config = defineConfig({
  name: "default",
  title: "Personal",
  apiVersion: `2023-10-01`,
  projectId: "ohvjliu6",
  dataset: "production",
  basePath: "/admin",
  plugins: [deskTool(), visionTool({ defaultApiVersion: `2023-10-01` })],

  schema: { types: schemaTypes },
});
