import { SectionHeaders } from "../components";
import { journey } from "../utils";
const AboutJourney = () => {
  return (
    <section className="relative section-spacing bg-myCustomColor-lighterGreen">
      <div className="overlay absolute z-10 left-0 right-0 -top-3 rounded-t-3xl bg-myCustomColor-lighterGreen w-full h-4"></div>
      <div className="wrapper">
        <SectionHeaders
          head="Our Journey"
          text="Founded to tackle the unique challenges faced by African businesses. Our mission is to provide Entrepreneurs with a platform that simplifies the e-commerce process, making it easier for businesses of all sizes to scale and succeed."
        />
        <div className="grid-container">
          {journey.map((item, index) => {
            const { id, h4, text, image, color } = item;
            if (index % 2 !== 0) {
              return (
                <article
                  className={`
                    p-3 ${color} rounded-md flex flex-col shadow-md shadow-myCustomColor-light w-5/6 md:w-full mx-auto`}
                  key={id}
                >
                  <div className={`${index === 3 ? "text-pry3" : "text-pry1"}`}>
                    <div>
                      <h4 className="font-bold pb-4 text-2xl md:text-[28px]">
                        {h4}
                      </h4>
                      <img
                        src={image}
                        className="block mx-auto w-full h-fit"
                        alt="level-up graph"
                      />
                    </div>
                    <p className="py-3 lg:text-xl">{text}</p>
                  </div>
                </article>
              );
            } else {
              return (
                <article
                  className={`p-3 ${color} w-5/6 rounded-md text-pry1 md:w-full mx-auto shadow-md shadow-myCustomColor-light`}
                  key={id}
                >
                  <div>
                    <h4 className="font-bold text-2xl md:text-[28px]">{h4}</h4>
                    <p className="py-2 md:text-xl">{text}</p>
                  </div>
                  <img
                    src={image}
                    className="block mx-auto w-full"
                    alt="shaking hands for a business deal"
                  />
                </article>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;
