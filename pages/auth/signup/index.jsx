import React from "react";
import AuthLayout from "../../../components/layouts/auth";
import { HeadComponent } from "../../../components/utils/head";
import SignUpModule from "../../../modules/auth/signup";
import useStatusLogged from "../../../hooks/useStatusLogged";

export default function Signup() {
  const user = useStatusLogged("/");
  return (
    <React.Fragment>
      <HeadComponent title={"Register | Felcy"} />
      <SignUpModule user={user} />
    </React.Fragment>
  );
}

Signup.Layout = AuthLayout;
