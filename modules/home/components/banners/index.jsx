import React from "react";
import ProductDescription from "./description";
import BannerImage from "./image";
import { Container, Header } from "./styled";
import data from "../../../../data/products.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import useSetState from "../../../../hooks/useSetState";

export default function Banner() {
  const [newProducts] = useSetState(data[0].products);
  return (
    <header>
      <Swiper
        pagination={false}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="mySwiper"
      >
        {newProducts.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Container>
                <ProductDescription
                  name={product.name}
                  description={product.description}
                />
                <BannerImage imgURL={product.img} />
              </Container>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </header>
  );
}
