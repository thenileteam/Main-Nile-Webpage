import mainHero from '../assets/nileMain-hero.svg'
const Hero = () => {
  return (
    <section className="section-spacing bg-primary text-pry1">
      <div className="wrapper">
      <div className='hero text-center md:px-4'>
        <h1 className=' hero-headings'>Build and Scale Your Online Store With Nile</h1>
        <p className='hero-subheading'>The complete e-commerce solution for African Entrepreneurs.</p>
        <div className='pt-2 w-[153px] md:w-[400px] mx-auto flex flex-col md:flex-row justify-between'>
          <button type="button" className='action-buttons bg-pry1 text-primary transitions hover:border-2 hover:text-pry1 hover:bg-transparent'>Get Started &#8594;</button>
          <button type="button" className='action-buttons hidden md:block border-2 transitions hover:bg-pry1 hover:text-primary hover:border-0'>Learn More</button>
        </div>
      </div>
      <img src={mainHero}  className="max-w-full mt-4 md:mt-8 mx-auto"alt="transparent screenshot from nile product appearance" />
        
       </div>
    </section>
  );
};

export default Hero;
