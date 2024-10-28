import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

const AllSliderComponent = () => {
  const { slides,settings } = useSelector((store) => store.allSlider);
  console.log(slides);

  return (
    <div className="my-16">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <img src={slide.image} alt={`logo-${index + 1}`} className="w-[182px] h-[22px] object-contain block" key={slide.id} />
        ))}
      </Slider>
    </div>
  );
};

export default AllSliderComponent;
