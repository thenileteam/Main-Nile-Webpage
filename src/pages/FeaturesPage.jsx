import{ FeaturesHero, FeaturesSpecs, ActionAbout, AllSliderComponent, FeaturesCarousel,Footer} from '../components'
const FeaturesPage = () => {
  return (
    <>
      <FeaturesHero />
      <FeaturesSpecs />
      <FeaturesCarousel/>
      <ActionAbout title='Ready To Build Your Store ?' btnText='Get Started For Free' />
      <AllSliderComponent/>
      <Footer/>
    </>
  )
}

export default FeaturesPage