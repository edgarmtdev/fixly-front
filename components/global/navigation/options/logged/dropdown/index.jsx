import { logOut } from "features/user";
import { useNavigateDispatch, useGetDropdownContext } from "hooks";
import Link from "next/link";
import { HiUser } from "react-icons/hi";
import DROPDOWN_ITEMS from "./model";
import { CardItem, CardUser, DropdownContainer } from "./styled";

const DropdownUser = ({ userName }) => {
  const { action } = useNavigateDispatch(logOut, "/");
  const { handleNotViewDropdown } = useGetDropdownContext();
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
          <Link key={index} href={item.route}>
            <CardItem onClick={handleNotViewDropdown}>
              <p>{item.title}</p>
            </CardItem>
          </Link>
        );
      })}
      <div className="line"></div>
      <CardItem onClick={action}>
        <p>Logout</p>
      </CardItem>
    </DropdownContainer>
  );
};

export default DropdownUser;
