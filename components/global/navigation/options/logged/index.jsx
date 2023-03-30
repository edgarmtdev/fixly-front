import { dropdownContext } from "context/dropdown";
import Link from "next/link";
import React from "react";
import { HiUser, HiOutlineShoppingCart, HiChevronDown } from "react-icons/hi";
import { OptionsContainer } from "../no-logged/styled";

const LoggedOptions = React.forwardRef(({ userName }, ref) => {
  const { view, handleViewDropdown, handleNotViewDropdown } =
    React.useContext(dropdownContext);

  return (
    <OptionsContainer>
      <Link href={"/cart"}>
        <span>
          <HiOutlineShoppingCart size={24} color={"#3E5067"} />
        </span>
      </Link>
      <span
        onClick={view ? handleNotViewDropdown : handleViewDropdown}
        className="flex items-center"
      >
        <HiUser style={{ cursor: "pointer" }} size={24} color={"#3E5067"} />
        <HiChevronDown
          style={{ cursor: "pointer" }}
          size={18}
          color={"#3E5067"}
        />
      </span>
    </OptionsContainer>
  );
});

export default LoggedOptions;
