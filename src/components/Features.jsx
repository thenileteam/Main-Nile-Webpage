import { features } from "../utils";
import { SectionHeaders } from "../components";
import {Link} from 'react-router-dom'
const Features = () => {
  return (
    <section className="section-spacing relative rounded-b-3xl bg-myCustomColor-lighterGreen">
      <div className="overlay absolute z-10 left-0 right-0 -top-3 rounded-t-3xl bg-myCustomColor-lighterGreen w-full h-4"></div>
      <div className="wrapper">
        <SectionHeaders
          head="Why Nile?"
          text="Nile empowers African businesses to create and scale online store with
        all the tools needed to manage operations"
        />
        <div className="grid-container">
          {features.map((item) => {
            const { id, img, heading, text } = item;
            return (
              <article
                className="bg-pry2 p-4 w-[224px] md:w-auto mx-auto lg:mx-0 rounded-lg border border-myCustomColor-light"
                key={id}
              >
                <img
                  src={img}
                  className="w-12 h-12 object-contain"
                  alt={`${heading}-icon`}
                />
                <div>
                  <h3 className="text-primary font-bold py-1">{heading}</h3>
                  <p className="text-pry3 ">{text}</p>
                </div>
              </article>
            );
          })}
        </div>
        <button
            type="button"
            className="block action-buttons mt-6 md:mt-9 bg-slate-950 hover:bg-primary active:bg-primary transitions"
          >
          {" "}
          <Link to='/FeaturesPage'> Explore Features &#8594;</Link>
          
          </button>
      </div>
    </section>
  );
};

export default Features;
