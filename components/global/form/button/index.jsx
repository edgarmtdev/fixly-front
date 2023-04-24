import { CgSpinner } from "react-icons/cg";
import { ButtonComponent } from "./styled";

const Button = ({ user, title, size }) => {
  return (
    <ButtonComponent size={size}>
      <button type="submit">
        {user.loading ? <CgSpinner size={28} /> : <span>{title}</span>}
      </button>
    </ButtonComponent>
  );
};

export default Button;
