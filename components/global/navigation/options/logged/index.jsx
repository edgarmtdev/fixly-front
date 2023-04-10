import { dropdownContext } from "context/dropdown";
import Link from "next/link";
import React from "react";
import { HiUser, HiOutlineShoppingCart, HiChevronDown } from "react-icons/hi";
import { OptionsContainer } from "../no-logged/styled";
import DropdownUser from "./dropdown";
import { useSelector } from "react-redux";

const LoggedOptions = React.forwardRef(({ userName }, ref) => {
  const { view, handleViewDropdown, handleNotViewDropdown } =
    React.useContext(dropdownContext);

  const { items } = useSelector((state) => state.cart);

  return (
    <>
      <OptionsContainer>
        <Link href={"/cart"}>
          <span className=" relative">
            <HiOutlineShoppingCart size={24} color={"#3E5067"} />
            <p className="absolute top-[-5px] right-[-5px] text-[10px] text-white p-1 bg-red-600 flex items-center justify-center rounded-full w-4 h-4">
              {items.length}
            </p>
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
      {view && <DropdownUser userName={userName} />}
    </>
  );
});

export default LoggedOptions;
