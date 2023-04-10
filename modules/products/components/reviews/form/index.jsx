import React from "react";
import { ButtonAddReview } from "./styled";

const FormReview = () => {
  return (
    <section className="mt-5">
      <form>
        <textarea
          placeholder="Escribe tu reseña"
          className="p-2 w-full text-xs"
        ></textarea>
        <div className="flex mt-2">
          <ButtonAddReview>Add review</ButtonAddReview>
        </div>
      </form>
    </section>
  );
};

export default FormReview;
