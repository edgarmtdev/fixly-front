import styled from "styled-components";
import NavbarAuth from "../../auth/navigation";

export const AuthCont = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/bg/background.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function AuthLayout({ children }) {
  return (
    <>
      <NavbarAuth />
      <AuthCont>{children}</AuthCont>
    </>
  );
}
