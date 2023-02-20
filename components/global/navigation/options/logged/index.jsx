import React from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { logOut } from "../../../../../features/user";
import useNavigateDispatch from "../../../../../hooks/useDispatchNavigate";
import { OptionsContainer } from "../no-logged/styled";

const LoggedOptions = ({ userName }) => {
  const { action } = useNavigateDispatch(logOut, "/");

  return (
    <OptionsContainer>
      <Link href={"/shopcar"}>
        <AiOutlineShoppingCart size={24} color={"#3E5067"} />
      </Link>
      <AiOutlineUser size={24} color={"#3E5067"} />
      <h6 onClick={action}>Logout</h6>
      {userName}
    </OptionsContainer>
  );
};

export default LoggedOptions;
