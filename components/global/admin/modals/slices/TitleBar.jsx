import { IoMdClose } from "react-icons/io";

export default function TitleBar({ title, icon, handleNotViewModal }) {
  return (
    <>
      <div className="flex items-center gap-3">
        <span>{icon}</span>
        <h3>{title}</h3>
      </div>
      <button
        className="ml-auto absolute top-3 right-3"
        onClick={handleNotViewModal}
      >
        <IoMdClose
          className="text-primary_variant-200 hover:text-primary-400"
          size={20}
        />
      </button>
    </>
  );
}
