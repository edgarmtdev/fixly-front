export default function ProductsModule({ products, categorie }) {
  return (
    <section className="mt-32">
      {products ? (
        <p className="text-2xl">{`${products.length} resultados para ${categorie}`}</p>
      ) : (
        <></>
      )}
      <div className="mt-10 flex">
        <aside className="w-1/4 p-5">
          <p className=" text-lg font-semibold">Filers</p>
        </aside>
        <section className="w-full p-5 flex flex-col gap-5">
          {products &&
            products.map((product, index) => (
              <div
                key={index}
                className="w-full h-[250px] bg-white p-5 rounded flex"
              >
                <img src={product.imgURL[0]}></img>
                <p>{product.name}</p>
              </div>
            ))}
        </section>
      </div>
    </section>
  );
}
