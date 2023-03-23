import React from "react";
import { Content, Reactions, TitleReview } from "./styled";

const CardReview = ({ review, date }) => {
  return (
    <div>
      <TitleReview>
        <p>{review.title}</p>
        <span>{date}</span>
      </TitleReview>
      <div>
        {" "}
        <span>⭐⭐⭐⭐⭐</span>
      </div>
      <Content>
        <p>{review.comment}</p>
      </Content>
      <Reactions>
        <span>Like</span>
        <span>Dislike</span>
        <span>Reply</span>
      </Reactions>
    </div>
  );
};

export default CardReview;
