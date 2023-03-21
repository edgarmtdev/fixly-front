import React from "react";
import { Title } from "./styled";

const Reviews = ({ number }) => {
  return (
    <div>
      <Title>Reviews ({number})</Title>
      <div>
        <form>
          <textarea></textarea>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
