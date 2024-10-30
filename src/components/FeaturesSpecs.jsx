import { featuresSpecs } from "../utils";
import shipping from '../assets/shipping.svg'

const FeaturesSpecs = () => {
  return (
    <section className="relative section-spacing bg-myCustomColor-lighterGreen">
      <div className="overlay absolute z-10 left-0 right-0 -top-5 rounded-t-3xl bg-myCustomColor-lighterGreen w-full h-5"></div>
      {/* grid parent */}
      <div className="wrapper">
        <div className="mx-auto grid gap-4 md:gap-x-28 md:gap-y-14 md:grid-cols-2">
          {featuresSpecs.map((item) => {
            const { id, title, paragraph, img } = item;
            return (
              <li className={"mx-auto lg:mx-0"} key={id}>
                <h4 className="text-primary font-semibold">{title}</h4>
                <p className="md:text-xl py-1">{paragraph}</p>
                <img src={img} alt={`screenshot-${title}`} />
              </li>
            );
          })}
        </div>
        <article className="mx-auto md:w-2/4 mt-14 flex justify-center">
        <li className=''>
          <h4 className="text-primary font-semibold">5- Shipping Integration</h4>
          <p className="lg:text-lg py-1 md:py-2">Integrate with local and international shipping partners for hassle free logistics.</p>
          <img src={shipping} alt={`shipping-icon`} loading="lazy" />
        </li>
        </article>
      </div>
    </section>
  );
};

export default FeaturesSpecs;
