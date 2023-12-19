import { Link, useLocation } from "@remix-run/react";
import { useState } from "react";
import NavbarButton from "../Header/NavbarButton";

import { motion } from "framer-motion";
// import styles from "~/styles/header.css";
// import type { LinksFunction } from "@remix-run/node";

export default function Header() {
  const location = useLocation();
  const pathname = location?.pathname;
  const admin = "admin";
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  // const [pathNam, setpathName] = useState(null);
  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  // setpathName(pathname);
  // if (pathNam != pathname) {
  //   setIsNavbarVisible(false);
  // }
  console.log(pathname);
  const links = [
    { href: "/", label: "Home", specialHome: "/" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about", label: "About" },
  ];

  if (!pathname.includes(admin)) {
    return (
      <header className="base">
        <nav className="header-container ">
          <h1 className="header-logo">
            <Link to=".">Alrizki Pasca</Link>
          </h1>
          <ul className="  header-ul ">
            {links.map((link) => (
              <Link
                key={link.href}
                className={`${
                  pathname.includes(link.label.toLowerCase()) ||
                  link?.specialHome == pathname
                    ? "border-b border-black"
                    : ""
                } header-li header-title-section fromLeft`}
                to={link.href}
                // to={link.href}
              >
                {/* {pathname.includes(link.label.toLowerCase()) ||
                link?.specialHome == pathname ? (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[1px] w-full bg-black"
                  />
                ) : null} */}
                {link.label}
              </Link>
            ))}
          </ul>

          <div className="flex lg:hidden    justify-end lg:my-0   lg:content-normal">
            <NavbarButton
              onClick={toggleNavbar}
              isNavbarVisible={isNavbarVisible}
            ></NavbarButton>
            {/* {!isNavbarVisible ? null : ( */}
            <nav
              className={`navbar ${
                isNavbarVisible ? "" : "hidden"
              }  block  pr-5 text-[15px] lg:hidden col-span-2 lg:col-span-1 `}
            >
              <ul>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className={`${
                        link.href === pathname ? "border-b border-black" : ""
                      } dashboard-title-section fromLeft relative w-full text-[50px] justify-items-center content-center col-span-1`}
                      to={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* )} */}
          </div>
        </nav>
      </header>
    );
  }
}

// export const links: LinksFunction = () => {
//   // `links` returns an array of objects whose
//   // properties map to the `<link />` component props
//   return [{ rel: "stylesheet", href: styles }];
// };
