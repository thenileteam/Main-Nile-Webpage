import { ScrollRevealComponent } from "../components";
import {Link } from 'react-router-dom'

const ActionAbout = ({ title, paragraph, btnText }) => {
  return (
    <ScrollRevealComponent>
      <section className="section-spacing bg-myCustomColor-lighterGreen rounded-3xl shadow-md  shadow-myCustomColor-light w-11/12 md:w-4/5 md:max-w-[1184px]  mx-auto">
        <div className="wrapper">
          <div className="text-center mx-auto">
            <h2 className="section-headers"> {title}</h2>
            <p className="py-1 md:py-2 md:text-[24px]">{paragraph}</p>
            <button
              type="button"
              className="action-buttons mt-6 md:mt-9 bg-slate-950 hover:bg-primary active:bg-primary transitions"
            >
              <Link to='https://app.nile.ng/'> {btnText} &#8594;</Link>
              
            </button>
             
          </div>
        </div>
      </section>
    </ScrollRevealComponent>
  );
};

export default ActionAbout;
