import AboutHeroImage from "../assets/AboutHero-img.svg";

const HeroAbout = () => {
  return (
      <section className="section-spacing bg-gradient-to-r   from-primary to-lime-800   text-pry1">
        <div className="wrapper">
          <div className="hero text-center px-4">
            <h1 className="hero-headings">
              Empowering Africa’s Digital Entrepreneurs
            </h1>
            <p className="hero-subheading">
              At Nile,we believe in the power of African businesses. Our mission
              is to provide entrepreneurs with a platform that simplifies the
              e-commerce process, making it easier for businesses of all sizes
              to scale and succeed.
            </p>
          </div>
          <img
            src={AboutHeroImage}
            className="mt-2 md:mt-4 mx-auto"
            alt="lady sewing cloth"
          />
        </div>
      </section>
  );
};

export default HeroAbout;
