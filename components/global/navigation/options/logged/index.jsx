import Link from "next/link";
import { forwardRef } from "react";
import { HiUser, HiOutlineShoppingCart } from "react-icons/hi";
import { OptionsContainer } from "../no-logged/styled";
import DropdownUser from "./dropdown";

const LoggedOptions = forwardRef(({ userName }, ref) => {
  return (
    <OptionsContainer>
      <Link href={"/cart"}>
        <span>
          <HiOutlineShoppingCart size={24} color={"#3E5067"} />
        </span>
      </Link>
      <span>
        <HiUser style={{ cursor: "pointer" }} size={24} color={"#3E5067"} />
      </span>
      <DropdownUser userName={userName} />
    </OptionsContainer>
  );
});

export default LoggedOptions;
