import React from "react";
import AuthLayout from "../../../components/layouts/auth";
import { HeadComponent } from "../../../components/utils/head";
import LoginModule from "../../../modules/auth/login";
import axios from "axios";
import AUTH_CONSTANTS from "config/constants/auth";
import { useSelector } from "react-redux";

export default function Login(props) {
  const userData = useSelector((state) => state.user);
  console.log(props);
  return (
    <React.Fragment>
      <HeadComponent title={"Login | Fixly"} />
      <LoginModule user={userData} />
    </React.Fragment>
  );
}

export async function getServerSideProps(ctx) {
  // Obtén las cookies del navegador
  const cookies = ctx?.req.headers.cookie;

  if (cookies) {
    const { data } = await axios.get(
      `http://localhost:4000${AUTH_CONSTANTS.validation}`,
      {
        withCredentials: true,
        headers: {
          Cookie: cookies,
        },
      }
    );
    if (data.success) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }
  return { props: {} };
}

Login.Layout = AuthLayout;
