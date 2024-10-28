import { useSelector, useDispatch } from 'react-redux'
import featureHeroImg from '../assets/featureHero.svg'
import featureHeroImg2 from '../assets/featuresHeroMobile.svg'
import { useEffect } from 'react'
import{ setWindowWidth} from '../features/windowSlicer/windowSlice'

const FeaturesHero = () => {
    const dispatch = useDispatch()
    const { windowWidth } = useSelector(store => store.windowSlice)

    useEffect(() => {
        const handleResize = () => {
            dispatch(setWindowWidth(window.innerWidth))
        }
        handleResize();

        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        }
    },[dispatch])
  return (
      <section className='section-spacing bg-primary text-pry1'>
          <div className='mx-auto 2xl:max-w-screen-2xl flex flex-col lg:flex-row items-center gap-8'>
              <div className='hero lg:w-3/5 text-center lg:text-left '>
                  <h1 className='text-4xl lg:text-6xl font-bold'>A Platform Built For African Entrepreneurs</h1>
                  <p className='text-2xl py-3'>Nile’s features are designed to give you everything you need to grow your business.</p>
              </div>
              {
                  windowWidth<1000? <img src={featureHeroImg2} className='max-w-full' alt="desktop screenshot from nile product interface" />: <img src={featureHeroImg} className='max-w-full lg:w-2/5' alt="mobile screenshot from nile product interface" />
              }
          </div>
      </section>
  )
}

export default FeaturesHero