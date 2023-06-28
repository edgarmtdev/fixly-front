import { useGetItem } from "hooks";
import ToolbarAdmin from "../../components/toolbar";

export default function DetailsToAdmin({ id }) {
  const [product, loading] = useGetItem(id, 100);
  return (
    <>
      <ToolbarAdmin title={loading ? "Loading..." : product.name} />
      <div className="mt-10 mx-10 flex gap-8">
        <div className="">{}</div>
      </div>
    </>
  );
}
