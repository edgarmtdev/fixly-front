import Navbar from "components/global/navigation";
import { validation } from "features";
import { useDispatchEffect, useGetGlobalState } from "hooks";

const features = [validation];

export default function AdminLayout({ children }) {
  useDispatchEffect(features);

  const { role } = useGetGlobalState("user");

  console.log(role);

  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
}
