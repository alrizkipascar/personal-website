import { defineField, defineType } from "sanity";

export default defineType({
  name: "tools",
  title: "Tools",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Icon Name",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: "Alternative Text",
          name: "alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "position",
      title: "Tools position",
      type: "string",
      //   of: [{ type: "string" }],
      options: {
        list: [
          { title: "Frontend", value: "frontend" },
          { title: "Back End", value: "backend" },
          { title: "CMS", value: "cms" },
          { title: "Hosting", value: "hosting" },
        ],
      },
    }),
  ],
});
