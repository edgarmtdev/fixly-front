import { CgSpinner } from "react-icons/cg";
import { ButtonComponent } from "./styled";

const Button = ({ user, title }) => {
  return (
    <ButtonComponent>
      <button>
        {user.loading ? <CgSpinner size={28} /> : <span>{title}</span>}
      </button>
    </ButtonComponent>
  );
};

export default Button;
