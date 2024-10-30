import {HeroAbout, AboutJourney,ActionAbout, AboutTeam, AllSliderComponent,Footer} from '../components'
const  AboutUs = () => {
  return (
    <section>
      <HeroAbout />
      <AboutJourney />
      <AboutTeam/>
      <ActionAbout title='Our Vision For Africa’s E-Commerce Future' paragraph='Nile aims to be the shopify for Africa- a platform where businesses of all size can build, scale, and thrive in the digital economy.' btnText='Join The Community' />
      <AllSliderComponent/>
      <Footer/>
    </section>
  )
}

export default  AboutUs