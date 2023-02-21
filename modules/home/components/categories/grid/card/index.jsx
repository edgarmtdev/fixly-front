import React from "react";
import { Card } from "./styled";

const CardCategory = ({ name, icon }) => {
  return (
    <Card>
      {icon}
      {name}
    </Card>
  );
};
export default CardCategory;
