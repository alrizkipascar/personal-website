var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// app/components/Layout/NavHeader.tsx
import { Link, useLocation } from "@remix-run/react";
import { useState } from "react";

// app/components/Header/NavbarButton.jsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var NavbarButton = ({ onClick, isNavbarVisible }) => /* @__PURE__ */ jsxDEV2(
  "button",
  {
    className: "navbar-button block lg:hidden text-textWhite  mr-[40px] lg:mr-0",
    onClick,
    children: isNavbarVisible ? (
      // X icon (visible when the navbar is hidden)
      /* @__PURE__ */ jsxDEV2(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: "1.5",
          stroke: "currentColor",
          className: "w-6 h-6",
          children: /* @__PURE__ */ jsxDEV2(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M6 18L18 6M6 6l12 12"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header/NavbarButton.jsx",
              lineNumber: 33,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header/NavbarButton.jsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      )
    ) : (
      // Bars icon (visible when the navbar is visible)
      /* @__PURE__ */ jsxDEV2(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: "1.5",
          stroke: "currentColor",
          className: "w-6 h-6",
          children: /* @__PURE__ */ jsxDEV2(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header/NavbarButton.jsx",
              lineNumber: 17,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header/NavbarButton.jsx",
          lineNumber: 9,
          columnNumber: 9
        },
        this
      )
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/Header/NavbarButton.jsx",
    lineNumber: 3,
    columnNumber: 5
  },
  this
), NavbarButton_default = NavbarButton;

// app/components/Layout/NavHeader.tsx
import { motion } from "framer-motion";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Header() {
  let pathname = useLocation()?.pathname, admin = "admin", [isNavbarVisible, setIsNavbarVisible] = useState(!1), toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  console.log(pathname);
  let links2 = [
    { href: "/", label: "Home", specialHome: "/" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about", label: "About" }
  ];
  if (!pathname.includes(admin))
    return /* @__PURE__ */ jsxDEV3("header", { className: "base", children: /* @__PURE__ */ jsxDEV3("nav", { className: "header-container ", children: [
      /* @__PURE__ */ jsxDEV3("h1", { className: "header-logo", children: /* @__PURE__ */ jsxDEV3(Link, { to: ".", children: "Alrizki Pasca" }, void 0, !1, {
        fileName: "app/components/Layout/NavHeader.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Layout/NavHeader.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("ul", { className: "  header-ul ", children: links2.map(
        (link) => /* @__PURE__ */ jsxDEV3(
          Link,
          {
            className: " header-li header-title-section fromLeft",
            to: link.href,
            children: [
              pathname.includes(link.label.toLowerCase()) || link?.specialHome == pathname ? /* @__PURE__ */ jsxDEV3(
                motion.span,
                {
                  layoutId: "underline",
                  className: "absolute left-0 top-full block h-[1px] w-full bg-black"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Layout/NavHeader.tsx",
                  lineNumber: 43,
                  columnNumber: 15
                },
                this
              ) : null,
              link.label
            ]
          },
          link.href,
          !0,
          {
            fileName: "app/components/Layout/NavHeader.tsx",
            lineNumber: 35,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, !1, {
        fileName: "app/components/Layout/NavHeader.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "flex lg:hidden my-auto   justify-end lg:my-0   lg:content-normal", children: [
        /* @__PURE__ */ jsxDEV3(
          NavbarButton_default,
          {
            onClick: toggleNavbar,
            isNavbarVisible
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout/NavHeader.tsx",
            lineNumber: 54,
            columnNumber: 13
          },
          this
        ),
        isNavbarVisible ? /* @__PURE__ */ jsxDEV3(
          "nav",
          {
            className: `navbar ${isNavbarVisible ? "animate-fadeIn " : "hidden"}  block w-full pr-5 text-[15px] lg:hidden col-span-2 lg:col-span-1"`,
            children: /* @__PURE__ */ jsxDEV3("ul", { children: links2.map(
              (link) => /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(
                Link,
                {
                  className: `${link.href === pathname ? "border-b" : ""} dashboard-title-section fromLeft relative w-full justify-items-center content-center col-span-1`,
                  to: link.href,
                  children: link.label
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Layout/NavHeader.tsx",
                  lineNumber: 67,
                  columnNumber: 23
                },
                this
              ) }, link.href, !1, {
                fileName: "app/components/Layout/NavHeader.tsx",
                lineNumber: 66,
                columnNumber: 17
              }, this)
            ) }, void 0, !1, {
              fileName: "app/components/Layout/NavHeader.tsx",
              lineNumber: 64,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout/NavHeader.tsx",
            lineNumber: 59,
            columnNumber: 13
          },
          this
        ) : null
      ] }, void 0, !0, {
        fileName: "app/components/Layout/NavHeader.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Layout/NavHeader.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout/NavHeader.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this);
}

// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/styles/global.css
var global_default = "/build/_assets/global-2Y6K3B33.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-77TQCL5D.css";

// app/root.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: tailwind_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV4("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV4("head", { children: [
      /* @__PURE__ */ jsxDEV4("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("body", { children: /* @__PURE__ */ jsxDEV4("main", { className: "root-base h-screen", children: [
      /* @__PURE__ */ jsxDEV4(Header, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/projects.$id.approach.jsx
var projects_id_approach_exports = {};
__export(projects_id_approach_exports, {
  default: () => ProjectStack
});
import "@remix-run/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function ProjectStack() {
  return /* @__PURE__ */ jsxDEV5("article", { children: /* @__PURE__ */ jsxDEV5("section", { children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "section-title", children: /* @__PURE__ */ jsxDEV5("h2", { children: "Approach" }, void 0, !1, {
      fileName: "app/routes/projects.$id.approach.jsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/projects.$id.approach.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    "blablabla",
    /* @__PURE__ */ jsxDEV5("section", { children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "content-divider", children: /* @__PURE__ */ jsxDEV5("h2", { children: "Stack" }, void 0, !1, {
        fileName: "app/routes/projects.$id.approach.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/projects.$id.approach.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      "Overview create a new note."
    ] }, void 0, !0, {
      fileName: "app/routes/projects.$id.approach.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5("section", { children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "content-divider", children: /* @__PURE__ */ jsxDEV5("h2", { children: "Library Used" }, void 0, !1, {
        fileName: "app/routes/projects.$id.approach.jsx",
        lineNumber: 19,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/projects.$id.approach.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      "Overview create a new note."
    ] }, void 0, !0, {
      fileName: "app/routes/projects.$id.approach.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects.$id.approach.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects.$id.approach.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/projects.$id.overview.jsx
var projects_id_overview_exports = {};
__export(projects_id_overview_exports, {
  default: () => ProjectOverview
});
import "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function ProjectOverview() {
  return /* @__PURE__ */ jsxDEV6("article", { children: [
    /* @__PURE__ */ jsxDEV6("section", { children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "section-title mb-8", children: /* @__PURE__ */ jsxDEV6("h2", { children: "Overview" }, void 0, !1, {
        fileName: "app/routes/projects.$id.overview.jsx",
        lineNumber: 8,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/projects.$id.overview.jsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("section", { children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "content-divider", children: /* @__PURE__ */ jsxDEV6("h2", { children: "Background" }, void 0, !1, {
          fileName: "app/routes/projects.$id.overview.jsx",
          lineNumber: 13,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/projects.$id.overview.jsx",
          lineNumber: 12,
          columnNumber: 11
        }, this),
        "Overview create a new note."
      ] }, void 0, !0, {
        fileName: "app/routes/projects.$id.overview.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("section", { children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "content-divider", children: /* @__PURE__ */ jsxDEV6("h2", { children: "Solved Problem" }, void 0, !1, {
          fileName: "app/routes/projects.$id.overview.jsx",
          lineNumber: 19,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/projects.$id.overview.jsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        "Overview create a new note."
      ] }, void 0, !0, {
        fileName: "app/routes/projects.$id.overview.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("section", { children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "content-divider", children: /* @__PURE__ */ jsxDEV6("h2", { children: "Color" }, void 0, !1, {
          fileName: "app/routes/projects.$id.overview.jsx",
          lineNumber: 25,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/projects.$id.overview.jsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        "Overview create a new note."
      ] }, void 0, !0, {
        fileName: "app/routes/projects.$id.overview.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("section", { children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "content-divider", children: /* @__PURE__ */ jsxDEV6("h2", { children: "Font" }, void 0, !1, {
          fileName: "app/routes/projects.$id.overview.jsx",
          lineNumber: 31,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/projects.$id.overview.jsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        "Overview create a new note."
      ] }, void 0, !0, {
        fileName: "app/routes/projects.$id.overview.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects.$id.overview.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("section", { children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "sencondary-section-title", children: /* @__PURE__ */ jsxDEV6("h2", { children: "Learn" }, void 0, !1, {
        fileName: "app/routes/projects.$id.overview.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/projects.$id.overview.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      "Overview create a new note."
    ] }, void 0, !0, {
      fileName: "app/routes/projects.$id.overview.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("section", { children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "sencondary-section-title", children: /* @__PURE__ */ jsxDEV6("h2", { children: "Other Porjects" }, void 0, !1, {
        fileName: "app/routes/projects.$id.overview.jsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/projects.$id.overview.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      "Overview create a new note."
    ] }, void 0, !0, {
      fileName: "app/routes/projects.$id.overview.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects.$id.overview.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/projects.$id.gallery.jsx
var projects_id_gallery_exports = {};
__export(projects_id_gallery_exports, {
  default: () => ProjectOverview2
});
import "@remix-run/react";

// app/components/Error/Empty.jsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function Empty({ data }) {
  return /* @__PURE__ */ jsxDEV7("div", { class: "grid h-screen px-4 place-content-center", children: /* @__PURE__ */ jsxDEV7("h1", { class: "tracking-widest text-gray-500 uppercase", children: [
    data?.status ?? "Empty",
    " |",
    " ",
    data?.text ?? "No Content For This Section."
  ] }, void 0, !0, {
    fileName: "app/components/Error/Empty.jsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Error/Empty.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/projects.$id.gallery.jsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function ProjectOverview2() {
  return /* @__PURE__ */ jsxDEV8("article", { children: /* @__PURE__ */ jsxDEV8("section", { children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "section-title", children: /* @__PURE__ */ jsxDEV8("h2", { children: "Gallery" }, void 0, !1, {
      fileName: "app/routes/projects.$id.gallery.jsx",
      lineNumber: 9,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/projects.$id.gallery.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8(Empty, {}, void 0, !1, {
      fileName: "app/routes/projects.$id.gallery.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    "blablabla"
  ] }, void 0, !0, {
    fileName: "app/routes/projects.$id.gallery.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects.$id.gallery.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/projects._index.tsx
var projects_index_exports = {};
__export(projects_index_exports, {
  default: () => Projects
});

// app/components/Projects/BigLeft.jsx
import { Link as Link5 } from "@remix-run/react";

// app/components/Projects/cards/hovercard.jsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function HoverCard({ data }) {
  return /* @__PURE__ */ jsxDEV9("div", { class: "relative group w-full h-full lg:h-[450px] overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV9(
      "img",
      {
        alt: "",
        className: "absolute object-fill object-center w-full h-full transform duration-1000 backdrop-opacity-100",
        src: "https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Projects/cards/hovercard.jsx",
        lineNumber: 4,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV9("div", { className: "absolute w-full h-full shadow-2xl opacity-20 transform duration-700 inset-x-full group-hover:-inset-x-0" }, void 0, !1, {
      fileName: "app/components/Projects/cards/hovercard.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { className: "absolute bg-black w-full h-full transform duration-700 inset-x-full group-hover:-inset-x-0", children: [
      /* @__PURE__ */ jsxDEV9("div", { className: "absolute w-full flex place-content-center", children: /* @__PURE__ */ jsxDEV9("p", { className: "capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10", children: "Team work" }, void 0, !1, {
        fileName: "app/components/Projects/cards/hovercard.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Projects/cards/hovercard.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("div", { className: "absolute w-full flex place-content-center mt-20", children: /* @__PURE__ */ jsxDEV9("p", { className: "font-sans text-center w-4/5 text-white mt-5", children: "Collaborative effort of a group to achieve a common goal the most effective and efficient way!" }, void 0, !1, {
        fileName: "app/components/Projects/cards/hovercard.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Projects/cards/hovercard.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Projects/cards/hovercard.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Projects/cards/hovercard.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/Projects/cards/smallhovercard.jsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function SmallHoverCard({ data }) {
  return /* @__PURE__ */ jsxDEV10("div", { class: "relative group w-full h-full overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV10(
      "img",
      {
        alt: "",
        className: "absolute object-fill object-center w-full h-full transform duration-1000 backdrop-opacity-100",
        src: "https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Projects/cards/smallhovercard.jsx",
        lineNumber: 4,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV10("div", { className: "absolute w-full h-full shadow-2xl opacity-20 transform duration-700 inset-x-full group-hover:-inset-x-0" }, void 0, !1, {
      fileName: "app/components/Projects/cards/smallhovercard.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "absolute bg-black w-full h-full transform duration-700 inset-x-full group-hover:-inset-x-0", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "absolute w-full flex place-content-center", children: /* @__PURE__ */ jsxDEV10("p", { className: "capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10", children: "Team work" }, void 0, !1, {
        fileName: "app/components/Projects/cards/smallhovercard.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Projects/cards/smallhovercard.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "absolute w-full flex place-content-center mt-20", children: /* @__PURE__ */ jsxDEV10("p", { className: "font-sans text-center w-4/5 text-white mt-5", children: "Collaborative effort of a group to achieve a common goal the most effective and efficient way!" }, void 0, !1, {
        fileName: "app/components/Projects/cards/smallhovercard.jsx",
        lineNumber: 17,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Projects/cards/smallhovercard.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Projects/cards/smallhovercard.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Projects/cards/smallhovercard.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/Projects/BigLeft.jsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function BigLeft() {
  return /* @__PURE__ */ jsxDEV11("div", { className: "grid grid-cols-3 gap-5 h-auto ", children: [
    /* @__PURE__ */ jsxDEV11(Link5, { to: "#", className: "col-span-2 ", children: /* @__PURE__ */ jsxDEV11(HoverCard, {}, void 0, !1, {
      fileName: "app/components/Projects/BigLeft.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Projects/BigLeft.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11("div", { className: "col-span-1 grid grid-rows-2 gap-3 w-full h-full lg:h-[450px]", children: [
      /* @__PURE__ */ jsxDEV11(SmallHoverCard, {}, void 0, !1, {
        fileName: "app/components/Projects/BigLeft.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11(SmallHoverCard, {}, void 0, !1, {
        fileName: "app/components/Projects/BigLeft.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Projects/BigLeft.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Projects/BigLeft.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/Projects/TripleGrid.jsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function TripleGrid() {
  return /* @__PURE__ */ jsxDEV12("div", { className: "grid grid-cols-3 gap-5 md:items-center w-full h-full lg:h-[190px]", children: [
    /* @__PURE__ */ jsxDEV12(SmallHoverCard, {}, void 0, !1, {
      fileName: "app/components/Projects/TripleGrid.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12(SmallHoverCard, {}, void 0, !1, {
      fileName: "app/components/Projects/TripleGrid.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12(SmallHoverCard, {}, void 0, !1, {
      fileName: "app/components/Projects/TripleGrid.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Projects/TripleGrid.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/Projects/BigRight.jsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function BigRight() {
  return /* @__PURE__ */ jsxDEV13("div", { className: "grid grid-cols-3 gap-5   h-auto ", children: [
    /* @__PURE__ */ jsxDEV13("div", { className: "col-span-1 grid grid-rows-2 gap-3 w-full h-full lg:h-[450px]", children: [
      /* @__PURE__ */ jsxDEV13(SmallHoverCard, {}, void 0, !1, {
        fileName: "app/components/Projects/BigRight.jsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13(SmallHoverCard, {}, void 0, !1, {
        fileName: "app/components/Projects/BigRight.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Projects/BigRight.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("div", { className: "col-span-2 ", children: /* @__PURE__ */ jsxDEV13(HoverCard, {}, void 0, !1, {
      fileName: "app/components/Projects/BigRight.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Projects/BigRight.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Projects/BigRight.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/projects._index.tsx
import { useLocation as useLocation2 } from "@remix-run/react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function Projects() {
  let location = useLocation2();
  return console.log("location", location), /* @__PURE__ */ jsxDEV14("section", { className: "section-pad ", children: [
    /* @__PURE__ */ jsxDEV14("h1", { className: "dashboard-title-section fromCenter text-textWhite  mt-20 mb-10 ml-6 lg:ml-20 text-[30px] lg:text-[60px]", children: "All Projects" }, void 0, !1, {
      fileName: "app/routes/projects._index.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "grid gap-5 pt-10", children: [
      /* @__PURE__ */ jsxDEV14(BigLeft, {}, void 0, !1, {
        fileName: "app/routes/projects._index.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14(TripleGrid, {}, void 0, !1, {
        fileName: "app/routes/projects._index.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14(BigRight, {}, void 0, !1, {
        fileName: "app/routes/projects._index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14(TripleGrid, {}, void 0, !1, {
        fileName: "app/routes/projects._index.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects._index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "grid grid-flow-row lg:grid-cols-2 gap-5 md:items-center h-full pb-10" }, void 0, !1, {
      fileName: "app/routes/projects._index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects._index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/services._index.tsx
var services_index_exports = {};
__export(services_index_exports, {
  default: () => About,
  meta: () => meta
});
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "About Alrizki" },
  { name: "description", content: "About Alrizki Pasca" }
];
function About() {
  return /* @__PURE__ */ jsxDEV15("section", { className: "section-pad ", children: [
    /* @__PURE__ */ jsxDEV15("h1", { children: "Welcome to Remix" }, void 0, !1, {
      fileName: "app/routes/services._index.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("ul", { children: [
      /* @__PURE__ */ jsxDEV15("li", { children: /* @__PURE__ */ jsxDEV15(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/blog",
          rel: "noreferrer",
          children: "15m Quickstart Blog Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/services._index.tsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/services._index.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("li", { children: /* @__PURE__ */ jsxDEV15(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/jokes",
          rel: "noreferrer",
          children: "Deep Dive Jokes App Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/services._index.tsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/services._index.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("li", { children: /* @__PURE__ */ jsxDEV15("a", { target: "_blank", href: "https://remix.run/docs", rel: "noreferrer", children: "Remix Docs" }, void 0, !1, {
        fileName: "app/routes/services._index.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/services._index.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services._index.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/services._index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/projects.$id.jsx
var projects_id_exports = {};
__export(projects_id_exports, {
  default: () => ProjectId,
  loader: () => loader
});
import { json } from "@remix-run/node";
import {
  NavLink,
  Outlet as Outlet2,
  useLoaderData,
  useLocation as useLocation3
} from "@remix-run/react";
import { motion as motion2 } from "framer-motion";

// app/components/Projects/id/Top.jsx
import { Link as Link6 } from "@remix-run/react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function Top({ data }) {
  return /* @__PURE__ */ jsxDEV16("div", { className: "flex flex-wrap ", children: [
    /* @__PURE__ */ jsxDEV16("section", { className: "lg:w-[50%] lg:h-1/2", children: /* @__PURE__ */ jsxDEV16("video", { className: "w-full h-full", loop: !0, autoPlay: !0, muted: !0, children: /* @__PURE__ */ jsxDEV16("source", { src: "/car.mp4", type: "video/mp4" }, void 0, !1, {
      fileName: "app/components/Projects/id/Top.jsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Projects/id/Top.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Projects/id/Top.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("section", { className: "lg:w-[50%]  lg:h-1/2 ", children: /* @__PURE__ */ jsxDEV16("div", { className: "ml-[40px]", children: [
      /* @__PURE__ */ jsxDEV16("div", { children: [
        /* @__PURE__ */ jsxDEV16("h2", { className: "top-h2 ", children: data?.shortdesc ?? "Short Description" }, void 0, !1, {
          fileName: "app/components/Projects/id/Top.jsx",
          lineNumber: 14,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV16(
          Link6,
          {
            to: data?.weblink ?? "#",
            className: "flex top-link dashboard-title-section fromLeft",
            children: [
              "Live Web",
              /* @__PURE__ */ jsxDEV16(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  className: "w-[30px] h-[30px]",
                  children: /* @__PURE__ */ jsxDEV16(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Projects/id/Top.jsx",
                      lineNumber: 30,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Projects/id/Top.jsx",
                  lineNumber: 22,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Projects/id/Top.jsx",
            lineNumber: 17,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Projects/id/Top.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      "test test test test"
    ] }, void 0, !0, {
      fileName: "app/components/Projects/id/Top.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Projects/id/Top.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Projects/id/Top.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/projects.$id.jsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var loader = async ({ params }) => {
  let userId = params.id;
  return json({ userId, noteListItems: [
    {
      id: "overview",
      title: "Overview"
    },
    {
      id: "approach",
      title: "Development Approach"
    },
    {
      id: "gallery",
      title: "Gallery"
    }
  ] });
};
function ProjectId() {
  let data = useLoaderData(), pathname = useLocation3()?.pathname;
  return (
    // <AnimatePresence>
    /* @__PURE__ */ jsxDEV17("article", { className: "section-pad w-full project-base ", children: [
      /* @__PURE__ */ jsxDEV17("h1", { className: "text-[60px] lg:text-[100px]", children: [
        "Project ",
        data.userId
      ] }, void 0, !0, {
        fileName: "app/routes/projects.$id.jsx",
        lineNumber: 43,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV17("main", { className: "flex-row h-full ", children: [
        /* @__PURE__ */ jsxDEV17("div", { className: "h-auto w-full  ", children: [
          /* @__PURE__ */ jsxDEV17(Top, {}, void 0, !1, {
            fileName: "app/routes/projects.$id.jsx",
            lineNumber: 46,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV17("ol", { className: "flex w-full  gap-4 mt-[20px] justify-center rounded-full ", children: data.noteListItems.map((note) => /* @__PURE__ */ jsxDEV17("li", { children: /* @__PURE__ */ jsxDEV17(
            NavLink,
            {
              className: ({ isActive }) => " text-black relative w-full h-full text-xl rounded-full lg:px-3 lg:py-3  ",
              to: note.id,
              children: [
                pathname.includes(note.id) ? /* @__PURE__ */ jsxDEV17(
                  motion2.div,
                  {
                    layoutId: "bg-projects-state",
                    className: `absolute inset-0 rounded-full bg-white
                          `,
                    transition: { type: "spring", duration: 1 }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/projects.$id.jsx",
                    lineNumber: 59,
                    columnNumber: 21
                  },
                  this
                ) : null,
                /* @__PURE__ */ jsxDEV17("span", { className: "relative", children: note.title }, void 0, !1, {
                  fileName: "app/routes/projects.$id.jsx",
                  lineNumber: 66,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/projects.$id.jsx",
              lineNumber: 50,
              columnNumber: 17
            },
            this
          ) }, note.id, !1, {
            fileName: "app/routes/projects.$id.jsx",
            lineNumber: 49,
            columnNumber: 15
          }, this)) }, void 0, !1, {
            fileName: "app/routes/projects.$id.jsx",
            lineNumber: 47,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/projects.$id.jsx",
          lineNumber: 45,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { className: "flex-1 ", children: /* @__PURE__ */ jsxDEV17(Outlet2, {}, void 0, !1, {
          fileName: "app/routes/projects.$id.jsx",
          lineNumber: 74,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/projects.$id.jsx",
          lineNumber: 73,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/projects.$id.jsx",
        lineNumber: 44,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects.$id.jsx",
      lineNumber: 42,
      columnNumber: 5
    }, this)
  );
}

// app/routes/services.$id.jsx
var services_id_exports = {};
__export(services_id_exports, {
  default: () => ServicesId,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import {
  Link as Link8,
  NavLink as NavLink2,
  Outlet as Outlet3,
  useLoaderData as useLoaderData2
} from "@remix-run/react";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var loader2 = async ({ params }) => {
  let userId = params.id;
  return json2({ userId, noteListItems: [
    {
      id: "overview",
      title: "Overview"
    },
    {
      id: "stack",
      title: "Stack"
    },
    {
      id: "gallery",
      title: "Gallery"
    },
    {
      id: "approach",
      title: "Development Approach"
    }
  ] });
};
function ServicesId() {
  let data = useLoaderData2();
  return /* @__PURE__ */ jsxDEV18("article", { className: "section-pad w-full ", children: [
    /* @__PURE__ */ jsxDEV18("h1", { className: "mb-10 ml-6 text-[30px] lg:text-[60px]", children: data.userId }, void 0, !1, {
      fileName: "app/routes/services.$id.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("main", { className: "flex h-full ", children: [
      /* @__PURE__ */ jsxDEV18("div", { className: "h-full w-80 border-r ", children: [
        /* @__PURE__ */ jsxDEV18(Link8, { to: "new", className: "block p-4 text-xl text-blue-500", children: "+ New Note" }, void 0, !1, {
          fileName: "app/routes/services.$id.jsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV18("hr", {}, void 0, !1, {
          fileName: "app/routes/services.$id.jsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        data.noteListItems.length === 0 ? /* @__PURE__ */ jsxDEV18("p", { className: "p-4", children: "No notes yet" }, void 0, !1, {
          fileName: "app/routes/services.$id.jsx",
          lineNumber: 48,
          columnNumber: 13
        }, this) : /* @__PURE__ */ jsxDEV18("ol", { children: data.noteListItems.map((note) => /* @__PURE__ */ jsxDEV18("li", { children: /* @__PURE__ */ jsxDEV18(
          NavLink2,
          {
            className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
            to: note.id,
            children: [
              "\u{1F4DD} ",
              note.title
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/services.$id.jsx",
            lineNumber: 53,
            columnNumber: 19
          },
          this
        ) }, note.id, !1, {
          fileName: "app/routes/services.$id.jsx",
          lineNumber: 52,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/services.$id.jsx",
          lineNumber: 50,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/services.$id.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "flex-1 p-6", children: /* @__PURE__ */ jsxDEV18(Outlet3, {}, void 0, !1, {
        fileName: "app/routes/services.$id.jsx",
        lineNumber: 68,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/services.$id.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/services.$id.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/services.$id.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/admin.$.jsx
var admin_exports = {};

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta2
});

// app/components/Home/Faq.jsx
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function FAQ() {
  function changeColor(evt) {
    let question = evt.target, active = document.querySelector(".question.active");
    active && active !== question && (active.classList.toggle("active"), active.nextElementSibling.style.maxHeight = 0), question.classList.toggle("active");
    let answer = question.nextElementSibling;
    question.classList.contains("active") ? answer.style.maxHeight = answer.scrollHeight + "px" : answer.style.maxHeight = 0;
  }
  return (
    // page-center md:grid md:grid-cols-2
    /* @__PURE__ */ jsxDEV19("section", { className: "w-[100%] h-[100%] page-center  gap-2", children: [
      /* @__PURE__ */ jsxDEV19("div", { className: "page-center", children: /* @__PURE__ */ jsxDEV19("h2", { className: "text-textWhite pt-20 pb-10 text-[30px] lg:text-[60px]", children: "Questions" }, void 0, !1, {
        fileName: "app/components/Home/Faq.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/Home/Faq.jsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV19("div", { className: "page-center", children: /* @__PURE__ */ jsxDEV19("div", { className: "wrapper", children: [
        /* @__PURE__ */ jsxDEV19("div", { className: "container", children: [
          /* @__PURE__ */ jsxDEV19("div", { className: "question", onClick: changeColor, children: "What is my main focus right now?" }, void 0, !1, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 28,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { className: "answercont", children: /* @__PURE__ */ jsxDEV19("div", { className: "answer", children: "My focus right now building niche website for you guys (my future customer)!" }, void 0, !1, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 32,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 31,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Home/Faq.jsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "container", children: [
          /* @__PURE__ */ jsxDEV19("div", { className: "question", onClick: changeColor, children: "Why my services will help your company or business?" }, void 0, !1, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 39,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { className: "answercont", children: /* @__PURE__ */ jsxDEV19("div", { className: "answer", children: [
            "Most of my website design and created",
            /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
              fileName: "app/components/Home/Faq.jsx",
              lineNumber: 45,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
              fileName: "app/components/Home/Faq.jsx",
              lineNumber: 46,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19(
              "a",
              {
                className: "header-title-section fromLeft",
                href: "https://blog.codepen.io/documentation/features/email-verification/#how-do-i-verify-my-email-2",
                children: "How to Verify Email Docs"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Home/Faq.jsx",
                lineNumber: 47,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 43,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 42,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Home/Faq.jsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "container", children: [
          /* @__PURE__ */ jsxDEV19("div", { className: "question", onClick: changeColor, children: 'What kind of "modern technology" I mentioned and used to create these website?' }, void 0, !1, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 58,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { className: "answercont", children: /* @__PURE__ */ jsxDEV19("div", { className: "answer", children: [
            "Most of the time I use Remix or pure HTML and CSS for the design, but the modern tech I mentioned probably on the CMS and e-commerce part, there is a lot option for modern CMS nowdays but main focus right now probably Sanity, Storyblok, and Prismic, buuuuut Wordpress is also my main focus too, even wordpress is old tools, but sometimes it's better than technology I mentioned, for E-Commerce I am still experimenting on Shopify.",
            /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
              fileName: "app/components/Home/Faq.jsx",
              lineNumber: 72,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
              fileName: "app/components/Home/Faq.jsx",
              lineNumber: 73,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19("a", { href: "https://blog.codepen.io/documentation/features/turn-off-javascript-in-previews/", children: "How to Disable JavaScript Docs" }, void 0, !1, {
              fileName: "app/components/Home/Faq.jsx",
              lineNumber: 74,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 63,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 62,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Home/Faq.jsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "container", children: [
          /* @__PURE__ */ jsxDEV19("div", { className: "question", onClick: changeColor, children: "What is the difference between me and other people that use this modern tools?" }, void 0, !1, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 81,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { className: "answercont", children: /* @__PURE__ */ jsxDEV19("div", { className: "answer", children: [
            "Everything have some standard right?, well when building a website there is certain standard to meet some requirement especially in landing page or portfolio for company, and I am trying my best to fulfill that standard especially in SEO, I will create template or website that meets standard so you as a customer, only focus on creating content for your website.",
            /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
              fileName: "app/components/Home/Faq.jsx",
              lineNumber: 93,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
              fileName: "app/components/Home/Faq.jsx",
              lineNumber: 94,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19(
              "a",
              {
                className: "header-title-section fromLeft",
                href: "https://blog.codepen.io/documentation/features/email-verification/#how-do-i-verify-my-email-2",
                children: "How to Verify Email Docs"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Home/Faq.jsx",
                lineNumber: 95,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 86,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 85,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Home/Faq.jsx",
          lineNumber: 80,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "container", children: [
          /* @__PURE__ */ jsxDEV19("div", { className: "question", onClick: changeColor, children: "How do I contact the creator of a Pen?" }, void 0, !1, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 105,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { className: "answercont", children: /* @__PURE__ */ jsxDEV19("div", { className: "answer", children: [
            'You can leave a comment on any public Pen. Click the "Comments" link in the Pen editor view, or visit the Details page.',
            /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
              fileName: "app/components/Home/Faq.jsx",
              lineNumber: 113,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
              fileName: "app/components/Home/Faq.jsx",
              lineNumber: 114,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19("a", { href: "https://blog.codepen.io/documentation/faq/how-do-i-contact-the-creator-of-a-pen/", children: "How to Contact Creator of a Pen Docs" }, void 0, !1, {
              fileName: "app/components/Home/Faq.jsx",
              lineNumber: 115,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 109,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 108,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Home/Faq.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "container", children: [
          /* @__PURE__ */ jsxDEV19("div", { className: "question", onClick: changeColor, children: "What version of [library] does CodePen use?" }, void 0, !1, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 123,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { className: "answercont", children: /* @__PURE__ */ jsxDEV19("div", { className: "answer", children: [
            "We have our current list of library versions",
            " ",
            /* @__PURE__ */ jsxDEV19("a", { href: "https://codepen.io/versions", children: "here" }, void 0, !1, {
              fileName: "app/components/Home/Faq.jsx",
              lineNumber: 129,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 127,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 126,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Home/Faq.jsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "container", children: [
          /* @__PURE__ */ jsxDEV19("div", { className: "question", onClick: changeColor, children: "What are forks?" }, void 0, !1, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 135,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV19("div", { className: "answercont", children: /* @__PURE__ */ jsxDEV19("div", { className: "answer", children: [
            "A fork is a complete copy of a Pen or Project that you can save to your own account and modify. Your forked copy comes with everything the original author wrote, including all of the code and any dependencies.A fork is a complete copy of a Pen or Project that you can save to your own account and modify. Your forked copy comes with everything the original author wrote, including all of the code and any dependencies.A fork is a complete copy of a Pen or Project that you can save to your own account and modify. Your forked copy comes with everything the original author wrote, including all of the code and any dependencies.A fork is a complete copy of a Pen or Project that you can save to your own account and modify. Your forked copy comes with everything the original author wrote, including all of the code and any dependencies.",
            /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
              fileName: "app/components/Home/Faq.jsx",
              lineNumber: 154,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19("br", {}, void 0, !1, {
              fileName: "app/components/Home/Faq.jsx",
              lineNumber: 155,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19("a", { href: "https://blog.codepen.io/documentation/features/forks/", children: "Learn More About Forks" }, void 0, !1, {
              fileName: "app/components/Home/Faq.jsx",
              lineNumber: 156,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 139,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/Home/Faq.jsx",
            lineNumber: 138,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Home/Faq.jsx",
          lineNumber: 134,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Home/Faq.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/Home/Faq.jsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Home/Faq.jsx",
      lineNumber: 19,
      columnNumber: 5
    }, this)
  );
}

// app/components/Home/Hero.tsx
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function Hero() {
  return /* @__PURE__ */ jsxDEV20("section", { className: "h1-hero section-pad flex flex-wrap md:items-center h-screen pb-10", children: [
    /* @__PURE__ */ jsxDEV20("div", { className: " w-full md:w-1/2 h-[50%] lg:h-[100%]", children: /* @__PURE__ */ jsxDEV20("div", { className: "px-6 lg:px-[20px] h-[100%]  text-center grid content-center", children: /* @__PURE__ */ jsxDEV20(
      "img",
      {
        src: "https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "What do I do",
        className: "bg-white rounded-2xl h-auto w-auto whitespace-pre-wrap   "
      },
      void 0,
      !1,
      {
        fileName: "app/components/Home/Hero.tsx",
        lineNumber: 6,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Home/Hero.tsx",
      lineNumber: 5,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Home/Hero.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20("div", { className: "bg-background w-full md:w-1/2 h-[50%] md:h-full  lg:grid lg:content-center", children: /* @__PURE__ */ jsxDEV20("div", { className: "mx-2 lg:mx-32 ", children: [
      /* @__PURE__ */ jsxDEV20("h2", { className: " text-3xl lg:text-[50px] font-semibold justify-start leading-relaxed", children: "What do I build for you?" }, void 0, !1, {
        fileName: "app/components/Home/Hero.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV20("div", { className: "grid grid-cols-3 gap-3 mb-5 font-light justify-center text-gray-500", children: [
        /* @__PURE__ */ jsxDEV20("div", { className: "hovertext-container w-full", children: [
          /* @__PURE__ */ jsxDEV20("p", { className: "hovertext-p1 w-full text-center", children: "Landing Page" }, void 0, !1, {
            fileName: "app/components/Home/Hero.tsx",
            lineNumber: 22,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV20("p", { className: "hovertext-p2 w-full text-center", children: "Modern" }, void 0, !1, {
            fileName: "app/components/Home/Hero.tsx",
            lineNumber: 23,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Home/Hero.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV20("div", { className: "hovertext-container text-center ", children: [
          /* @__PURE__ */ jsxDEV20("p", { className: "hovertext-p1 w-full text-center", children: "CMS" }, void 0, !1, {
            fileName: "app/components/Home/Hero.tsx",
            lineNumber: 27,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV20("p", { className: "hovertext-p2 w-full text-center", children: "Web" }, void 0, !1, {
            fileName: "app/components/Home/Hero.tsx",
            lineNumber: 28,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Home/Hero.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV20("div", { className: "hovertext-container  ", children: [
          /* @__PURE__ */ jsxDEV20("p", { className: "hovertext-p1 w-full text-center ", children: "Shopify" }, void 0, !1, {
            fileName: "app/components/Home/Hero.tsx",
            lineNumber: 32,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV20("p", { className: "hovertext-p2 w-full text-center", children: "Tools" }, void 0, !1, {
            fileName: "app/components/Home/Hero.tsx",
            lineNumber: 33,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Home/Hero.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Home/Hero.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV20("p", { className: "description w-full font-sans text-base font-normal leading-relaxed text-primary antialiased text-[14px] lg:text-[20px]", children: "Hey my name is Alrizki Pasca Ramadhani, with me let's unlock the full potential of your online presence with my modern website development services." }, void 0, !1, {
        fileName: "app/components/Home/Hero.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Home/Hero.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Home/Hero.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Home/Hero.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/Home/ProjectSection/ProjectCard.jsx
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
function ProjectCard() {
  return /* @__PURE__ */ jsxDEV21("div", { className: "main-container", children: [
    /* @__PURE__ */ jsxDEV21("div", { className: "video-container", children: /* @__PURE__ */ jsxDEV21("video", { src: "car.mp4" }, void 0, !1, {
      fileName: "app/components/Home/ProjectSection/ProjectCard.jsx",
      lineNumber: 5,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Home/ProjectSection/ProjectCard.jsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("div", { className: "video-description flex-row", children: [
      /* @__PURE__ */ jsxDEV21("div", { className: "flex gap-1 items-center ", children: [
        /* @__PURE__ */ jsxDEV21(
          "div",
          {
            className: `rounded-full w-2 h-2 
                   
                    `,
            style: {
              backgroundColor: "black"
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/Home/ProjectSection/ProjectCard.jsx",
            lineNumber: 15,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV21("p", { children: "Title 1" }, void 0, !1, {
          fileName: "app/components/Home/ProjectSection/ProjectCard.jsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Home/ProjectSection/ProjectCard.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21("div", { className: "flex  gap-1 items-center ", children: [
        /* @__PURE__ */ jsxDEV21(
          "div",
          {
            className: `rounded-full w-2 h-2 
                   
                    `,
            style: {
              backgroundColor: "black"
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/Home/ProjectSection/ProjectCard.jsx",
            lineNumber: 26,
            columnNumber: 11
          },
          this
        ),
        " ",
        /* @__PURE__ */ jsxDEV21("div", { children: "tags" }, void 0, !1, {
          fileName: "app/components/Home/ProjectSection/ProjectCard.jsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Home/ProjectSection/ProjectCard.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Home/ProjectSection/ProjectCard.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Home/ProjectSection/ProjectCard.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/Home/ProjectSection.jsx
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
function ProjectSection() {
  if (typeof document < "u") {
    let video = document.querySelectorAll(".video-container video");
    for (let i = 0; i < video.length; i++)
      video[i].addEventListener("mouseenter", () => {
        video[i].play();
      }), video[i].addEventListener("mouseleave", () => {
        video[i].pause(), video[i].currentTime = "0";
      });
  }
  return /* @__PURE__ */ jsxDEV22("section", { className: "section-pad ", children: [
    /* @__PURE__ */ jsxDEV22("h2", { className: "dashboard-title-section fromCenter text-textWhite  mt-20 mb-10 ml-6 lg:ml-20 text-[30px] lg:text-[60px]", children: "Latest Projects" }, void 0, !1, {
      fileName: "app/components/Home/ProjectSection.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV22("div", { className: "grid lg:grid-cols-2 gap-5 md:items-center h-full pb-10", children: [
      /* @__PURE__ */ jsxDEV22(ProjectCard, {}, void 0, !1, {
        fileName: "app/components/Home/ProjectSection.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV22(ProjectCard, {}, void 0, !1, {
        fileName: "app/components/Home/ProjectSection.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Home/ProjectSection.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Home/ProjectSection.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/Home/ServiceSection.tsx
import { Link as Link9 } from "@remix-run/react";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
function ServiceSection() {
  return /* @__PURE__ */ jsxDEV23("section", { className: "section-pad ", children: [
    /* @__PURE__ */ jsxDEV23("h2", { className: "dashboard-title-section fromCenter text-textWhite  mt-20 mb-10 ml-6 lg:ml-20 text-[30px] lg:text-[60px]", children: "Services" }, void 0, !1, {
      fileName: "app/components/Home/ServiceSection.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV23("article", { className: "w-full h-auto lg:h-[600px] grid gap-3 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxDEV23("div", { className: "lg:m-[20px] lg:col-span-3  rounded-xl", children: /* @__PURE__ */ jsxDEV23("div", { className: "px-6 lg:px-32 h-[100%]   ", children: [
        /* @__PURE__ */ jsxDEV23("h2", { className: "  whitespace-pre-wrap lg:pt-20 pb-10 text-2xl lg:text-[50px] font-semibold leading-normal", children: "What I am offering to you" }, void 0, !1, {
          fileName: "app/components/Home/ServiceSection.tsx",
          lineNumber: 12,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV23("p", { className: "text-[15px] lg:text-[30px]", children: "My goals is to create you good website it can be custom website, or making your design into reality." }, void 0, !1, {
          fileName: "app/components/Home/ServiceSection.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Home/ServiceSection.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Home/ServiceSection.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV23("div", { className: "lg:col-span-2 grid grid-rows-3 lg:m-[20px] gap-3 lg:gap-[20px]", children: [
        /* @__PURE__ */ jsxDEV23(Link9, { to: "#", className: "rounded-xl grid grid-cols-8", children: [
          /* @__PURE__ */ jsxDEV23("div", { className: "font-semibold font-cinzel border-r border-black col-span-2 text-[60px] grid justify-center content-center", children: "01" }, void 0, !1, {
            fileName: "app/components/Home/ServiceSection.tsx",
            lineNumber: 23,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV23("div", { className: "col-span-6 flex-row pl-3", children: [
            /* @__PURE__ */ jsxDEV23("div", { className: "font-semibold text-2xl", children: "Static Page" }, void 0, !1, {
              fileName: "app/components/Home/ServiceSection.tsx",
              lineNumber: 27,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV23("div", { children: "I design from start or build your design WITHOUT content management system." }, void 0, !1, {
              fileName: "app/components/Home/ServiceSection.tsx",
              lineNumber: 28,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Home/ServiceSection.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Home/ServiceSection.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV23(Link9, { to: "#", className: "rounded-xl grid grid-cols-8", children: [
          /* @__PURE__ */ jsxDEV23("div", { className: "font-semibold font-cinzel border-r border-black col-span-2 text-[60px] grid justify-center content-center", children: "02" }, void 0, !1, {
            fileName: "app/components/Home/ServiceSection.tsx",
            lineNumber: 35,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV23("div", { className: "col-span-6 flex-row pl-3 ", children: [
            /* @__PURE__ */ jsxDEV23("div", { className: "font-semibold text-2xl", children: "Content Management System" }, void 0, !1, {
              fileName: "app/components/Home/ServiceSection.tsx",
              lineNumber: 39,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV23("div", { children: "I design from start or build your design WITH modern content management system." }, void 0, !1, {
              fileName: "app/components/Home/ServiceSection.tsx",
              lineNumber: 42,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Home/ServiceSection.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Home/ServiceSection.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV23(Link9, { to: "#", "aria-disabled": !0, className: "rounded-xl grid grid-cols-8", children: [
          /* @__PURE__ */ jsxDEV23("div", { className: "font-semibold font-cinzel border-r border-black col-span-2 text-[60px] grid justify-center content-center", children: "03" }, void 0, !1, {
            fileName: "app/components/Home/ServiceSection.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV23("div", { className: "col-span-6 flex-row pl-3", children: [
            /* @__PURE__ */ jsxDEV23("div", { className: "font-semibold text-2xl", children: "Shopify" }, void 0, !1, {
              fileName: "app/components/Home/ServiceSection.tsx",
              lineNumber: 53,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV23("div", { children: "Coming soon." }, void 0, !1, {
              fileName: "app/components/Home/ServiceSection.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Home/ServiceSection.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Home/ServiceSection.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Home/ServiceSection.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Home/ServiceSection.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Home/ServiceSection.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/Home/MainHero.jsx
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
function MainHero() {
  return /* @__PURE__ */ jsxDEV24("section", { className: "h-screen md:pt-[200px] page-center", children: [
    /* @__PURE__ */ jsxDEV24("h1", { className: "introText max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ", children: "Hey My Name is Alrizki" }, void 0, !1, {
      fileName: "app/components/Home/MainHero.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV24(
      "h1",
      {
        className: `\r
           max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl `,
        children: "Your Personal Developer"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Home/MainHero.jsx",
        lineNumber: 10,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24("p", { className: "max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400", children: "From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack." }, void 0, !1, {
      fileName: "app/components/Home/MainHero.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV24(
      "a",
      {
        href: "#",
        className: "inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900",
        children: [
          "Get started",
          /* @__PURE__ */ jsxDEV24(
            "svg",
            {
              className: "w-5 h-5 ml-2 -mr-1",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsxDEV24(
                "path",
                {
                  "fill-rule": "evenodd",
                  d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                  "clip-rule": "evenodd"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Home/MainHero.jsx",
                  lineNumber: 31,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Home/MainHero.jsx",
              lineNumber: 25,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Home/MainHero.jsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "a",
      {
        href: "#",
        className: "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
        children: "Speak to Sales"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Home/MainHero.jsx",
        lineNumber: 38,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Home/MainHero.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV25(
    "article",
    {
      className: " relative",
      style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" },
      children: [
        /* @__PURE__ */ jsxDEV25(MainHero, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 22,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV25(Hero, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 23,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV25(ProjectSection, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 24,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV25(ServiceSection, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV25(FAQ, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 26,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV25("section", {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 27,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV25("section", {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 28,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV25("section", {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}

// app/routes/blogs.tsx
var blogs_exports = {};
__export(blogs_exports, {
  default: () => blogs
});
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
function blogs() {
  return /* @__PURE__ */ jsxDEV26("section", { children: "Hello Blogs" }, void 0, !1, {
    fileName: "app/routes/blogs.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-PCWL7Z3X.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-SOKQPZ7N.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-MDT4CUBR.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MXRZNHC6.js", imports: ["/build/_shared/chunk-LOGZJK57.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-DMD7OITW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/admin.$": { id: "routes/admin.$", parentId: "root", path: "admin/*", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.$-PE7LYK63.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/blogs": { id: "routes/blogs", parentId: "root", path: "blogs", index: void 0, caseSensitive: void 0, module: "/build/routes/blogs-6OCJPEB4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/projects.$id": { id: "routes/projects.$id", parentId: "root", path: "projects/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/projects.$id-ROAHIXQF.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/projects.$id.approach": { id: "routes/projects.$id.approach", parentId: "routes/projects.$id", path: "approach", index: void 0, caseSensitive: void 0, module: "/build/routes/projects.$id.approach-ZCW35CK5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/projects.$id.gallery": { id: "routes/projects.$id.gallery", parentId: "routes/projects.$id", path: "gallery", index: void 0, caseSensitive: void 0, module: "/build/routes/projects.$id.gallery-NGF2JFSM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/projects.$id.overview": { id: "routes/projects.$id.overview", parentId: "routes/projects.$id", path: "overview", index: void 0, caseSensitive: void 0, module: "/build/routes/projects.$id.overview-YCNSOB7F.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/projects._index": { id: "routes/projects._index", parentId: "root", path: "projects", index: !0, caseSensitive: void 0, module: "/build/routes/projects._index-FFSEZIGB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/services.$id": { id: "routes/services.$id", parentId: "root", path: "services/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/services.$id-2NIFH7TV.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/services._index": { id: "routes/services._index", parentId: "root", path: "services", index: !0, caseSensitive: void 0, module: "/build/routes/services._index-6XFLVRCX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "66ce84c5", hmr: { runtime: "/build/_shared\\chunk-MDT4CUBR.js", timestamp: 1699587730181 }, url: "/build/manifest-66CE84C5.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/projects.$id.approach": {
    id: "routes/projects.$id.approach",
    parentId: "routes/projects.$id",
    path: "approach",
    index: void 0,
    caseSensitive: void 0,
    module: projects_id_approach_exports
  },
  "routes/projects.$id.overview": {
    id: "routes/projects.$id.overview",
    parentId: "routes/projects.$id",
    path: "overview",
    index: void 0,
    caseSensitive: void 0,
    module: projects_id_overview_exports
  },
  "routes/projects.$id.gallery": {
    id: "routes/projects.$id.gallery",
    parentId: "routes/projects.$id",
    path: "gallery",
    index: void 0,
    caseSensitive: void 0,
    module: projects_id_gallery_exports
  },
  "routes/projects._index": {
    id: "routes/projects._index",
    parentId: "root",
    path: "projects",
    index: !0,
    caseSensitive: void 0,
    module: projects_index_exports
  },
  "routes/services._index": {
    id: "routes/services._index",
    parentId: "root",
    path: "services",
    index: !0,
    caseSensitive: void 0,
    module: services_index_exports
  },
  "routes/projects.$id": {
    id: "routes/projects.$id",
    parentId: "root",
    path: "projects/:id",
    index: void 0,
    caseSensitive: void 0,
    module: projects_id_exports
  },
  "routes/services.$id": {
    id: "routes/services.$id",
    parentId: "root",
    path: "services/:id",
    index: void 0,
    caseSensitive: void 0,
    module: services_id_exports
  },
  "routes/admin.$": {
    id: "routes/admin.$",
    parentId: "root",
    path: "admin/*",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/blogs": {
    id: "routes/blogs",
    parentId: "root",
    path: "blogs",
    index: void 0,
    caseSensitive: void 0,
    module: blogs_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
