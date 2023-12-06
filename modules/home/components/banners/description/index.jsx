import Link from "next/link";
import { ContainerDescription, TextContent, Button } from "./styled";

const ProductDescription = ({ name, description, route }) => {
  return (
    <ContainerDescription>
      <TextContent>
        <h2 className="label">New products</h2>
        <h2 className="name">{name}</h2>
        <h2 className="description">{description}</h2>
      </TextContent>
      <Link href={`${route}`}>
        <Button>BUY NOW</Button>
      </Link>
    </ContainerDescription>
  );
};
export default ProductDescription;
