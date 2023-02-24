import Link from "next/link";
import styled from "styled-components";

const Label = styled.p`
  margin: 1rem 0;
  text-align: center;
  span {
    color: #4fbb8b;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LabelComponent = () => {
  return (
    <Label>
      No account?,{" "}
      <Link href={"/auth/signup"}>
        <span>Sign Up</span>
      </Link>
    </Label>
  );
};

export default LabelComponent;
