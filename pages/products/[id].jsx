import React from "react";
import { useRouter } from "next/router";
import DeatilsMod from "../../modules/products/details";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  return <DeatilsMod id={id} />;
}
