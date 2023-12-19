import { defineField, defineType } from "sanity";
export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fieldsets: [
    { name: "short", title: "Short Section" },
    { name: "overview", title: "Overview Section" },
    { name: "development", title: "Development Section" },
    { name: "gallery", title: "Gallery Section" },
  ],

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "short",
    }),
    defineField({
      title: "Visibility",
      name: "visibility",
      type: "string",
      // of: [{ type: "string" }],
      fieldset: "short",
      options: {
        list: [
          { title: "Hidden", value: "hidden" },
          { title: "Public", value: "public" },
        ],
      },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      fieldset: "short",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "link",
      title: "Live Link",
      type: "string",
      fieldset: "short",
    }),
    defineField({
      name: "shortDesc",
      title: "Short Description",
      type: "text",
      fieldset: "short",
    }),

    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      fieldset: "short",
    }),
    defineField({
      title: "Content Type",
      name: "contentType",
      type: "string",
      // of: [{ type: "string" }],
      fieldset: "short",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
      },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      fieldset: "short",
      options: {
        hotspot: true,
      },
      hidden: ({ document }) => document?.contentType !== "image",
    }),
    defineField({
      name: "videoURL",
      type: "string",
      title: "Video URL",
      fieldset: "short",
      hidden: ({ document }) => document?.contentType !== "video",
    }),
    defineField({
      name: "problem",
      title: "Solved Problem",
      type: "text",
      fieldset: "overview",
    }),
    defineField({
      name: "projectColor",
      title: "Color",
      type: "array",
      fieldset: "overview",
      of: [
        {
          type: "object",
          name: "color",
          fieldsets: [{ name: "color", title: "Project Color" }],
          fields: [
            {
              name: "color",
              title: "Color (in #HEX)",
              fieldset: "color",
              type: "string",
            },
            {
              name: "textcolor",
              title: "Text Color",
              type: "string",
              //   of: [{ type: "string" }],
              fieldset: "color",
              options: {
                list: [
                  { title: "Black", value: "#000000" },
                  { title: "White", value: "#ffffff" },
                ],
              },
            },
          ],
        },
      ],
    }),

    defineField({
      name: "font",
      title: "Project Font",
      type: "array",
      fieldset: "overview",
      of: [
        {
          title: "Font",
          name: "font",
          type: "string",
          fieldset: "font",
        },
        // {
        //   type: "object",
        //   name: "font",
        //   fieldsets: [{ name: "font", title: "Front Project" }],
        //   fields: [
        //     {
        //       title: "Font",
        //       name: "font",
        //       type: "string",
        //       fieldset: "font",
        //     },
        //     {
        //       title: "Service Desc",
        //       name: "description",
        //       type: "text",
        //       fieldset: "font",
        //     },
        //   ],
        // },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      fieldset: "development",
      // of: [
      //   {
      //     type: "block",
      //     styles: [
      //       { title: "Normal", value: "normal" },
      //       { title: "H1", value: "h1" },
      //       { title: "H2", value: "h2" },
      //       { title: "H3", value: "h3" },
      //       { title: "H4", value: "h4" },
      //       { title: "H5", value: "h5" },
      //       { title: "H6", value: "h6" },
      //       { title: "Quote", value: "blockquote" },
      //     ],
      //     marks: {
      //       decorators: [
      //         { title: "Strong", value: "strong" },
      //         { title: "Emphasis", value: "em" },
      //         { title: "Code", value: "code" },
      //       ],
      //       annotations: [
      //         {
      //           name: "internalLink",
      //           type: "object",
      //           title: "Internal link",
      //           fields: [
      //             {
      //               name: "reference",
      //               type: "reference",
      //               title: "Reference",
      //               to: [
      //                 { type: "blog" },
      //                 // other types you may want to link to
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     lists: [
      //       { title: "Bullet", value: "bullet" },
      //       { title: "Numbered", value: "number" },
      //     ],
      //   },
      //   {
      //     type: "image",
      //   },
      // ],
    }),
    defineField({
      name: "tools",
      title: "Tools",
      type: "array",
      of: [{ type: "reference", to: { type: "tools" } }],
      fieldset: "development",
    }),

    // defineField({
    //   name: "mainImage",
    //   title: "Main image",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    //   hidden: ({ document }) => !document?.contentType === "image",
    // }),

    defineField({
      name: "imagesGallery",
      title: "Images gallery",
      type: "array",
      fieldset: "gallery",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "videoGallery",
      title: "Video Gallery",
      type: "array",
      fieldset: "gallery",
      of: [{ type: "string" }],
    }),
  ],
  orderings: [
    {
      title: "Projects, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Projects, Old",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
  ],
});
