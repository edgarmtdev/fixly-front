import React from "react";
import ProductDescription from "./description";
import BannerImage from "./image";
import { Header } from "./styled";
import data from "../../../../data/products.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

export default function Banner() {
  const [newProducts, setNewProducts] = React.useState([]);

  React.useEffect(() => setNewProducts(data[0].products), []);

  return (
    <Header>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        className="mySwiper flex"
      >
        {newProducts.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <ProductDescription
                name={product.name}
                description={product.description}
              />
              <BannerImage imgURL={product.img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Header>
  );
}
