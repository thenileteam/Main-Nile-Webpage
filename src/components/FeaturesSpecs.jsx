import { featuresSpecs } from "../utils";
import shipping from "../assets/shipping.svg";
import { ScrollRevealComponent } from "../components";

const FeaturesSpecs = () => {
  return (
    <ScrollRevealComponent>
      <section className="relative section-spacing -mt-4 rounded-b-2xl rounded-t-2xl  bg-myCustomColor-lighterGreen">
        <div className="wrapper">
          <div className="mx-auto grid gap-4 md:gap-x-28 md:gap-y-14 md:grid-cols-2">
            {featuresSpecs.map((item) => {
              const { id, title, paragraph, img } = item;
              return (
                <li className={"mx-auto lg:mx-0"} key={id}>
                  <h4 className="text-primary text-2xl md:text-[28px] font-semibold">{title}</h4>
                  <p className="md:text-xl py-1">{paragraph}</p>
                  <img src={img} alt={`screenshot-${title}`} />
                </li>
              );
            })}
          </div>
          <article className="mx-auto md:w-2/4 mt-14 flex justify-center">
            <li className="">
              <h4 className="text-primary text-2xl md:text-[28px] font-semibold">
                5- Smooth Money Management
              </h4>
              <p className="md:text-xl py-1 md:py-2">
              Nile simplifies sales and financial management with an integrated platform that automatically tracks sales, generates financial reports, and offers realtime business insights, allowing entrepreneurs to manage their finances and focus on growth efficiently
              </p>
              <img src={shipping} alt={`shipping-icon`} loading="lazy" />
            </li>
          </article>
        </div>
      </section>
    </ScrollRevealComponent>
  );
};

export default FeaturesSpecs;
