import { Hero,Features, Action, Footer, Sliders,AllSliderComponent } from "../components";
const HomePage = () => {
  return (
    <>
      <Hero/>
      <Features />
      <Sliders/>
      <Action />
      {/* <ActionAbout title=' Ready To Start Your E-commerce Journey?' btnText=' Get Started' /> */}
      <AllSliderComponent/>
      <Footer />
    </>
  );
};

export default HomePage;
