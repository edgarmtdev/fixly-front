import { Container, TextContent, Button } from "./styled";

const ProductDescription = ({ name, description }) => {
  return (
    <Container>
      <TextContent>
        <h4>New products</h4>
        <h3>{name}</h3>
        <p>{description}</p>
      </TextContent>
      <Button>BUY</Button>
    </Container>
  );
};
export default ProductDescription;
