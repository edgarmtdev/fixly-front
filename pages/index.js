import React from "react";
import { HeadComponent } from "../components/utils/head";
import HomeModule from "../modules/home";
import useDispatchEffect from "hooks/useDispatchEffect";
import { getCart } from "features";

export default function Home() {
  useDispatchEffect(getCart);
  return (
    <React.Fragment>
      <HeadComponent title={"Home | Fixly"} />
      <HomeModule />
    </React.Fragment>
  );
}
