import { Container, TextContent, Button } from "./styled";

const ProductDescription = ({ name, description }) => {
  return (
    <Container>
      <TextContent>
        <h4>New products</h4>
        <p className="name">{name}</p>
        <p className="description">{description}</p>
      </TextContent>
      <Button>BUY</Button>
    </Container>
  );
};
export default ProductDescription;
