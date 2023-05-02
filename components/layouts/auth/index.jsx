import Image from "next/image";
import styled from "styled-components";
import NavbarAuth from "../../auth/navigation";

export const AuthCont = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export default function AuthLayout({ children }) {
  return (
    <main className="relative">
      <NavbarAuth />
      <Image
        src={"/bg/background.png"}
        layout="fill"
        priority
        className="z-0"
      />
      <AuthCont>{children}</AuthCont>
    </main>
  );
}
