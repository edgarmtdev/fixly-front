import { useGallery } from "modules/details/hooks/useGallery";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ImageSlider = ({ images }) => {
  const { img, prevImage, nextImage } = useGallery(images);

  return (
    <section className="flex gap-4 select-none p-8">
      <div className="hidden laptop:flex flex-col gap-8">
        {images.map((img, index) => (
          <Image key={index} src={img} width={60} height={60} />
        ))}
      </div>
      <div className="relative">
        <div className="absolute top-[45%] flex z-10 w-full">
          <BiChevronLeft
            size={35}
            className={`${
              img === 0
                ? "opacity-25"
                : "cursor-pointer hover:scale-105 hover:opacity-50"
            }`}
            onClick={prevImage}
          />
          <BiChevronRight
            size={35}
            className={`ml-auto ${
              img === images.length - 1
                ? "opacity-25"
                : "cursor-pointer hover:scale-105 hover:opacity-50"
            }`}
            onClick={nextImage}
          />
        </div>
        <figure>
          <Image
            src={`${images[img]}`}
            alt="product"
            width={400}
            height={400}
            priority
          />
        </figure>
      </div>
    </section>
  );
};

export default ImageSlider;
