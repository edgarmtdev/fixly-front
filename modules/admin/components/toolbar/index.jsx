import ToolbarOptions from "./options";
import { FiArrowLeft } from "react-icons/fi";

export default function ToolbarAdmin({ title }) {
  const goBackRoute = () => history.back();
  return (
    <div className="flex items-center justify-center px-10 py-4 border-b-[1px] border-[#B3B3B3]">
      <section className="flex gap-4 items-center">
        <span
          onClick={goBackRoute}
          className="cursor-pointer hover:scale-90 hover:opacity-90 transition duration-200"
        >
          <FiArrowLeft size={20} />
        </span>
        <h3>{title}</h3>
      </section>
      <ToolbarOptions />
    </div>
  );
}
