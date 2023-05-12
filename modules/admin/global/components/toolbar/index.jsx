import { useGetGlobalState } from "hooks";

export default function ToolbarAdmin({ title }) {
  const { name } = useGetGlobalState("user");
  return (
    <div className="flex items-center justify-center mx-10 py-4 border-b-[1px] border-primary-200">
      <section className="">
        <h2>{title}</h2>
      </section>
      <section className="ml-auto flex">
        <p className="text-xs">{name}</p>
      </section>
    </div>
  );
}
