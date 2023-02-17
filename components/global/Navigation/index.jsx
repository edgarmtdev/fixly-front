import { useSelector } from "react-redux";
import Menu from "./menu";
import LoggedOptions from "./options/logged";
import NoLoggedOptions from "./options/no-logged";
import { Container, NavbarCont } from "./styled";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  return (
    <Container>
      <NavbarCont>
        <Menu />
        {user.logged ? (
          <LoggedOptions userName={user.name} />
        ) : (
          <NoLoggedOptions />
        )}
      </NavbarCont>
    </Container>
  );
};

export default Navbar;
