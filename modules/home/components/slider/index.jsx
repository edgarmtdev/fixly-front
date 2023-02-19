import React from "react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../../../data/products.json";
import Product from "./product";
import { SlideCont, Title } from "./styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function Slider() {
  const [products] = React.useState(data[1].products);

  return (
    <SlideCont>
      <Title>Offerts</Title>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={80}
        pagination={{
          type: "bullets",
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
          delay: 1500
        }}
        className="mySwiper"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <Product data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideCont>
  );
}

export default Slider;
