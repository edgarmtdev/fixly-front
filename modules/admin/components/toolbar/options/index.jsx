import { AiOutlineLogout } from "react-icons/ai";
import { logOut } from "features";
import { useGetGlobalState, useNavigateDispatch } from "hooks";

export default function ToolbarOptions() {
  const { name } = useGetGlobalState("user");
  const event = useNavigateDispatch(logOut, "/");
  return (
    <section className="ml-auto flex gap-3 items-center">
      <p className="text-xs">{name}</p>
      <span onClick={event}>
        <AiOutlineLogout size={18} className="hover:scale-90 cursor-pointer" />
      </span>
    </section>
  );
}
