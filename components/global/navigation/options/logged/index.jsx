import Link from "next/link";
import { forwardRef } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { logOut } from "../../../../../features/user";
import useNavigateDispatch from "../../../../../hooks/useDispatchNavigate";
import { OptionsContainer } from "../no-logged/styled";

const LoggedOptions = forwardRef(({ userName }, ref) => {
  const { action } = useNavigateDispatch(logOut, "/");
  return (
    <OptionsContainer>
      <Link href={"/cart"}>
        <span>
          <AiOutlineShoppingCart size={24} color={"#3E5067"} />
        </span>
      </Link>
      <AiOutlineUser size={24} color={"#3E5067"} />
      <p onClick={action}>Logout</p>
      {userName}
    </OptionsContainer>
  );
});

export default LoggedOptions;
