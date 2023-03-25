import { Container, TextContent, Button } from "./styled";

const ProductDescription = ({ name, description }) => {
  return (
    <Container>
      <TextContent>
        <p className="label">New products</p>
        <p className="name">{name}</p>
        <p className="description">{description}</p>
      </TextContent>
      <Button>Buy now</Button>
    </Container>
  );
};
export default ProductDescription;
