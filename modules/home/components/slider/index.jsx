import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../../../data/products.json";
import Button from "./button";
import useSliderCoverflow from "./hooks/useSlider";
import Product from "./product";
import { SlideContainer, Title } from "./styled";

function Slider() {
  const swiperRef = useRef();
  const { swiperOptions, prev, next } = useSliderCoverflow(swiperRef);

  return (
    <SlideContainer>
      <Title>Offerts</Title>
      <div className="absolute top-[45px] z-10 right-1 flex gap-3">
        <Button event={prev} icon={<FiChevronLeft />} />
        <Button event={next} icon={<FiChevronRight />} />
      </div>
      <Swiper {...swiperOptions} ref={swiperRef}>
        {data[1].products.map((item, index) => (
          <SwiperSlide key={index}>
            <Product data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideContainer>
  );
}

export default Slider;
