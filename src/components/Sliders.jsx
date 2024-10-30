import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonies } from "../utils";
import { useSelector } from "react-redux";
import { ScrollRevealComponent } from "../components";
const Sliders = () => {
  const { sliderSettings } = useSelector((store) => store.testimonials);
  return (
    <ScrollRevealComponent>
      <section
        className="py-8 lg:py-16
    "
      >
        {/* <div className=" "> */}
        <h2 className="section-headers text-center max-w-[731px] mx-auto">
          Success Stories From African Entrepreneurs
        </h2>
        <div className="mt-14 testimonials">
          <Slider {...sliderSettings}>
            {testimonies.map((item, index) => (
              <div
                className="bg-myCustomColor-lighterGreen rounded-md p-4 shadow-sm shadow-myCustomColor-light "
                key={item.id}
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={item.image}
                    alt={`Slide ${index + 1}`}
                    loading="lazy"
                    className="w-12 h-12 rounded-full"
                  />
                  <h4 className="font-bold">{item.name}</h4>
                </div>
                <p className="text-md">{item.text}</p>
              </div>
            ))}
          </Slider>
        </div>

        {/* </div> */}
      </section>
    </ScrollRevealComponent>
  );
};

export default Sliders;
