import { Socials, Logo, ScrollRevealComponent } from "../components";
import { footerLinks } from "../utils";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <ScrollRevealComponent>
      <footer className=" relative py-4 md:py-8 bg-slate-950">
        <div className="overlay absolute z-10 left-0 right-0 -top-4 rounded-t-3xl bg-slate-950 w-full h-4"></div>
        <div className="wrapper">
          <div className="flex-container">
            <div className="text-center lg:text-left mb-8 lg:mb-0 flex flex-col gap-8">
              <Link to="/" className="w-20 block mx-auto lg:mx-0 lg:w-36">
                <Logo />
              </Link>
              <div className="text-myCustomColor-light">
                <p>suport@getnile.co</p>
                <p className="font-bold mt-4">+234 812 3843 076</p>
              </div>
              <form>
                <input
                  type="text"
                  className=" text-pry1 w-inputW' py-3 pl-2 rounded-l-md outline-none focus:outline focus:outline-myCustomColor-light"
                  name="footer-input"
                  id="footer-input"
                  placeholder="Enter your Name"
                />
                <button
                  type="button"
                  className="bg-primary text-pry1 w-24 py-3 font-semibold rounded-r-md hover:bg-pry3 transitions"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <article className="flex-container gap-x-32 text-center lg:text-left">
              {footerLinks.map((item) => {
                return (
                  <ul className="mb-10" key={item.id}>
                    <h4 className="footer-headings mb-4">{item.heading}</h4>
                    <li className="mb-2 hover:underline active:opacity-40 transitions">
                      <Link to="/" className="text-pry2">
                        {item.list1}
                      </Link>
                    </li>
                    <li className="mb-2 hover:underline active:opacity-40 transitions">
                      <Link to="/AboutUs" className="text-pry2">
                        {item.list2}
                      </Link>
                    </li>
                    <li className="mb-2 hover:underline active:opacity-40 transitions">
                      <Link to="/FeaturesPage" className="text-pry2">
                        {item.list3}
                      </Link>
                    </li>
                    <li className="mb-2 hover:underline active:opacity-40 transitions">
                      <Link to="/ContactPage" className="text-pry2">
                        {item.list4}
                      </Link>
                    </li>
                    <li className="mb-2 hover:underline active:opacity-40 transitions">
                      <a href="#" className="text-pry2">
                        {item?.list5}
                      </a>
                    </li>
                  </ul>
                );
              })}
            </article>
          </div>
          <div className="text-pry1">
            <Socials />
          </div>
        </div>
      </footer>
    </ScrollRevealComponent>
  );
};

export default Footer;
