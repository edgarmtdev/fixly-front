import React from "react";
import { HeadComponent } from "../components/utils/head";
import HomeModule from "../modules/home";

export default function Home() {
  return (
    <React.Fragment>
      <HeadComponent title={"Home | Felcy"} />
      <HomeModule />
    </React.Fragment>
  );
}
