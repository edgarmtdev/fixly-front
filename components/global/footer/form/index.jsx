import { Container } from "./styled";

const FormUser = () => {
  return (
    <Container>
      <p>Send a comment</p>
      <input type="text" placeholder="Write your email" />
      <button>Send</button>
    </Container>
  );
};
export default FormUser;
