import { PortableText } from "@portabletext/react";
import { useLoaderData } from "@remix-run/react";
import { RichTextComponents } from "../components/PortableText/components";
import { getBlogView } from "../sanity/sanity-utils";
import { json } from "@remix-run/node";

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
          <PortableText components={RichTextComponent} value={Blogs.body} />
        </div>
      </article>
    </section>
  );
}
export const loader = async ({ params }) => {
  const Blogs = await getBlogView(params?.id, "public");
  const RichTextComponent = RichTextComponents("ohvjliu6", "production");
  return json({ Blogs, RichTextComponent });
};

export const meta = ({ data }) => {
  return [
    { title: data?.Blogs?.title ?? "Error" },
    {
      property: "og:title",
      content: data?.Blogs?.title ?? "Error",
    },
    { name: "description", content: "About Alrizki Pasca" },
  ];
};
