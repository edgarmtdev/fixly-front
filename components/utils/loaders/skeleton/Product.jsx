export default function ProductSkeleton() {
  return (
    <div className="bg-white w-[224px] h-[320px] rounded shadow-lg">
      <div className="bg-gray-200 w-full h-2/3 animate-pulse" />
      <section className="m-5 flex flex-col gap-4">
        <div className="bg-gray-200 h-5 rounded animate-pulse"></div>
        <div className="bg-gray-200 h-5 rounded animate-pulse"></div>
      </section>
    </div>
  );
}
