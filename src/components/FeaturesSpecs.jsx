import { featuresSpecs } from "../utils";
import shipping from '../assets/shipping.svg'

const FeaturesSpecs = () => {
  return (
    <section className="relative section-spacing bg-myCustomColor-lighterGreen">
      <div className="overlay absolute z-10 left-0 right-0 -top-9 rounded-t-3xl bg-myCustomColor-lighterGreen w-full h-10"></div>
      {/* grid parent */}
      <div>
        <div className="mx-auto grid gap-4 lg:gap-x-28 lg:gap-y-14 lg:grid-cols-2 2xl:w-11/12 2xl:max-w-screen-2xl">
          {featuresSpecs.map((item) => {
            const { id, title, paragraph, img } = item;
            return (
              <li className={"mx-auto lg:mx-0"} key={id}>
                <h4 className="text-primary font-semibold">{title}</h4>
                <p className="lg:text-lg py-1 lg:max-w-lg">{paragraph}</p>
                <img src={img} alt={`screenshot-${title}`} />
              </li>
            );
          })}
        </div>
        <article className="mx-auto lg:w-2/4 mt-14 flex justify-center">
        <li className=''>
          <h4 className="text-primary font-semibold">5- Shipping Integration</h4>
          <p className="lg:text-lg py-1 lg:max-w-lg">Integrate with local and international shipping partners for hassle free logistics.</p>
          <img src={shipping} alt={`shipping-icon`} loading="lazy" />
        </li>
        </article>
      </div>
    </section>
  );
};

export default FeaturesSpecs;
