import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const useStatusLogged = (route) => {
  const router = useRouter();
  const userData = useSelector((state) => state.user);
  React.useEffect(() => {
    if (userData.logged) {
      router.replace(route);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return userData;
};

export default useStatusLogged;
