import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectTags",
  title: "Project Tags",
  type: "document",
  fields: [
    defineField({
      name: "tags",
      title: "Tags",
      type: "string",
    }),
    defineField({
      name: "color",
      title: "Color (in #HEX)",
      type: "string",
    }),
  ],
});
