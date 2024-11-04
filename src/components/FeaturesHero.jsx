import { useSelector, useDispatch } from 'react-redux'
import featureHeroImg from '../assets/featureHero.svg'
import featureHeroImg2 from '../assets/featuresHeroMobile.svg'
 import {useWindowWidth} from '../components'
const FeaturesHero = () => {
    const windowWidth = useWindowWidth();
    
  return (
      <section className='section-spacing bg-gradient-to-r from-primary to-lime-800 text-pry1'>
          <div className="wrapper">
          <div className='mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6'>
              <div className='hero text-center md:text-left '>
                  <h1 className=' hero-headings'>A Platform Built For African Entrepreneurs</h1>
                  <p className='hero-subheading'>Nile’s features are designed to give you everything you need to grow your business.</p>
              </div>
              {
                  windowWidth<768? <img src={featureHeroImg2} className='max-w-full' alt="desktop screenshot from nile product interface" />: <img src={featureHeroImg} className='max-w-full md:w-2/4 lg:w-2/5' alt="mobile screenshot from nile product interface" />
              }
          </div>
              
          </div>
      </section>
  )
}

export default FeaturesHero