import Link from "next/link";
import { Container, TextContent, Button } from "./styled";

const ProductDescription = ({ name, description, route }) => {
  return (
    <Container>
      <TextContent>
        <p className="label">New products</p>
        <p className="name">{name}</p>
        <p className="description">{description}</p>
      </TextContent>
      <Link href={`${route}`}>
        <Button>Buy now</Button>
      </Link>
    </Container>
  );
};
export default ProductDescription;
