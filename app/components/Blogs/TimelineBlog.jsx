import { Link } from "@remix-run/react";

export default function TimelineBlog({ data }) {
  let newDate = new Date(data?.publishedAt);
  let blogMonth = newDate.toLocaleString("default", { month: "long" });
  let blogYear = newDate.getFullYear();
  return (
    <li>
      <div className="content">
        <a href={`/blogs/${data?.slug}`}>
          <h2>{data?.title}</h2>
        </a>
        <a href={"/blogs/" + data?.slug}>
          <p>{data?.shortDesc}</p>
        </a>
        <div className="tags flex gap-3">
          {data?.tags.map((tags, index) => (
            <div
              key={index}
              className=" w-auto rounded-full p-1 text-black"
              style={{
                backgroundColor:
                  tags?.color ?? "rgb(127 124 108 / var(--tw-bg-opacity))",
                color: tags?.textcolor ?? "white",
              }}
            >
              {tags?.tags}
            </div>
          ))}
        </div>
      </div>
      <div className="time">
        <h4>
          {blogMonth} {blogYear}
        </h4>
      </div>
    </li>
  );
}
