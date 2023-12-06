import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { RiFlashlightLine } from "react-icons/ri";
import LINKS_CATEGORIES from "./model/links";
import { IconMenu, NavbarList, NavbarMenu, NavbarTitle } from "./styled";

const Menu = ({ handleOpenAside }) => {
  return (
    <NavbarMenu>
      <Link href={"/"}>
        <NavbarTitle>
          <RiFlashlightLine color="#CD8A20" />
          <h1>Fixly</h1>
        </NavbarTitle>
      </Link>
      <IconMenu onClick={handleOpenAside}>
        <BiMenu color={"#3E5067"} />
      </IconMenu>
      <NavbarList>
        {LINKS_CATEGORIES.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
        <li>
          <Link href={"/products/categories?cat=all"}>More...</Link>
        </li>
      </NavbarList>
    </NavbarMenu>
  );
};

export default Menu;
