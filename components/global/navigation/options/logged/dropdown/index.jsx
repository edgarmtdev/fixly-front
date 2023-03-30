import React from "react";
import { DropdownContainer } from "./styled";
import { logOut } from "/features/user";
import useNavigateDispatch from "/hooks/useDispatchNavigate";

const DropdownUser = ({ userName }) => {
  const { action } = useNavigateDispatch(logOut, "/");
  return (
    <DropdownContainer>
      <p onClick={action}>Logout</p>
      {userName}
    </DropdownContainer>
  );
};

export default DropdownUser;
