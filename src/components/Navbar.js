import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="top-0 z-10 bg-neutral-900 sticky">
      <div className="container p-5 mx-auto flex flex-wrap md:flex-row items-center justify-between ">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          className="title-font ml-3 md:mb-0 font-medium text-white  text-xl">
          Luis Sevilla
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <section className="MOBILE-MENU flex pr-2 md:hidden lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}>
              <span className="block h-0.5 w-8 bg-gray-600"></span>
              <span className="block h-0.5 w-8 bg-gray-600"></span>
              <span className="block h-0.5 w-8 bg-gray-600"></span>
            </div>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}>
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <div className="MENU-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <Link
                  to="about"
                  className="my-8 uppercase"
                  onClick={() => setIsNavOpen(false)}>
                  About Me
                </Link>
                <Link
                  to="projects"
                  className="my-8 uppercase"
                  onClick={() => setIsNavOpen(false)}>
                  Projects
                </Link>
                <Link
                  to="skills"
                  className="my-8 uppercase"
                  onClick={() => setIsNavOpen(false)}>
                  Skills
                </Link>
                <Link
                  to="contact"
                  className="my-8 uppercase"
                  onClick={() => setIsNavOpen(false)}>
                  Contact Me
                </Link>
              </div>
            </div>
          </section>

          <Link 
          to="about" 
          spy={true} 
          smooth={true} 
          className="mr-5 hover:text-white hidden md:flex">
            About Me
          </Link>
          <Link 
          to="projects" 
          spy={true} 
          smooth={true} 
          className="mr-5 hover:text-white hidden md:flex">
            Projects
          </Link>
          <Link 
          to="skills" 
          spy={true} 
          smooth={true} 
          className="mr-5 hover:text-white hidden md:flex">
            Skills
          </Link>
        </nav>
        <Link
          to="contact" 
          spy={true} 
          smooth={true}
          className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded mt-4 md:mt-0 transition-colors duration-200 ease-in-out hidden md:flex">
          Contact Me
        </Link>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #171717;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </header>
  );
}