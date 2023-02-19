import Link from "next/link";
import React from "react";
import { ButtonAuth, OptionsContainer } from "./styled";

const NoLoggedOptions = () => {
  return (
    <OptionsContainer>
      <Link href={"/auth/signup"}>
        <ButtonAuth theme={{ bg: "#546C8C", text: "#FFE3B5" }}>
          Sign Up
        </ButtonAuth>
      </Link>
      <Link href={"/auth/login"}>
        <ButtonAuth theme={{ bg: "#CD8A20", text: "#FFF" }}>Login</ButtonAuth>
      </Link>
    </OptionsContainer>
  );
};

export default NoLoggedOptions;
