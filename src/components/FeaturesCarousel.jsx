import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import{ScrollRevealComponent} from '../components'
const FeaturesCarousel = () => {
  const { sliderImages, sliderSettings } = useSelector(
    (store) => store.slider
  );
  return (
    <ScrollRevealComponent>
    <section id='sliders' className="py-16 bg-pry1">
      <h2 className="section-headers text-center">See Nile In Action</h2>
        <div className="bg-myCustomColor-light mx-auto mt-6 md:mt-14 py-5 px-5">
          <Slider {...sliderSettings}>
            {sliderImages.map(({url,image, id}) => (
              <div key={id} className="ml-7 h-full">
                <a href={url}target="_blank" rel="noopener noreferrer">
                  <img
                    src={image}
                    alt={`Slide ${id + 1}`}
                    className="w-full h-inherit object-cover"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
    </section>

    </ScrollRevealComponent>
  );
};

export default FeaturesCarousel;