import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { heroSlides } from "../data/heroSlides";

function HeroCarousel() {
  return (
    <div className="mt-4 px-4">
      <Swiper
        modules={[Autoplay, Navigation]}
        speed={800}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
        navigation
        className="rounded-2xl sm:rounded-3xl overflow-hidden"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full aspect-[16/7] sm:aspect-[16/6]">
              <img
                src={slide.image}
                alt="Diwali Sale Banner"
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroCarousel;
