import { json } from "@remix-run/node";
import { getBlogView } from "../sanity/sanity-utils";
import { useLoaderData } from "@remix-run/react";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../components/PortableText/components";

export const loader = async ({ params }) => {
  const Blogs = await getBlogView(params?.id, params?.status);

  return json({ Blogs });
};

export default function BlogID() {
  const { Blogs } = useLoaderData();
  console.log("data", Blogs);
  //   console.log("note", note);
  let blogDate = null;
  let blogTime = null;

  let newDate = new Date(Blogs?.publishedAt);
  blogDate = newDate.toDateString();
  blogTime = newDate.toLocaleTimeString();
  return (
    <section className="bg-background w-full h-full text-textWhite">
      <div className="">
        <article
          className="bg-header flex items-center justify-center h-[600px] pb-12"
          style={{
            backgroundImage: `url(${
              Blogs?.imageUrl ??
              "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            })`,
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
        </article>

        <div className="font-serif leading-normal lg:w-[1000px] mx-auto py-12 px-4 ">
          <div className="bg-background text-textWhite font-serif mx-4 p-4 text-center md:p-8">
            <p className="italic text-sm">{blogDate + " " + blogTime}</p>
            <h1 className="text-5xl uppercase">{Blogs?.title}</h1>
            <p className="text-lg">Author Name</p>
          </div>
          <PortableText
            components={RichTextComponents(process)}
            value={Blogs.body}
          />
          {/* {bodyFirst.split("\n").map((index, i) => (
            <p
              className="mb-4 text-lg"
              dangerouslySetInnerHTML={{ __html: index }}
              key={i}
            ></p>
          ))}{" "} */}
        </div>
      </div>
    </section>
  );
}
