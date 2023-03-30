import React from "react";
import { DropdownContainer } from "./styled";
import { logOut } from "/features/user";
import useNavigateDispatch from "/hooks/useDispatchNavigate";

const DropdownUser = ({ userName }) => {
  const { action } = useNavigateDispatch(logOut, "/");
  return (
    <DropdownContainer>
      <p onClick={action} className="p-2 bg-black text-white cursor-pointer">
        Logout
      </p>
      {userName}
    </DropdownContainer>
  );
};

export default DropdownUser;
