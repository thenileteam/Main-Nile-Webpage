import { features } from "../utils";
import { SectionHeaders } from "../components";
const Features = () => {
  return (
    <section className="relative section-spacing bg-myCustomColor-lighterGreen">
      <div className="overlay absolute z-10 left-0 right-0 -top-3 rounded-t-3xl bg-myCustomColor-lighterGreen w-full h-4"></div>
      <SectionHeaders
        head="Why Nile?"
        text="Nile empowers African businesses to create and scale online store with
        all the tools needed to manage operations"
      />
      <div className="flex flex-col gap-6 lg:flex-row mt-14 xl:max-w-7xl mx-auto">
        {features.map((item) => {
          const { id, img, heading, text } = item;
          return (
            <article
              className="bg-pry2 p-4 w-56 mx-auto lg:w-64 rounded-lg border border-myCustomColor-light"
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
    </section>
  );
};

export default Features;
