import { defineField, defineType } from "sanity";

export default defineType({
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "shortDesc",
      title: "Short Description",
      type: "text",
    }),
    defineField({
      name: "svg",
      title: "SVG D",
      type: "text",
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          name: "person",
          fieldsets: [{ name: "description", title: "Service Description" }],
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string",
              fieldset: "description",
            },
            {
              title: "Service Desc",
              name: "description",
              type: "text",
              fieldset: "description",
            },
          ],
        },
      ],
    }),
    defineField({
      title: "Visibility",
      name: "visibility",
      type: "string",
      // of: [{ type: "string" }],
      options: {
        list: [
          { title: "Hidden", value: "hidden" },
          { title: "Public", value: "public" },
        ],
      },
    }),
  ],

  //   preview: {
  //     select: {
  //       title: "title",
  //       // author: "author.name",
  //       media: "mainImage",
  //     },
  //     // prepare(selection) {
  //     //   const { author } = selection;
  //     //   return { ...selection, subtitle: author && `by ${author}` };
  //     // },
  //   },
});
