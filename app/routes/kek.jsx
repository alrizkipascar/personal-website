import { json } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { getBlogs } from "../sanity/sanity-utils";
import TimelineBlog from "../components/Blogs/TimelineBlog";

export default function Blogs() {
  return (
    <>
      <Outlet />
    </>
  );
}
