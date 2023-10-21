import ToolbarAdmin from "../../components/toolbar";
import Sales from "./slices/charts/Sales";
import Header from "./slices/hero/Header";

export default function DashboardAdminModule({ user }) {
  return (
    <>
      <ToolbarAdmin title={"Dashboard"} user={user} />
      <section className="mt-10 mx-10 flex flex-col gap-10">
        <Header />
        <Sales />
      </section>
    </>
  );
}
