export default function BlogCard({ data }) {
  let newDate = new Date(data?.publishedAt);
  let blogMonth = newDate.toLocaleString("default", { month: "long" });
  let blogYear = newDate.getFullYear();
  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + "..." : str;
  };
  // let bodyText = createBody(blog[0]?.body);
  const staticDesc = truncate(data?.shortDesc, 300, 300);
  return (
    <div className="w-full shadow-md rounded-xl duration-500 hover:bg-slate-400 hover:shadow-xl">
      <a href={`blogs/${data?.slug}`}>
        <img
          src={
            data?.imageUrl ??
            "https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          alt="Product"
          className="h-3/5 lg:h-80 w-full object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-full">
          <span className="text-primary mr-3 uppercase text-xs">
            {" "}
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
            </div>{" "}
          </span>
          <p className="text-md lg:text-lg font-bold text-textWhite truncate block capitalize">
            {data?.title}
          </p>
          <div className="flex items-center">
            <p className="text-md lg:text-lg  font-semibold text-textWhite cursor-auto my-3">
              {blogMonth} {blogYear}
            </p>
          </div>
          <p className="text-sm lg:text-lg  font-medium text-textWhiteblock capitalize">
            {staticDesc ?? "loading"}
          </p>
        </div>
        {/* <del>
              <p className="text-sm text-primary cursor-auto ml-2">$199</p>
            </del> */}
      </a>
    </div>
  );
}
