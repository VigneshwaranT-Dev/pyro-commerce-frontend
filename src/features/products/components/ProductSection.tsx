import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ProductCard from "./ProductCard";
import { FiArrowRight } from "react-icons/fi";

import "swiper/css";

interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  stock: number;
}

interface Props {
  title: string;
  products: Product[];
}

function ProductSection({ title, products }: Props) {
  return (
    <section className="mt-5 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0f4c45]">
          {title}
        </h2>
        <div className="group flex items-center gap-1 text-xs sm:text-sm text-gray-400 cursor-pointer hover:text-[#0f4c45] transition-colors duration-200">
          <span>Scroll</span>
          <FiArrowRight
            size={14}
            className="mt-[1px] transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        loop={true}
        speed={800}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => {
          // Extra safety for hover pause reliability
          swiper.el.addEventListener("mouseenter", () => {
            swiper.autoplay.stop();
          });
          swiper.el.addEventListener("mouseleave", () => {
            swiper.autoplay.start();
          });
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4.5,
            spaceBetween: 24,
          },
        }}
        style={{ paddingBottom: "20px" }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProductSection;
