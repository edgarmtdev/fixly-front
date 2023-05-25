import { IoMdClose } from "react-icons/io";

export default function TitleBar({ title, handleNotViewModal }) {
  return (
    <section className="flex">
      <div>
        <h3>{title}</h3>
      </div>
      <button className="ml-auto" onClick={handleNotViewModal}>
        <IoMdClose
          className="text-primary_variant-200 hover:text-primary-400"
          size={20}
        />
      </button>
    </section>
  );
}
