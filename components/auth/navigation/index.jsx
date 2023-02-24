import Link from "next/link";
import { RiFlashlightLine } from "react-icons/ri";
import { Container, NavbarCont, NavbarMenu, NavbarTitle } from "./styled";

const NavbarAuth = () => {
  return (
    <Container>
      <NavbarCont>
        <NavbarMenu>
          <Link href={"/"}>
            <NavbarTitle>
              <RiFlashlightLine color="#CD8A20" widths={44} size={44} />
              <h1>Felcy</h1>
            </NavbarTitle>
          </Link>
        </NavbarMenu>
      </NavbarCont>
    </Container>
  );
};

export default NavbarAuth;
