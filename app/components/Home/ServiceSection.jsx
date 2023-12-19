import { Link } from "@remix-run/react";

export default function ServiceSection({ data }) {
  return (
    <section className="section-pad ">
      <Link
        to="/services"
        className="dashboard-title-section fromCenter text-textWhite  mt-20 mb-10 ml-6 lg:ml-20 text-[30px] lg:text-[60px]"
      >
        Services
      </Link>
      <article className="w-full h-auto lg:h-[600px] grid gap-3 lg:grid-cols-5">
        <div className="lg:m-[20px] lg:col-span-3  rounded-xl">
          <div className="px-6 lg:px-32 h-[100%]   ">
            <h2 className="  whitespace-pre-wrap lg:pt-20 pb-10 text-2xl lg:text-[50px] font-semibold leading-normal">
              What I am offering to you
            </h2>
            <p className="text-[15px] lg:text-[30px]">
              My goals is to create you good website it can be custom website,
              or making your design into reality.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 grid lg:grid-rows-3 lg:m-[20px] gap-3 lg:gap-[20px] h-auto">
          {data?.map((element, index) => (
            <Link
              key={index}
              to={`/services/${element?.slug}`}
              className="rounded-xl grid grid-cols-8"
            >
              <div className=" font-semibold font-cinzel border-r border-black lg:col-span-2 text-[40px] lg:text-[60px]  justify-center content-center">
                <p className="hidden lg:grid">{"0" + parseInt(index + 1)}</p>
              </div>
              <div className="col-span-6 flex-row pl-3">
                <div className="font-semibold text-2xl">{element?.title}</div>
                <div>{element?.shortDesc}</div>
              </div>
            </Link>
          ))}

          {/* <Link to="#" className="rounded-xl grid grid-cols-8">
            <div className="font-semibold font-cinzel border-r border-black col-span-2 text-[60px] grid justify-center content-center">
              02
            </div>
            <div className="col-span-6 flex-row pl-3 ">
              <div className="font-semibold text-2xl">
                Content Management System
              </div>
              <div>
                I design from start or build your design WITH modern content
                management system.
              </div>
            </div>
          </Link>
          <Link to="#" aria-disabled className="rounded-xl grid grid-cols-8">
            <div className="font-semibold font-cinzel border-r border-black col-span-2 text-[60px] grid justify-center content-center">
              03
            </div>
            <div className="col-span-6 flex-row pl-3">
              <div className="font-semibold text-2xl">Shopify</div>
              <div>Coming soon.</div>
            </div>
          </Link> */}
        </div>
      </article>
    </section>
  );
}
