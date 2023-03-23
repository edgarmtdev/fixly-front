import React from "react";
import { ButtonAddReview } from "./styled";

const FormReview = () => {
  return (
    <section className=" w-3/4">
      <form>
        <textarea
          placeholder="Escribe tu reseña"
          className="p-2 w-full"
        ></textarea>
        <div>
          <ButtonAddReview>Add review</ButtonAddReview>
        </div>
      </form>
    </section>
  );
};

export default FormReview;
