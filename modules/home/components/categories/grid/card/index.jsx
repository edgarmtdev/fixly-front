import Link from "next/link";
import React from "react";
import { Card } from "./styled";

const CardCategory = ({ name, icon }) => {
  return (
    <Link href={`/products/categories?cat=${name}`}>
      <Card>
        {icon}
        {name}
      </Card>
    </Link>
  );
};
export default CardCategory;
