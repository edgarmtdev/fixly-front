import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { RiFlashlightLine } from "react-icons/ri";
import LINKS_CATEGORIES from "./model/links";
import { IconMenu, NavbarList, NavbarMenu, NavbarTitle } from "./styled";

const Menu = () => {
  return (
    <NavbarMenu>
      <Link href={"/"}>
        <NavbarTitle>
          <RiFlashlightLine color="#CD8A20" />
          <h1>Fixly</h1>
        </NavbarTitle>
      </Link>
      <IconMenu>
        <BiMenu color={"#3E5067"} />
      </IconMenu>
      <NavbarList>
        {LINKS_CATEGORIES.map((item) => (
          <Link href={item.link} key={item.id}>
            <li>{item.title}</li>
          </Link>
        ))}
        <Link href={"/products/categories?cat=all"}>
          <li>More...</li>
        </Link>
      </NavbarList>
    </NavbarMenu>
  );
};

export default Menu;
