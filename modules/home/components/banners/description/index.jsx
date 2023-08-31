import Link from "next/link";
import { ContainerDescription, TextContent, Button } from "./styled";

const ProductDescription = ({ name, description, route }) => {
  return (
    <ContainerDescription>
      <TextContent>
        <p className="label">New products</p>
        <p className="name">{name}</p>
        <p className="description">{description}</p>
      </TextContent>
      <Link href={`${route}`}>
        <Button>BUY NOW</Button>
      </Link>
    </ContainerDescription>
  );
};
export default ProductDescription;
