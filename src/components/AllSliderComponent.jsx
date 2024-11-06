import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const AllSliderComponent = () => {
  const { slides,settings } = useSelector((store) => store.allSlider);
  console.log(slides);

  return (
    <section className="my-8 md:my-16 ">
      <h2 className="font-bold text-center mb-10 text-pry-3">Companies That Trusts Us</h2>
      <div className="overflow-x-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <img src={slide.image} alt={`logo-${index + 1}`} className="w-[182px] h-[22px] object-contain block" key={slide.id} />
        ))}
      </Slider>

      </div>
    </section>
  );
};

export default AllSliderComponent;
