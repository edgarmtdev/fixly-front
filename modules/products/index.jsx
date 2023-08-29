import ProductCard from "components/global/products/card";

export default function ProductsModule({ products, categorie }) {
  return (
    <section className="mt-32">
      {products && (
        <p className="text-2xl">{`${products.length} resultados para ${categorie}`}</p>
      )}
      <div className="mt-10 flex">
        <aside className="w-1/4 p-5">
          <p className="text-lg font-semibold">Filters</p>
        </aside>
        <section className="w-full p-5 flex gap-8">
          {products &&
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </section>
      </div>
    </section>
  );
}
