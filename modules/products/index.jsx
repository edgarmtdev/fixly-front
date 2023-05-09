// import { fill } from "@cloudinary/url-gen/actions/resize";
// import { CloudinaryImage } from "@cloudinary/url-gen";
// // import { AdvancedImage } from "@cloudinary/react";

import ProductCard from "components/global/products/card";

// // const myImage = new CloudinaryImage("projects/fixly", {
// //   cloudName: "dsgd1tu0d",
// // }).resize(fill().width(150).height(150));

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
