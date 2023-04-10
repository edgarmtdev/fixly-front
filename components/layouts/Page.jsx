import React from "react";
import useStatusLogged from "hooks/useStatusLogged";
import useAuthValidate from "hooks/useAuthValidate";

const Page = ({ children }) => {
  useAuthValidate();
  useStatusLogged("/");
  return <>{children}</>;
};

export default Page;
