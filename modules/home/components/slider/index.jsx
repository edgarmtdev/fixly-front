import React from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../../../data/products.json";
import useSetState from "../../../../hooks/useSetState";
import Product from "./product";
import { SlideCont, Title } from "./styled";

function Slider() {
  const [products] = useSetState(data[1].products);
  return (
    <SlideCont>
      <Title>Offerts</Title>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 35,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={80}
        pagination={{
          type: "bullets",
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
          delay: 1500,
        }}
        className="mySwiper"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <Product data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideCont>
  );
}

export default Slider;
