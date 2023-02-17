import React from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../../../data/products.json";
import Product from "./Product";
import { SlideCont, Title } from "./styled";

function Slider() {
  const [products] = React.useState(data[1].products);

  return (
    <SlideCont>
      <Title>Offerts</Title>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Navigation]}
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
