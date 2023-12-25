import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBlogs } from "../sanity/sanity-utils";
import TimelineBlog from "../components/Blogs/TimelineBlog";

export const loader = async ({ params }) => {
  const Blogs = await getBlogs("public");

  return json({ Blogs });
};

export default function Blogs() {
  const { Blogs } = useLoaderData();
  console.log("data", Blogs);
  return (
    <article className="section-structure">
      <header>
        <h1 className="h1-blog ">My Blog</h1>
      </header>
      <div className="timeline">
        <ul>
          {Blogs.map((blog, index) => (
            <TimelineBlog key={index} data={blog} index={index} />
          ))}

          <div style={{ clear: "both" }}></div>
        </ul>
      </div>
    </article>
  );
}
