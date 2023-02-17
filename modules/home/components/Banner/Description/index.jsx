import { Description, Feature, TextContent, Title, Button } from "./styled";

export default function ProductDescription() {
  return (
    <div className="mt-20 flex flex-col items-center">
      <TextContent>
        <Feature>New products</Feature>
        <Title>Arduino UNO</Title>
        <Description>
          Arduino board is te best for begin with programming and electronic if
          is your first experience with electronic enviroment
        </Description>
      </TextContent>
      <Button>BUY</Button>
    </div>
  );
}
