import React from "react";
import AuthLayout from "../../../components/layouts/auth";
import { HeadComponent } from "../../../components/utils/head";
import SignUpModule from "../../../modules/auth/signup";
import { validateSession } from "services/auth";
import { useGetGlobalState } from "hooks/useGetGlobalState";

export default function Signup() {
  const user = useGetGlobalState("user");
  return (
    <React.Fragment>
      <HeadComponent title={"Register | Felcy"} />
      <SignUpModule user={user} />
    </React.Fragment>
  );
}

export async function getServerSideProps(ctx) {
  const data = await validateSession(ctx);
  if (data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: { user: data || null } };
}

Signup.Layout = AuthLayout;
