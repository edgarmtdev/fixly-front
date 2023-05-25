import ToolbarAdmin from "../components/toolbar";

export default function DashboardAdminModule() {
  return (
    <>
      <ToolbarAdmin title={"Dashboard"} />
      <div className="mt-10 mx-10 flex gap-8">
        <div className="">General</div>
      </div>
    </>
  );
}
