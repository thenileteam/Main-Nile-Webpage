import { useSelector, useDispatch } from "react-redux";
import {
  openNavbar,
  closeNavbar,
  updateCurrentElement,
} from "../features/modal/modalSlice";
import menu from "../assets/menu-03.svg";
import nileLogoGreen from "../assets/nile-green.svg";
import closeBtn from "../assets/close.svg";
import { navLinkItems } from "../utils";
import { NavLink } from "react-router-dom";
import { SocialIcons } from "../components";
import { setActivePage } from "../features/modal/modalSlice";
const Navbar = () => {
  const { isOpen, currentElement } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const activePage = (id) => {
    dispatch(setActivePage(id))
 
  };
  return (
    <header
      className={`${
        isOpen
          ? "bg-pry1 px-4 -lg:px-32 sticky top-0 z-20"
          : "bg-pry1 px-4 lg:px-32 sticky top-0 z-20 w-full shadow-md  "
      }`}
    >
      <div className="text-primary">
        <div className="flex justify-between lg:gap-24 items-center py-3">
          <NavLink to="/" id="home">
            <img src={nileLogoGreen} alt="nile-logo" className="logo-width" />
          </NavLink>
          {/* Hamburger menu for mobile */}
          <button
            className="text-primary text-3xl lg:hidden"
            onClick={() => dispatch(openNavbar())}
          >
            <img
              src={menu}
              className={`${isOpen ? "hidden" : "block"}`}
              alt="hamburger-menu"
              loading="lazy"
            />
          </button>
          {/* Navbar Links */}
          <nav className="lg:flex hidden grow">
            <div className="py-7 lg:p-0 lg:flex">
              <ul className="lg:flex-container lg:gap-x-4 xl:gap-x-16">
                {navLinkItems.map((item) => {
                  const { id, url, text } = item;
                  const isActive = currentElement === id;
                  return (
                    <div
                      key={id}
                      className="relative rounded-lg mt-7 lg:m-0 p-3 lg:p-0 border-2 lg:border-0 flex items-center border-myCustomColor-light"
                    >
                      
                      <li
                        className={
                          isActive
                            ? "navLink font-semibold p-1 bg-primary text-pry1 transitions rounded-md"
                            : "navLink font-semibold p-1 text-pry3 hover:bg-primary hover:text-pry2 transitions rounded-md"
                        }
                      >
                        <NavLink to={url} onClick={() => activePage(id)}>
                          {text}
                        </NavLink>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </nav>
          <button
            type="button"
            className="hidden p-2 rounded-full bg-primary text-pry1 font-bold transitions hover:bg-slate-950 btn-join-waitList lg:block lg:w-40 lg:h-12"
          >
            <a href=" https://app.nile.ng/" target="_blank" rel="noopener noreferrer">
              Login/SignUp
            </a>
          </button>

          {/* Mobile Menu*/}
          <div
            className={`fixed top-0 right-0 bottom-0 w-80 h-screen bg-myCustomColor-lighterGreen z-50 transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out lg:hidden`}
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                className="text-gray-600 text-3xl"
                onClick={() => dispatch(closeNavbar())}
              >
                <img src={closeBtn} loading="lazy" className="" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col px-3 gap-4">
              {navLinkItems.map((item) => {
                const { id, url, text, icon } = item;
                return (
                  <div
                    key={id}
                    className="flex items-center gap-3 p-2 border-2 rounded-lg border-myCustomColor-light"
                    onClick={() => dispatch(closeNavbar())}
                  >
                    <a href={url} className="font-semibold text-primary">
                      {text}
                    </a>
                  </div>
                );
              })}
              <div className="fixed bottom-1 text-primary">
                <SocialIcons color="#004324" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
