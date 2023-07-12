import ToolbarAdmin from "../../components/toolbar";
import Header from "./slices/hero/Header";

export default function DashboardAdminModule() {
  return (
    <>
      <ToolbarAdmin title={"Dashboard"} />
      <section className="mt-10 mx-10 flex flex-col gap-10">
        <Header />
        <div className="bg-white h-48 rounded"></div>
      </section>
    </>
  );
}
