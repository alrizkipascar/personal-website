import { Link } from "@remix-run/react";

export default function AboutUs() {
  return (
    <section>
      <div className="we-are-block">
        <div id="about-us-section">
          <div className="about-us-image">
            <img
              src="https://alrizkipersonal.s3.ap-southeast-3.amazonaws.com/homeabout.PNG"
              //   "https://digitalupgrade.com/images/lobbyimage_1.jpg"
              width="808"
              height="458"
              alt="Lobby Image"
            />
          </div>

          <div className="about-us-info">
            <h2>Digital Craftsman at Your Service</h2>

            <p>
              Hello, I'm Alrizki Pasca Ramadhani, a seasoned software developer
              and digital craftsman. With a passion for crafting immersive
              landing pages, I bring a unique blend of technical prowess and
              creative flair to the digital realm. From turning ideas into
              functional realities to designing landing pages that are more than
              gateways, I specialize in creating seamless, visually captivating
              digital experiences. Open to freelance adventures, I'm ready to
              collaborate on projects that demand both technical excellence and
              a creative touch. Let's transform your digital vision into an
              extraordinary online reality.
            </p>

            <Link
              to="/about"
              className="about-button"
              href="#"
              title="About Us Button"
            >
              ABOUT
            </Link>
          </div>
        </div>

        {/* <div id="history-section">
            <div className="history-image">
              <img
                src="https://digitalupgrade.com/images/building_pic.jpg"
                width="951"
                height="471"
                alt="Building Pic"
              />
            </div>
  
            <div className="history-info">
              <h2>Preserving Local History</h2>
  
              <p>
                In 2018, technology companies, Desktop Doctors & Digital Upgrade
                found a new place to call home, at 816 N. 9th Ave. Since the
                takeover of the 118-year-old building (formally Stippler Tool &
                Supply and Crown Chair Company), there have been many renovations
                completed to preserve this local piece of Evansville, IN history.
              </p>
  
              <a className="about-button" href="#" title="History Button">
                HISTORY
              </a>
            </div>
          </div> */}
      </div>
    </section>
  );
}
