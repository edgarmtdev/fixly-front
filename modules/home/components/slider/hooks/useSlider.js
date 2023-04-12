import { EffectCoverflow, Pagination, Navigation } from "swiper";

const useSliderCoverflow = (ref) => {
  const swiperOptions = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 35,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },
    spaceBetween: 80,
    pagination: {
      type: "bullets",
    },
    modules: [EffectCoverflow, Pagination],
  };

  const prev = () => ref.current?.swiper.slidePrev();
  const next = () => ref.current?.swiper.slideNext();

  return {
    swiperOptions,
    prev,
    next,
  };
};

export default useSliderCoverflow;
