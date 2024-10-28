import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonies } from "../utils";
import { useSelector } from "react-redux";
import{Action} from '../components'
const Sliders = () => {
  const { sliderSettings } = useSelector((store) => store.testimonials);
  return (
    <section className="section-spacing
    ">
      <h2 className="section-headers text-center">Success Stories From African Entrepreneurs</h2>
      <div className='mt-14 xl:max-w-7xl mx-auto' >
        <Slider {...sliderSettings}   >
          {testimonies.map((item, index) => (
            <div  id='slider-spacing' className="bg-myCustomColor-lighterGreen rounded-md p-4 border-2 border-green-500" key={item.id}>
              <div className="flex gap-2 items-center">
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  loading="lazy"
                  className="w-12 h-12"
                />
                <h4 className="font-bold">{ item.name}</h4>
              </div>
              <p className="text-md">{item.text}</p>
            </div>
          ))}
        </Slider>
      </div>
     <Action/>
    </section>
  );
};

export default Sliders;
