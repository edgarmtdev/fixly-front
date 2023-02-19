import React from "react";
import useStatusLogged from "../../../hooks/useStatusLogged";
import AuthLayout from "../../../layouts/auth";
import LoginMod from "../../../modules/auth/login";

export default function Login() {
  const user = useStatusLogged();
  return (
    <AuthLayout>
      <LoginMod user={user} />
    </AuthLayout>
  );
}
