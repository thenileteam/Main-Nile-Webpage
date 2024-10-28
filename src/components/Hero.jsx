import mainHero from '../assets/nileMain-hero.svg'
const Hero = () => {
  return (
    <section className="section-spacing bg-primary text-pry1">
      <div className='hero text-center px-4'>
        <h1 className='text-4xl lg:text-7xl font-bold'>Build and Scale Your Online Store With Nile</h1>
        <p className='text-2xl p-3'>The complete e-commerce solution for African Entrepreneurs.</p>
        <div>
          <button type="button" className='action-buttons bg-pry1 text-primary transitions  hover:border-2 hover:text-pry1  hover:bg-transparent'>Get Started</button>
          <button type="button" className='action-buttons border-2 mt-4 lg:ml-7 transitions hover:bg-pry1 hover:text-primary hover:border-0'>Learn More</button>
        </div>
      </div>
      <img src={mainHero}  className="max-w-full mt-8 mx-auto"alt="transparent screenshot from nile product appearance" />
    </section>
  );
};

export default Hero;
