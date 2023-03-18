import { Container } from "./styled";

const FormUser = () => {
  return (
    <Container>
      <h4>Send a comment</h4>
      <input type="text" placeholder="Write your email" />
      <button>Send</button>
    </Container>
  );
};
export default FormUser;
