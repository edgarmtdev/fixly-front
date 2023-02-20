import React from "react";
import GridCategories from "./Grid";
import { CategoriesCont, Tilte } from "./styled";

export default function Categories() {
  return (
    <CategoriesCont>
      <Tilte>Categories</Tilte>
      <GridCategories />
    </CategoriesCont>
  );
}
