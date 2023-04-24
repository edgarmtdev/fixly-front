import React from "react";
import AuthLayout from "components/layouts/auth";
import { HeadComponent } from "components/utils/head";
import LoginModule from "modules/auth/login";
import { useGetGlobalState } from "hooks/useGetGlobalState";
// import { validateSession } from "services/auth";

export default function Login() {
  const user = useGetGlobalState("user");
  return (
    <React.Fragment>
      <HeadComponent title={"Login | Fixly"} />
      <LoginModule user={user} />
    </React.Fragment>
  );
}

// export async function getServerSideProps(ctx) {
//   const data = await validateSession(ctx);
//   if (data.success) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//       props: { data: data.user },
//     };
//   }
//   return { props: { data: null } };
// }

Login.Layout = AuthLayout;
