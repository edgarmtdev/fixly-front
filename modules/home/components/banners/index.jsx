import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../../../data/products.json";
import ProductDescription from "./description";
import BannerImage from "./image";
import { Container } from "./styled";

export default function Banner() {
  return (
    <header className="mt-28">
      <Swiper
        pagination={false}
        spaceBetween={100}
        autoplay={{ delay: 4500 }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data[0]?.products.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Container>
                <ProductDescription
                  name={product.name}
                  description={product.description}
                  route={product.route}
                />
                <BannerImage imgURL={product.imgURL[0]} />
              </Container>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </header>
  );
}
