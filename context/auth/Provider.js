import React from "react";
import { authContext } from ".";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthContext({ children }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    if (user.logged) {
      navigate("/");
    }
  }, []);

  return <authContext.Provider value={user}>{children}</authContext.Provider>;
}
