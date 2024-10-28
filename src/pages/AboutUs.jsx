import {HeroAbout, AboutJourney,ActionAbout, AboutTeam, AllSliderComponent,Footer} from '../components'
const  AboutUs = () => {
  return (
    <section>
      <HeroAbout />
      <AboutJourney />
      <AboutTeam/>
      <ActionAbout title='Ready To Start Your E-commerce Journey?' btnText='Join The Community' />
      <AllSliderComponent/>
      <Footer/>
    </section>
  )
}

export default  AboutUs