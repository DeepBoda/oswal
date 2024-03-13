import Link from "next/link";
import { useState } from "react";
import appData from "@data/app.json";
import { useRouter } from "next/router";

const DefaultHeader = ({ transparent, invert, extraClass }) => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const navItems = [];

  appData.header.menu.forEach((item, index) => {
    let s_class1 = "";

    if (item.children != 0) {
      s_class1 = "mil-has-children";
    }
    let newobj = Object.assign({}, item, { classes: s_class1 });
    navItems.push(newobj);
  });

  return (
    <div
      className={`mil-top-panel${transparent ? " mil-transparent-nav" : ""}${
        !invert ? " mil-invert-nav" : ""
      } mil-animated ${extraClass ? extraClass : ""}`}
    >
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="mil-logo mil-scale-down-trigger mil-accent-trigger">
            <img
              src={appData.header.logo.image}
              alt={appData.header.logo.text}
              className="image-width"
            />
            {/* <div className="mil-h5">
              {appData.header.logo.text}
              <span className="mil-accent">{appData.header.logo.accent}</span>
            </div> */}
          </a>
        </Link>
        <div
          className={`mil-mobile-dropdown mil-menu-center ${
            toggle ? "mil-active" : ""
          }`}
        >
          <div id="swupTopbar" className="mil-top-bar-transition">
            <nav className="mil-dark-nav">
              <ul className="mil-inline-list mil-hidden-trigger">
                {navItems.map((item, key) => (
                  <li className={item.classes} key={`header-menu-item-${key}`}>
                    <Link
                      href={item.link}
                      target={`${item.link}`.endsWith(".pdf") ? "_blank" : ""}
                      // className="mil-link mil-link-hover"
                      className={`${
                        // router.pathname?.includes(item.link)

                        router.pathname == item.link ? "mil-active active" : ""
                      } mil-link mil-link-hover`}
                    >
                      {item.label}
                    </Link>
                    {item.children != 0 && (
                      <ul>
                        {item.children.map((subitem, key) => (
                          <li key={`header-submenu-item-${key}`}>
                            <Link
                              href={subitem.link}
                              className={`${
                                router.pathname == subitem.link
                                  ? "mil-active active"
                                  : ""
                              } mil-link mil-link-hover`}
                            >
                              {subitem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* <ul className="mil-social mil-hidden-trigger">
            {appData.social.map((item, key) => (
              <li key={`header-social-item-${key}`}>
                 <a href={item.link} title={item.title} target="_blank">
                                <i className={item.icon} />
                            </a> 
              </li>
            ))}
          </ul> */}
        </div>

        {/* mobile menu button */}
        <div
          className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <span />
        </div>
        {/* mobile menu button end */}
      </div>
    </div>
  );
};
export default DefaultHeader;

// {
//   "label": "Pages",
//   "link": "#.",
//   "children": [
//     {
//       "label": "About",
//       "link": "/about"
//     },
//     {
//       "label": "About 2",
//       "link": "/about-2"
//     },
//     {
//       "label": "About 3",
//       "link": "/about-3"
//     },
//     {
//       "label": "Services List",
//       "link": "/services"
//     },
//     {
//       "label": "Service Detail",
//       "link": "/services/blog-articles"
//     },
//     {
//       "label": "Team",
//       "link": "/team"
//     },
//     {
//       "label": "404",
//       "link": "/404"
//     }
//   ]
// },
