import { AiOutlineLogout } from "react-icons/ai";
import { logOut } from "features";
import { useNavigateDispatch } from "hooks";

export default function ToolbarOptions({ user }) {
  const handleLogout = useNavigateDispatch(logOut, "/");
  return (
    <section className="ml-auto flex gap-3 items-center">
      <p className="text-xs">{user ? user.name : "Welcome"}</p>
      <span onClick={handleLogout}>
        <AiOutlineLogout size={18} className="hover:scale-90 cursor-pointer" />
      </span>
    </section>
  );
}
