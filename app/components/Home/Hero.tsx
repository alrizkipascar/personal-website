export default function Hero() {
  return (
    <section className="h1-hero section-pad flex flex-wrap md:items-center h-screen pb-10">
      <div className=" w-full md:w-1/2 h-[50%] lg:h-[100%]">
        <div className="px-6 lg:px-[20px] h-[100%]  text-center grid content-center">
          <img
            src="https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="What do I do"
            className="bg-white rounded-2xl h-auto w-auto whitespace-pre-wrap   "
          ></img>
        </div>
      </div>
      <div className="bg-background w-full md:w-1/2 h-[50%] md:h-full  lg:grid lg:content-center">
        <div className="mx-2 lg:mx-32 ">
          <h2 className=" text-3xl lg:text-[50px] font-semibold justify-start leading-relaxed">
            What do I build for you?
          </h2>

          {/* <!-- country region island --> */}
          <div className="grid grid-cols-3 gap-3 mb-5 font-light justify-center text-gray-500">
            <div className="hovertext-container w-full">
              <p className="hovertext-p1 w-full text-center">Landing Page</p>
              <p className="hovertext-p2 w-full text-center">Modern</p>
            </div>

            <div className="hovertext-container text-center ">
              <p className="hovertext-p1 w-full text-center">CMS</p>
              <p className="hovertext-p2 w-full text-center">Web</p>
            </div>

            <div className="hovertext-container  ">
              <p className="hovertext-p1 w-full text-center ">Shopify</p>
              <p className="hovertext-p2 w-full text-center">Tools</p>
            </div>
          </div>
          {/* 
          <!-- description --> */}
          <p className="description w-full font-sans text-base font-normal leading-relaxed text-primary antialiased text-[14px] lg:text-[20px]">
            Hey my name is Alrizki Pasca Ramadhani, with me let's unlock the
            full potential of your online presence with my modern website
            development services.
            {/* I am specialize in crafting websites that not
            only look great but are strategically optimized for SEO, ensuring
            maximum visibility on search engines. My user-friendly, responsive
            designs are engineered to captivate your audience, encourage
            engagement, and ultimately drive leads to your business. Whether
            you're a small or medium-sized business, we're here to provide you
            with a powerful online tool that delivers results. Let me transform
            your digital presence into a lead-generating powerhouse, helping you
            reach new customers and grow your business. */}
          </p>
        </div>
      </div>
    </section>
  );
}
