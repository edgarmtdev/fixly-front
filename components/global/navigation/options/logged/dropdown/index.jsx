import { logOut } from "features/user";
import { useNavigateDispatch } from "hooks";
import { HiUser } from "react-icons/hi";
import Routes from "./routes";
import { CardUser, DropdownContainer } from "./styled";
import { Route } from "./utils/Route";

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
      <Routes />
      <div className="line"></div>
      <Route onClick={action}>
        <p>Logout</p>
      </Route>
    </DropdownContainer>
  );
};

export default DropdownUser;
