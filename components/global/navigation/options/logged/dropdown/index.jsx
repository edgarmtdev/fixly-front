import React from "react";
import { HiUser } from "react-icons/hi";
import { DropdownContainer } from "./styled";
import { logOut } from "/features/user";
import useNavigateDispatch from "/hooks/useDispatchNavigate";

const DropdownUser = ({ userName }) => {
  const { action } = useNavigateDispatch(logOut, "/");

  return (
    <DropdownContainer>
      <div className="flex items-center gap-4 py-2 px-4 hover:bg-primary-100 cursor-pointer rounded-sm">
        <span className="bg-primary-100 p-3 rounded-full">
          <HiUser style={{ cursor: "pointer" }} size={24} color={"#3E5067"} />
        </span>
        <p className=" text-xs">Hello {userName}</p>
      </div>
      <div className="border-b-[1px] my-2"></div>
      <div className="py-3 px-6 my-1 hover:bg-primary-100 text-xs cursor-pointer rounded-sm">
        <p>My Profile</p>
      </div>
      <div className="py-3 px-6 my-1 hover:bg-primary-100 text-xs cursor-pointer rounded-sm">
        <p>Reviews</p>
      </div>
      <div className="py-3 px-6 my-1 hover:bg-primary-100 text-xs cursor-pointer rounded-sm">
        <p>Shops</p>
      </div>
      <div className="py-3 px-6 my-1 hover:bg-primary-100 text-xs cursor-pointer rounded-sm">
        <p onClick={action}>Logout</p>
      </div>
    </DropdownContainer>
  );
};

export default DropdownUser;
