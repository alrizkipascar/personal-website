import { defineField, defineType } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
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
      type: "string",
    }),
    defineField({
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "reference", to: { type: "blogTags" } }],
      // of: [{ type: "string" }],
      // options: {
      // list: [
      //   { title: "Hidden", value: "building" },
      //   { title: "Master plan", value: "masterPlan" },
      //   { title: "Infrastructure", value: "infrastructure" },
      //   { title: "Private Home", value: "privateHome" },
      // ],
      // },
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

    defineField({
      name: "mainImage",
      title: "Main image",
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
    // defineField({
    //   name: "categories",
    //   title: "Categories",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "category" } }],
    // }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "H5", value: "h5" },
            { title: "H6", value: "h6" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    description:
                      "Read https://css-tricks.com/use-target_blank/",
                    type: "boolean",
                  },
                ],
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [
                      { type: "blog" },
                      // other types you may want to link to
                    ],
                  },
                ],
              },
            ],
          },
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
        },
        {
          type: "image",
        },
      ],
      // type: "blockContent",
    }),
    // defineField({
    //   name: "body",
    //   title: "Body",
    //   type: "block",
    // }),
    // defineField({
    //   name: "parallaxImage",
    //   title: "Parallax image",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    //   fields: [
    //     {
    //       title: "Alternative Text",
    //       name: "alt",
    //       type: "string",
    //     },
    //     {
    //       title: "Text Parallax",
    //       name: "text",
    //       type: "string",
    //     },
    //   ],
    // }),
    // defineField({
    //   name: "bodyParallax",
    //   title: "Body after Parallax",
    //   type: "block",
    // }),
    // {
    //   name: "content",
    //   title: "Content",
    //   type: "array",
    //   of: [{ type: "block" }],
    // },
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
