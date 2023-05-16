import { useGetGlobalState } from "hooks";
import { AiOutlineLogout } from "react-icons/ai";

export default function ToolbarAdmin({ title }) {
  const { name } = useGetGlobalState("user");
  return (
    <div className="flex items-center justify-center px-10 py-4 border-b-[1px] border-[#B3B3B3]">
      <section className="">
        <h3>{title}</h3>
      </section>
      <section className="ml-auto flex gap-3 items-center">
        <p className="text-xs">{name}</p>
        <AiOutlineLogout size={18} className="hover:scale-90 cursor-pointer" />
      </section>
    </div>
  );
}
