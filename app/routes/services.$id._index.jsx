import { json } from "@remix-run/node";
import {
  Form,
  Link,
  NavLink,
  Outlet,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import ServicesOverview from "../components/Services/ServicesOverview";
import { getService, getServiceSlug } from "../sanity/sanity-utils";

export const loader = async ({ params }) => {
  const serviceId = params.id;
  const Service = await getService(params?.id, "public");
  const OtherService = await getServiceSlug();

  const noteListItems = [
    {
      id: "overview",
      title: "Overview",
    },
    {
      id: "stack",
      title: "Stack",
    },
    {
      id: "gallery",
      title: "Gallery",
    },
    {
      id: "approach",
      title: "Development Approach",
    },
  ];
  return json({ serviceId, noteListItems, Service, OtherService });
};

export default function ServicesId() {
  const data = useLoaderData();
  console.log("Service", data.Service);
  return (
    <article className="section-structure w-full h-auto">
      {/* <h1 className="mb-10 ml-6 text-[30px] lg:text-[60px]">
        {data?.serviceId}
      </h1> */}
      <section className="flex h-full ">
        <div className="hidden lg:block h-auto w-80 border-r border-black">
          {/* <Link to="new" className="block p-4 text-xl text-blue-500">
            + New Note
          </Link> */}

          {/* <hr /> */}

          {data.OtherService.length === 0 ? (
            <p className="p-4">No notes yet</p>
          ) : (
            <ol className="sticky-services ">
              <li className="block border-b border-black p-4 text-xl">
                {" "}
                📝 Other Sevices
              </li>
              {data.OtherService.map((note) => (
                <li key={note.id}>
                  <a
                    className="block border-b border-black p-4 text-xl"
                    href={note.slug}
                  >
                    {note.title}
                  </a>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="flex-1 p-6 h-full my-[20px]">
          <ServicesOverview service={data?.Service ?? null} />
        </div>
      </section>
    </article>
  );
}
