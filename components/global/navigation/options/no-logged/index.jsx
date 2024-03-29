import Link from "next/link";
import { ButtonAuth, OptionsContainer } from "./styled";

const NoLoggedOptions = () => {
  return (
    <OptionsContainer>
      <Link href={"/auth/signup"}>
        <ButtonAuth theme={{ bg: "#546C8C", text: "#fff" }}>Sign Up</ButtonAuth>
      </Link>
      <Link href={"/auth/login"}>
        <ButtonAuth theme={{ bg: "#CD8A20", text: "#FFF" }}>Login</ButtonAuth>
      </Link>
    </OptionsContainer>
  );
};

export default NoLoggedOptions;
