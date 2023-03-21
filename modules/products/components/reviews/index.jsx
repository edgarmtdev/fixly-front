import React from "react";
import { Title } from "./styled";

const Reviews = ({ numberOfReviews }) => {
  return (
    <div>
      <Title>Reviews ({numberOfReviews})</Title>
      <div>
        <form>
          <textarea></textarea>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
