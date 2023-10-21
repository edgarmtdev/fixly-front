import { useContext } from "react";
import ToolbarOptions from "./options";
import { FiArrowLeft } from "react-icons/fi";
import { asideContext } from "context/admin/aside";
import { BiMenu } from "react-icons/bi";

export default function ToolbarAdmin({ title, user }) {
  const { setView } = useContext(asideContext);

  return (
    <div className="flex items-center justify-center p-2 tabletL:px-10 py-5 border-b-[1px] border-[#B3B3B3]">
      <section className="flex gap-3 tabletL:gap-4 items-center">
        <button
          className="block tabletL:hidden"
          onClick={() => setView((state) => !state)}
        >
          <BiMenu size={25} />
        </button>
        <span
          onClick={() => history.back()}
          className="cursor-pointer hover:scale-90 hover:opacity-90 transition duration-200"
        >
          <FiArrowLeft size={20} />
        </span>
        <h3>{title}</h3>
      </section>
      <ToolbarOptions user={user} />
    </div>
  );
}
