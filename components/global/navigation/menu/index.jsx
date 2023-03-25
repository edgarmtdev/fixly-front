import React from "react";
import { RiFlashlightLine } from "react-icons/ri";
import LINKS_CATEGORIES from "./model/links";
import { IconMenu, NavbarList, NavbarMenu, NavbarTitle } from "./styled";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";

const Menu = () => {
  const [links] = React.useState(LINKS_CATEGORIES);
  return (
    <NavbarMenu size={44}>
      <Link href={"/"}>
        <NavbarTitle>
          <RiFlashlightLine color="#CD8A20" widths={44} size={44} />
          <h1>Fixly</h1>
        </NavbarTitle>
      </Link>
      <IconMenu>
        <BiMenu size={36} color={"#3E5067"} />
      </IconMenu>
      <NavbarList>
        {links.map((item) => (
          <Link href={item.link} key={item.id}>
            <li>{item.title}</li>
          </Link>
        ))}
        <Link href={"/#"}>
          <li>More...</li>
        </Link>
      </NavbarList>
    </NavbarMenu>
  );
};

export default Menu;
