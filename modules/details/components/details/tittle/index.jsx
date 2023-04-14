import { SiSpringsecurity } from "react-icons/si";
import { Title } from "./styled";

const TitleProduct = ({ productName }) => {
  return (
    <Title>
      <p className="label">
        <SiSpringsecurity />
        <span>Protected purchase</span>
      </p>
      <p className="name">{productName}</p>
    </Title>
  );
};

export default TitleProduct;
