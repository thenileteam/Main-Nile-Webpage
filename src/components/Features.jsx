import { features } from "../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SectionHeaders, ScrollRevealComponent } from "../components";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../components";
import { useSelector } from "react-redux";

const Features = () => {
  const windowWidth = useWindowWidth();
  const { sliderSettings } = useSelector((store) => store.testimonials);
  const newSliderSettings = {
    ...sliderSettings,
    responsive: sliderSettings.responsive.map((setting) => ({
      ...setting,
      settings: {
        ...setting.settings,
        dots: false,
      },
    })),
  };
  return (
    <ScrollRevealComponent>
      <section className="section-spacing relative rounded-b-2xl -mt-4 rounded-t-2xl bg-myCustomColor-lighterGreen">
        <div id="features" className="wrapper">
          <SectionHeaders
            head="Why Nile?"
            text="Nile empowers African businesses to create and scale online store with
        all the tools needed to manage operations"
          />
          {windowWidth < 768 ? (
            <div className="overflow-x-hidden">
              <Slider {...newSliderSettings}>
                {features.map((item) => {
                  const { id, img, heading, text } = item;
                  return (
                    <article
                      className="bg-pry2 p-4 md:w-auto mx-auto lg:mx-0 rounded-lg border border-myCustomColor-light"
                      key={id}
                    >
                      <img
                        src={img}
                        className="w-12 h-12 object-contain"
                        alt={`${heading}-icon`}
                      />
                      <div>
                        <h3 className="text-primary font-bold py-1">
                          {heading}
                        </h3>
                        <p className="text-pry3 ">{text}</p>
                      </div>
                    </article>
                  );
                })}
              </Slider>
            </div>
          ) : (
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
          )}
          <button
            type="button"
            className="block action-buttons mt-6 md:mt-9 bg-slate-950 hover:bg-primary active:bg-primary transitions"
          >
            {" "}
            <Link to="/FeaturesPage"> Explore Features &#8594;</Link>
          </button>
        </div>
      </section>
    </ScrollRevealComponent>
  );
};

export default Features;
