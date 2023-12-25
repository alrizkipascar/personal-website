import { PortableText } from "@portabletext/react";
import { useLoaderData } from "@remix-run/react";
import { RichTextComponents } from "../components/PortableText/components";
import { getBlogView } from "../sanity/sanity-utils";
import { json } from "@remix-run/node";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";

export default function BlogID() {
  const { Blogs, RichTextComponent } = useLoaderData();
  if (typeof process !== "undefined") {
    // console.log(process.env.SANITY_PROJECT_ID);
    return <div className="pt-[200px]">loading...</div>;
  }

  if (!Blogs || RichTextComponent == null) {
    return <p className="pt-[200px]">Loading..</p>;
  }
  console.log("data", Blogs.body);
  //   console.log("note", note);
  let blogDate = null;
  let blogTime = null;

  let newDate = new Date(Blogs?.publishedAt);
  blogDate = newDate.toDateString();
  blogTime = newDate.toLocaleTimeString();
  // const imageBuilder = urlBuilder({
  //   projectId: "ohvjliu6",
  //   // Replace with your Sanity project ID
  //   dataset: "production", // Replace with your Sanity dataset
  // });
  // Barebones lazy-loaded image component
  const SampleImageComponent = ({ value }) => {
    const { width, height } = getImageDimensions(value);
    return (
      <img
        src={
          urlBuilder({
            projectId: "ohvjliu6",
            // Replace with your Sanity project ID
            dataset: "production", // Replace with your Sanity dataset
          })
            .image(value)
            .url()
          // .width(100%)
          // .fit("max")
          // .auto("format")
        }
        loading="lazy"
        className={`my-8 mx-auto ${"max-w-full"} rounded-lg shadow-lg`}
        alt={value.alt || " "}
        style={{
          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    );
  };
  const RichTextComponents = {
    types: {
      image: SampleImageComponent,
    },

    // block: {
    //   // Ex. 1: customizing common block types
    //   h1: ({ children }) => (
    //     <h1 className="text-2xl text-red-400">{children}</h1>
    //   ),
    //   blockquote: ({ children }) => (
    //     <blockquote className="border-l-purple-500">{children}</blockquote>
    //   ),

    //   // Ex. 2: rendering custom styles
    //   customHeading: ({ children }) => (
    //     <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    //   ),
    // },
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl font-bold my-4">{children}</h1>
      ),
      h2: ({ children }) => <h2 className="h2-hero">{children}</h2>,
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
    listItem: {
      bullet: ({ children }) => (
        <li className="list-disc ml-[20px]">{children}</li>
      ),
    },
    marks: {
      internalLink: ({ value, children }) => {
        const { slug = {} } = value;
        const href = `/${slug.current}`;
        return (
          <a className="text-blue-500 hover:text-blue-700" href={href}>
            {children}
          </a>
        );
      },
      link: ({ children, value }) => {
        // const rel = !value.href.startsWith("/")
        //   ? "noreferrer noopener"
        //   : undefined;
        return (
          <a
            href={value.href}
            // rel={rel}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            {children}
          </a>
        );
      },
    },
  };
  return (
    <section className="bg-background w-full h-full text-textWhite">
      <article className="">
        <div
          className="bg-header flex items-center justify-center h-[600px] pb-12"
          style={{
            backgroundImage: `url(${Blogs?.imageUrl ?? null})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          alt={Blogs?.mainImageAlt}
        >
          {/* <div className="bg-background text-textWhite font-serif mx-4 p-4 text-center md:p-8">
              <p className="italic text-sm"> </p>
              <h1 className="text-5xl uppercase">{blog?.title}</h1>
              <p className="text-lg">Author Name</p>
            </div> */}
        </div>

        <div className="font-serif leading-normal lg:w-[1000px] mx-auto py-12 px-4 ">
          <div className="bg-background text-textWhite font-serif mx-4 p-4 text-center md:p-8">
            <p className="italic text-sm">{blogDate + " " + blogTime}</p>
            <h1 className="text-5xl uppercase">{Blogs?.title}</h1>
            <a
              itemProp="author"
              name="Alrizki Pasca R"
              href="https://alrizkipasca.com/about"
              className="text-lg text-blue-700"
            >
              Alrizki Pasca
            </a>
          </div>
          <PortableText components={RichTextComponents} value={Blogs.body} />
        </div>
      </article>
    </section>
  );
}
export const loader = async ({ params }) => {
  const Blogs = await getBlogView(params?.id, "public");
  const RichTextComponent = RichTextComponents;
  return json({ Blogs, RichTextComponent });
};

export const meta = ({ data }) => {
  return [
    { title: "Blog |" + data?.Blogs?.title ?? "Error" },
    {
      property: "og:title",
      content: "Blog |" + data?.Blogs?.title ?? "Error",
    },
    { name: "description", content: "About Alrizki Pasca" },
  ];
};
