import { Link } from "@remix-run/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";

// const SampleImageComponent = ({ value, isInline }) => {
//   const { width, height } = getImageDimensions(value);
//   return (
//     <img
//       src={urlBuilder()
//         .image(value)
//         .width(isInline ? 100 : 800)
//         .fit("max")
//         .auto("format")
//         .url()}
//       alt={value.alt || " "}
//       loading="lazy"
//       style={{
//         // Display alongside text if image appears inside a block text span
//         display: isInline ? "inline-block" : "block",

//         // Avoid jumping around with aspect-ratio CSS property
//         aspectRatio: width / height,
//       }}
//     />
//   );
// };

// export const PortableComponents = {
//   types: {
//     image: SampleImageComponent,
//   },
//   marks: {
//     // Ex. 1: custom renderer for the em / italics decorator
//     em: ({ children }) => (
//       <em className="text-gray-600 font-semibold">{children}</em>
//     ),

//     // Ex. 2: rendering a custom `link` annotation
//     link: ({ value, children }) => {
//       const target = (value?.href || "").startsWith("http")
//         ? "_blank"
//         : undefined;
//       return (
//         <a
//           href={value?.href}
//           target={target}
//           rel={target === "_blank" && "noindex nofollow"}
//         >
//           {children}
//         </a>
//       );
//     },
//     block: {
//       // Ex. 1: customizing common block types
//       h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
//       h2: ({ children }) => <h1 className="h2-hero">{children}</h1>,
//       blockquote: ({ children }) => (
//         <blockquote className="border-l-purple-500">{children}</blockquote>
//       ),

//       // Ex. 2: rendering custom styles
//       customHeading: ({ children }) => (
//         <h2 className="text-lg text-primary text-purple-700">{children}</h2>
//       ),
//     },
//     list: {
//       // Ex. 1: customizing common list types
//       bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
//       number: ({ children }) => <ol className="mt-lg">{children}</ol>,

//       // Ex. 2: rendering custom lists
//       checkmarks: ({ children }) => (
//         <ol className="m-auto text-lg">{children}</ol>
//       ),
//     },
//     listItem: {
//       // Ex. 1: customizing common list types
//       bullet: ({ children }) => (
//         <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
//       ),

//       // Ex. 2: rendering custom list items
//       checkmarks: ({ children }) => <li>✅ {children}</li>,
//     },
//     // Any other custom types you have in your content
//     // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
//   },
// };
// if (typeof process !== "undefined") {
//   console.log(process.env.SANITY_PROJECT_ID);
// } else {
//   console.log("Environment variable not available.");
// }

export const RichTextComponents = ({ SANITY_PROJECT_ID, SANITY_DATASET }) => {
  // if (SANITY_PROJECT_ID != null || SANITY_DATASET != null) {
  //   break
  // }
  const imageBuilder = urlBuilder({
    projectId: SANITY_PROJECT_ID,
    // Replace with your Sanity project ID
    dataset: SANITY_DATASET, // Replace with your Sanity dataset
  });
  return {
    types: {
      image: ({ value, isInline }) => {
        const { width, height } = getImageDimensions(value);
        return (
          <img
            src={imageBuilder.image(value).url()}
            alt={value.alt || " "}
            loading="lazy"
            className={`my-8 mx-auto ${
              isInline ? "max-w-xs" : "max-w-full"
            } rounded-lg shadow-lg`}
            style={{ aspectRatio: width / height }}
          />
        );
      },
    },

    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => (
        <h1 className="text-2xl text-red-400">{children}</h1>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-purple-500">{children}</blockquote>
      ),

      // Ex. 2: rendering custom styles
      customHeading: ({ children }) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl font-bold my-4">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl font-bold my-4">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-bold my-4">{children}</h3>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 pl-4 my-4 italic text-gray-700 border-gray-300">
          {children}
        </blockquote>
      ),
      ul: ({ children }) => <ul className="list-disc ml-8 my-4">{children}</ul>,
      ol: ({ children }) => (
        <ol className="list-decimal ml-8 my-4">{children}</ol>
      ),
      li: ({ children }) => <li className="mb-2">{children}</li>,
      p: ({ children }) => <p className="text-xl my-4">{children}</p>,
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <Link
            href={value.href}
            rel={rel}
            className="text-blue-500 hover:text-blue-700"
          >
            {children}
          </Link>
        );
      },
    },
  };
  // {
  //   types: {
  //     image: ({ value, isInline }) => {
  //       const { width, height } = getImageDimensions(value);
  //       return (
  //         <img
  //           src={imageBuilder.image(value).url()}
  //           alt={value.alt || " "}
  //           loading="lazy"
  //           className={`my-8 mx-auto ${
  //             isInline ? "max-w-xs" : "max-w-full"
  //           } rounded-lg shadow-lg`}
  //           style={{ aspectRatio: width / height }}
  //         />
  //       );
  //     },
  //   },
  //   // block: {
  //   //   // Ex. 1: customizing common block types
  //   //   h1: ({ children }) => <h1 className="text-2xl text-red-400">{children}</h1>,
  //   //   blockquote: ({ children }) => (
  //   //     <blockquote className="border-l-purple-500">{children}</blockquote>
  //   //   ),

  //   //   // Ex. 2: rendering custom styles
  //   //   customHeading: ({ children }) => (
  //   //     <h2 className="text-lg text-primary text-purple-700">{children}</h2>
  //   //   ),
  //   // },
  //   block: {
  //     h1: ({ children }) => (
  //       <h1 className="text-4xl font-bold my-4">{children}</h1>
  //     ),
  //     h2: ({ children }) => <h2 className="h2-hero">{children}</h2>,
  //     h3: ({ children }) => (
  //       <h3 className="text-2xl font-bold my-4">{children}</h3>
  //     ),
  //     blockquote: ({ children }) => (
  //       <blockquote className="border-l-4 pl-4 my-4 italic text-gray-700 border-gray-300">
  //         {children}
  //       </blockquote>
  //     ),
  //     ul: ({ children }) => <ul className="list-disc ml-8 my-4">{children}</ul>,
  //     ol: ({ children }) => (
  //       <ol className="list-decimal ml-8 my-4">{children}</ol>
  //     ),
  //     li: ({ children }) => <li className="mb-2">{children}</li>,
  //     p: ({ children }) => <p className="text-xl my-4">{children}</p>,
  //   },

  //   listItem: {
  //     bullet: ({ children }) => (
  //       <li className="list-disc ml-[20px]">{children}</li>
  //     ),
  //   },

  //   marks: {
  //     // link: ({ children, value }) => {
  //     //   const rel = !value.href.startsWith("/")
  //     //     ? "noreferrer noopener"
  //     //     : undefined;
  //     //   return (
  //     //     <Link
  //     //       href={value.href}
  //     //       rel={rel}
  //     //       className="text-blue-500 hover:text-blue-700"
  //     //     >
  //     //       {children}
  //     //     </Link>
  //     //   );
  //     // },
  //     internalLink: ({ value, children }) => {
  //       const { slug = {} } = value;
  //       const href = `/${slug.current}`;
  //       return <a href={href}>{children}</a>;
  //     },
  //     link: ({ value, children }) => {
  //       // Read https://css-tricks.com/use-target_blank/
  //       const { blank, href } = value;
  //       return blank ? (
  //         <a href={href} target="_blank" rel="noopener">
  //           {children}
  //         </a>
  //       ) : (
  //         <a href={href}>{children}</a>
  //       );
  //     },
  //   },
  // };
};
