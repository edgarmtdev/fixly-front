import { Container, TextContent, Button } from "./styled";

const ProductDescription = () => {
  return (
    <Container>
      <TextContent>
        <h4>New products</h4>
        <h3>Arduino UNO</h3>
        <p>
          Arduino board is te best for begin with programming and electronic if
          is your first experience with electronic enviroment
        </p>
      </TextContent>
      <Button>BUY</Button>
    </Container>
  );
};
export default ProductDescription;
