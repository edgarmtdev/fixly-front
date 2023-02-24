import { CgSpinner } from "react-icons/cg";
import { ButtonComponent } from "./styled";

const Button = ({ user, title }) => {
  return (
    <ButtonComponent type="submit">
      {user.loading ? <CgSpinner size={28} /> : <span>{title}</span>}
    </ButtonComponent>
  );
};

export default Button;
