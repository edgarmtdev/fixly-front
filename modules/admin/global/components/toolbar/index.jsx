import ToolbarOptions from "./options";

export default function ToolbarAdmin({ title }) {
  return (
    <div className="flex items-center justify-center px-10 py-4 border-b-[1px] border-[#B3B3B3]">
      <section className="">
        <h3>{title}</h3>
      </section>
      <ToolbarOptions />
    </div>
  );
}
