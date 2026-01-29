
import Slider from "react-slick";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image5 from "../images/5.png";
import image6 from "../images/6.png";
import image7 from "../images/7.png";
import image8 from "../images/8.png";
import image9 from "../images/9.png";
import image10 from "../images/10.png";
import image11 from "../images/11.png";
import image12 from "../images/12.png";

const HeroBanner = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 200,          // smooth scrolling speed
        autoplay: true,
        // autoplaySpeed: 0,     // continuous scroll
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };

    return (
        <section className="relative w-full h-[21vh] mx:h-[30vh] sm:h-[45vh] lg:h-[60vh] xl:h-[80vh] overflow-hidden">

            <Slider
                {...settings}
                className=""
            >
                {[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12].map((img, i) => (
                    <div key={i} className="relative w-full h-[21vh] mx:h-[30vh] sm:h-[45vh] lg:h-[60vh] xl:h-[80vh] overflow-hidden">
                        <img
                            src={img}
                            alt={`banner-${i}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Slider>

        </section>

    );
};

export default HeroBanner;
