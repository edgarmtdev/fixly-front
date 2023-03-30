import React from "react";
import { dropdownContext } from "context/dropdown";
import { useSelector } from "react-redux";
import Menu from "./menu";
import LoggedOptions from "./options/logged";
import NoLoggedOptions from "./options/no-logged";
import { Container, NavbarCont } from "./styled";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const { handleViewDropdown } = React.useContext(dropdownContext);

  return (
    <Container onClick={handleViewDropdown}>
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
