import { Container } from "./styled";

const FormUser = () => {
  return (
    <Container>
      <h6>Send a comment</h6>
      <input type="text" placeholder="Write your email" />
      <button>Send</button>
    </Container>
  );
};
export default FormUser;
