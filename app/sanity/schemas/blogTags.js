import { defineField, defineType } from "sanity";

export default defineType({
  name: "blogTags",
  title: "Blog Tags",
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
    defineField({
      name: "textcolor",
      title: "Text Color",
      type: "string",
      //   of: [{ type: "string" }],
      options: {
        list: [
          { title: "Black", value: "#000000" },
          { title: "White", value: "#ffffff" },
        ],
      },
    }),
  ],
});
