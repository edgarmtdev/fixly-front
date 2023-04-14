import { dropdownContext } from "context/dropdown";
import { forwardRef, useContext } from "react";
import { OptionsContainer } from "../no-logged/styled";
import IconCart from "./components/icons/cart/cart";
import IconSearch from "./components/icons/search/search";
import IconUser from "./components/icons/user/user";
import DropdownUser from "./dropdown";

// eslint-disable-next-line react/display-name, no-unused-vars
const LoggedOptions = forwardRef(({ userName }, ref) => {
  const { view } = useContext(dropdownContext);
  return (
    <>
      <OptionsContainer>
        <IconSearch />
        <IconCart />
        <IconUser />
      </OptionsContainer>
      {view && <DropdownUser userName={userName} />}
    </>
  );
});

export default LoggedOptions;
