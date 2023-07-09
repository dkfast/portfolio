import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const active = "active underline underline-offset-8 decoration-2 decoration-red-500";
const scrollLinkAttributes = {
  activeClass: active,
  smooth: true,
  duration: 500,
  spy: true,
  hashSpy: true
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if(isOpen) {
      document.getElementById('mobile-nav-panel')?.classList.remove("-right-44");
      document.getElementById('mobile-nav-panel')?.classList.add("right-0");
    }else{
      document.getElementById('mobile-nav-panel')?.classList.add('-right-44');
      document.getElementById('mobile-nav-panel')?.classList.remove('right-0');
    }
  }, [isOpen])
  
  return (
    <header id="header" className="grid grid-cols-12 md:grid-cols-9 text-white justify-center content-center align-center fixed top-0 left-0 right-0 z-10 pointer-events-none">

      <div className="col-span-1 text-center pointer-events-auto">
        <ScrollLink to="about" smooth={true} duration={500} className="hidden md:block inline-block cursor-pointer bg-neutral-900 w-full p-6 mt-0 md:mt-6">
          <img src="/images/logo.png" alt="Red Beard Creates Logo" className="max-w-[50px] mx-auto" />
        </ScrollLink>
      </div>

      {/* <div className="col-span-8 text-center bg-neutral-900 flex from-70% to-transparent py-6 justify-center hidden md:flex">
        <nav className=" self-center">
          <ul>
            <li className="inline mx-3 cursor-pointer">
              <ScrollLink to="about" {...scrollLinkAttributes}>About</ScrollLink>
            </li>
            <li className="inline mx-3 cursor-pointer">
              <ScrollLink to="work" {...scrollLinkAttributes}>
                Work
              </ScrollLink>
            </li>
            <li className="inline mx-3 cursor-pointer">
              <ScrollLink to="experience" {...scrollLinkAttributes}>
                Experience
              </ScrollLink>
            </li>
          </ul>
        </nav>
          <ScrollLink to="about" smooth={true} duration={500} className="inline-block cursor-pointer">
            <img src="/images/logo.png" alt="Red Beard Creates Logo" className="max-w-[80px] mx-10" />
          </ScrollLink>
        <nav className="col-span-8 py-6 self-center">
          <ul>
            <li className="inline mx-3 cursor-pointer">
              <ScrollLink to="education" {...scrollLinkAttributes}>
                Education
              </ScrollLink>
            </li>
            <li className="inline mx-3 cursor-pointer">
              <ScrollLink to="contact" {...scrollLinkAttributes}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div> */}

      <div className="col-span-11 md:col-span-8 grid justify-end md:justify-normal pointer-events-none">
        {/* <ScrollLink to="about" smooth={true} duration={500} className="block md:hidden inline-block cursor-pointer bg-neutral-900 p-4 ps-5 pt-5 mt-0 md:mt-6">
          <img src="/images/logo.png" alt="Red Beard Creates Logo" className="max-w-[50px]" />
        </ScrollLink> */}
        <div id="mobile-nav-icon" onClick={handleNavClick} className="lh-0 text-2xl leading-3 justify-self-end pointer-events-auto">
          {isOpen ? <p className="mt-5 me-5 p-5 bg-red-500 rounded-full">X</p> : <p className="mt-5 me-5 p-5 bg-red-500 rounded-full cursor-pointer">=</p>}
        </div>
        <nav id="mobile-nav-panel" className="absolute top-24 right-0 -right-44 bg-neutral-950 z-20 overflow-hidden pointer-events-auto">
          <ul className="py-5 font-display">
            <li className="mx-5 cursor-pointer my-2 text-2xl">
              <ScrollLink to="about" {...scrollLinkAttributes} onClick={handleNavClick}>About</ScrollLink>
            </li>
            <li className="mx-5 cursor-pointer my-2 text-2xl">
              <ScrollLink to="work" {...scrollLinkAttributes} onClick={handleNavClick}>
                Work
              </ScrollLink>
            </li>
            <li className="mx-5 cursor-pointer my-2 text-2xl">
              <ScrollLink to="experience" {...scrollLinkAttributes} onClick={handleNavClick}>
                Experience
              </ScrollLink>
            </li>
            <li className="mx-5 cursor-pointer my-2 text-2xl">
              <ScrollLink to="education" {...scrollLinkAttributes} onClick={handleNavClick}>
                Education
              </ScrollLink>
            </li>
            <li className="mx-5 cursor-pointer my-2 text-2xl">
              <ScrollLink to="contact" {...scrollLinkAttributes} onClick={handleNavClick}>
                Contact
              </ScrollLink>
            </li>
            {/* <li className="inline mx-3 cursor-pointer">
              <Link to="https://github.com/dkfast">
                GitHub
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
