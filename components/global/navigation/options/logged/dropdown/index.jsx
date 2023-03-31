import React from "react";
import { HiUser } from "react-icons/hi";
import { CardItem, DropdownContainer } from "./styled";
import { logOut } from "/features/user";
import useNavigateDispatch from "/hooks/useDispatchNavigate";
import { CardUser } from "./styled";
import DROPDOWN_ITEMS from "./model";

const DropdownUser = ({ userName }) => {
  const { action } = useNavigateDispatch(logOut, "/");

  return (
    <DropdownContainer>
      <CardUser>
        <span>
          <HiUser style={{ cursor: "pointer" }} size={24} color={"#3E5067"} />
        </span>
        <p>Hello {userName}</p>
      </CardUser>
      <div className="line"></div>
      {DROPDOWN_ITEMS.map((item, index) => {
        return (
          <CardItem>
            <p>{item.title}</p>
          </CardItem>
        );
      })}
      <CardItem onClick={action}>
        <p>Logout</p>
      </CardItem>
    </DropdownContainer>
  );
};

export default DropdownUser;
