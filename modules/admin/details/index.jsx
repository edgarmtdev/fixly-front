import ToolbarAdmin from "../global/components/toolbar";

export default function DetailsToAdmin({ product }) {
  console.log(product);
  return (
    <>
      <ToolbarAdmin title={product.name} />
      <div className="mt-10 mx-10 flex gap-8">
        <div className="">{}</div>
      </div>
    </>
  );
}
