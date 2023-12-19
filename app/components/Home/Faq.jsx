export default function FAQ() {
  function changeColor(evt) {
    let question = evt.target;
    const active = document.querySelector(".question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  }
  return (
    // page-center md:grid md:grid-cols-2
    // <section className="page-center  ">
    <section className="page-center gap-2">
      <h2 className="text-textWhite pt-20 pb-10 text-[30px] lg:text-[60px]">
        Questions
      </h2>
      <div className="wrapper">
        <div className="container">
          <div className="question" onClick={changeColor}>
            What will you get?
          </div>
          <div className="answercont">
            <div className="answer">
              My focus right now building niche website for you guys (my future
              customer)!
            </div>
          </div>
        </div>
        <div className="container">
          <div className="question" onClick={changeColor}>
            Why my services will help your company or business?
          </div>
          <div className="answercont">
            <div className="answer">
              Most of my website design and created
              <br />
              <br />
              <a
                className="header-title-section fromLeft"
                href="https://blog.codepen.io/documentation/features/email-verification/#how-do-i-verify-my-email-2"
              >
                How to Verify Email Docs
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="question" onClick={changeColor}>
            What kind of "modern technology" I mentioned and used to create
            these website?
          </div>
          <div className="answercont">
            <div className="answer">
              Most of the time I use Remix or pure HTML and CSS for the design,
              but the modern tech I mentioned probably on the CMS and e-commerce
              part, there is a lot option for modern CMS nowdays but main focus
              right now probably Sanity, Storyblok, and Prismic, buuuuut
              Wordpress is also my main focus too, even wordpress is old tools,
              but sometimes it's better than technology I mentioned, for
              E-Commerce I am still experimenting on Shopify.
              <br />
              <br />
              <a href="https://www.upwork.com/freelancers/~0193378a54ca557817">
                How to Disable JavaScript Docs
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="question" onClick={changeColor}>
            What is the difference between me and other people that use this
            modern tools?
          </div>
          <div className="answercont">
            <div className="answer">
              Everything have some standard right?, well when building a website
              there is certain standard to meet some requirement especially in
              landing page or portfolio for company, and I am trying my best to
              fulfill that standard especially in SEO, I will create template or
              website that meets standard so you as a customer, only focus on
              creating content for your website.
              <br />
              <br />
              <a
                className="header-title-section fromLeft"
                href="https://blog.codepen.io/documentation/features/email-verification/#how-do-i-verify-my-email-2"
              >
                How to Verify Email Docs
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="question" onClick={changeColor}>
            How do I contact the creator of a Pen?
          </div>
          <div className="answercont">
            <div className="answer">
              You can leave a comment on any public Pen. Click the
              &quot;Comments&quot; link in the Pen editor view, or visit the
              Details page.
              <br />
              <br />
              <a href="https://www.upwork.com/freelancers/~0193378a54ca557817">
                How to Contact Creator of a Pen Docs
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="question" onClick={changeColor}>
            What version of [library] does CodePen use?
          </div>
          <div className="answercont">
            <div className="answer">
              We have our current list of library versions{" "}
              <a href="https://codepen.io/versions">here</a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="question" onClick={changeColor}>
            What are forks?
          </div>
          <div className="answercont">
            <div className="answer">
              A fork is a complete copy of a Pen or Project that you can save to
              your own account and modify. Your forked copy comes with
              everything the original author wrote, including all of the code
              and any dependencies.A fork is a complete copy of a Pen or Project
              that you can save to your own account and modify. Your forked copy
              comes with everything the original author wrote, including all of
              the code and any dependencies.A fork is a complete copy of a Pen
              or Project that you can save to your own account and modify. Your
              forked copy comes with everything the original author wrote,
              including all of the code and any dependencies.A fork is a
              complete copy of a Pen or Project that you can save to your own
              account and modify. Your forked copy comes with everything the
              original author wrote, including all of the code and any
              dependencies.
              <br />
              <br />
              <a href="https://blog.codepen.io/documentation/features/forks/">
                Learn More About Forks
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    // {/* <div className="page-center">

    // </div> */}
    // </section>
  );
}
