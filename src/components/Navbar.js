import logo_light from "../assets/images/logo-light.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo_icon_40 from "../assets/images/logo-icon-40.png";
import logo_icon_40_white from "../assets/images/logo-icon-40-white.png";
import logo_dark from "../assets/images/logo-dark.png";
import logo_4 from "../assets/images/logo4.png";
import image from "../assets/images/team/05.jpg";
import { LuSearch } from "react-icons/lu";
import { User, Settings, Lock, LogOut } from "react-feather";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

export default function Navbar(props) {
  const [isDropdown, openDropdown] = useState(true);
  const { navClass, topnavClass, isContainerFluid } = props;
  const [isOpen, setMenu] = useState(true);

  const [user, loading, error] = useAuthState(auth);

  const isLoggedIn = user ? true: false

  window.addEventListener("scroll", windowScroll);
  useEffect(() => {
    activateMenu();
  }, []);

  function windowScroll() {
    const navbar = document.getElementById("topnav");
    const pageTitle = document.getElementById("pageTitle");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      if (navbar !== null) {
        navbar?.classList.add("nav-sticky");
      }
      if (pageTitle !== null) {
        pageTitle.style.color = "black";
      }
    } else {
      if (navbar !== null) {
        navbar?.classList.remove("nav-sticky");
      }
      if (pageTitle !== null) {
        pageTitle.style.color = "white";
      }
    }

    const mybutton = document.getElementById("back-to-top");
    if (mybutton != null) {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybutton.classList.add("flex");
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
        mybutton.classList.remove("flex");
      }
    }
  }

  const toggleMenu = () => {
    setMenu(!isOpen);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };

  const getClosest = (elem, selector) => {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  const activateMenu = () => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = getClosest(parent || immediateParent, ".parent-menu-item");

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  };
  return (
    <nav id="topnav" className={`defaultscroll is-sticky ${topnavClass}`}>
      <div
        className={`${
          isContainerFluid === true
            ? "container-fluid md:px-8 px-3"
            : "container"
        }`}
      >
        <Link className="logo flex flex-row gap-1 items-center" to="/">
          <div>
            <div className="block sm:hidden">
              <img
                src={logo_4}
                className="h-10 inline-block dark:hidden"
                alt=""
              />
              <img
                src={logo_4}
                className="h-10 hidden dark:inline-block"
                alt=""
              />
            </div>

            {navClass && navClass.includes("nav-light") ? (
              <div className="sm:block hidden">
                <span className="inline-block dark:hidden">
                  <img src={logo_4} className="h-20 l-dark" alt="" />
                  <img src={logo_4} className="h-20 l-light" alt="" />
                </span>
                <img
                  src={logo_4}
                  className="h-20 hidden dark:inline-block"
                  alt=""
                />
              </div>
            ) : (
              <div className="sm:block hidden">
                <img
                  src={logo_4}
                  className="h-20 inline-block dark:hidden"
                  alt=""
                />
                <img
                  src={logo_4}
                  className="h-20 hidden dark:inline-block"
                  alt=""
                />
              </div>
            )}
          </div>
          <div className=" flex flex-col items-start dark:text-white text-black">
            <h1 id="pageTitle">PUNJAB GHAR GHAR ROZGAR</h1>
          </div>
        </Link>

        <div className="menu-extras">
          <div className="menu-item">
            <Link
              to="#"
              className="navbar-toggle"
              id="isToggle"
              onClick={toggleMenu}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>
        {/* <!-- End Mobile Toggle --> */}

        {/* <!--Login button Start--> */}
        <ul className="buy-button list-none mb-0">
          <li className="inline-block mb-0">
            <div className="relative">
            <button className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-full">
            <Link to="/login" className="text-white hover:text-emerald-600 ml-3 mr-1">Login</Link>
            </button>
            </div>
          </li>
         
          
          {isLoggedIn && <li className="dropdown inline-block relative ps-1">
            <button
              onClick={() => openDropdown(!isDropdown)}
              data-dropdown-toggle="dropdown"
              className="dropdown-toggle btn btn-icon rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white inline-flex"
              type="button"
            >
              <img src={image} className="rounded-full" alt="" />
            </button>

            <div
              className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ${
                isDropdown ? "hidden" : "block"
              }`}
            >
              <ul className="py-2 text-start">
                <li>
                  <Link
                    to="/candidate-profile"
                    className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"
                  >
                    <User className="h-4 w-4 me-2" />
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/candidate-profile-setting"
                    className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"
                  >
                    <Settings className="h-4 w-4 me-2" />
                    Settings
                  </Link>
                </li>
                <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                <li>
                  <Link
                    to="/lock-screen"
                    className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"
                  >
                    <Lock className="h-4 w-4 me-2" />
                    Lockscreen
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"
                  >
                    <LogOut className="h-4 w-4 me-2" />
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </li>}
         
        </ul>

        <div
          id="navigation"
          className={`${isOpen === true ? "hidden" : "block"}`}
        >
          <ul className={`navigation-menu ${navClass}`}>
            <li className="parent-menu-item">
              <Link to="/">Home</Link>
            </li>

            <li className="parent-menu-item">
              <Link to="/aboutus">About Us</Link>
            </li>
            
            <li>
              <Link to="/contact" className="sub-menu-item">
                Contact
              </Link>
            </li>
            
            <li className="has-submenu parent-parent-menu-item">
              <Link to="#"> Help Center </Link>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <Link to="/helpcenter-faqs" className="sub-menu-item">
                    FAQs
                  </Link>
                </li>

                <li className="parent-menu-item">
                  <Link to="/services">Services</Link>
                </li>
                </ul>
              </li>
                
          </ul>
        </div>
      </div>
    </nav>
  );
}
