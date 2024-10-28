import AboutHeroImage from '../assets/AboutHero-img.svg'
const HeroAbout = ( ) => {
  return (
      <section className="section-spacing bg-primary text-pry1">
      <div className="hero text-center px-4">
        <h1 className="text-4xl lg:text-7xl font-bold">
        Empowering Africa’s Digital Entrepreneurs
        </h1>
        <p className="text-2xl p-3">
        At Nile,we believe in the power of African businesses. Our mission is to provide entreprenuers with a platform that simplifies the e-commerce  process, making it easier for businesses of all sizes to scale and succeed.
        </p>
      </div>
      <img src={AboutHeroImage} className="mt-8 mx-auto" alt="lady sewing cloth" />
    </section>
  );
};

export default HeroAbout;
