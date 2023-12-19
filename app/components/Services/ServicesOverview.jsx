import { Link } from "@remix-run/react";

export default function ServicesOverview({ service }) {
  return (
    <article className="h-full ">
      <section>
        <div className="section-title mb-8">
          <h2>{"Services " + service?.title ?? "Services"}</h2>
        </div>

        {service?.services.map((element, index) => (
          <section key={index}>
            <div className="content-divider">
              <h2>{element?.title ?? "Background"}</h2>
            </div>
            <p className="paragraph-service">
              {element?.description ??
                "Lorem minim nulla amet Lorem ad quis in fugiat. Fugiat Lorem velit nostrud fugiat tempor. Dolore laborum dolore nulla ipsum ad officia dolore. Id incididunt do dolor pariatur."}
            </p>
          </section>
        ))}
      </section>
    </article>
  );
}
