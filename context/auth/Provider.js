import { authContext } from ".";

export default function AuthContext({ children }) {
  return <authContext.Provider>{children}</authContext.Provider>;
}
