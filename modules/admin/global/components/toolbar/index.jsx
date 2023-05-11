import { useGetGlobalState } from "hooks";

export default function ToolbarAdmin({ title }) {
  const { name } = useGetGlobalState("user");
  return (
    <div className="flex">
      <section className="">
        <h1>{title}</h1>
      </section>
      <section className="ml-auto">
        <p className=" text-xs">{name}</p>
      </section>
    </div>
  );
}
