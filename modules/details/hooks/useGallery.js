import { useState } from "react";

export function useGallery(images) {
  const [img, setImage] = useState(0);

  const prevImage = () => {
    if (img === 0) {
      return;
    }
    setImage(img - 1);
  };
  const nextImage = () => {
    if (img === images.length - 1) {
      return;
    }
    setImage(img + 1);
  };

  return { img, prevImage, nextImage };
}
