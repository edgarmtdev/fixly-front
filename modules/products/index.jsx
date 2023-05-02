import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const myImage = new CloudinaryImage("projects/fixly", {
  cloudName: "dsgd1tu0d",
}).resize(fill().width(150).height(150));

export default function ProductsModule({ products, categorie }) {
  return (
    <section className="mt-32">
      {products && (
        <p className="text-2xl">{`${products.length} resultados para ${categorie}`}</p>
      )}
      <div className="mt-10 flex">
        <aside className="w-1/4 p-5">
          <p className=" text-lg font-semibold">Filters</p>
        </aside>
        <section className="w-full p-5 flex flex-col gap-5">
          {products &&
            products.map((product, index) => (
              <div
                key={index}
                className="w-full h-[250px] bg-white p-5 rounded flex"
              >
                {/* <Image src={product.imgURL[0]} alt="product" layout="fill" /> */}
                <AdvancedImage cldImg={myImage} />
                <img src={product.imgURL[0]} alt="" />
                <p>{product.name}</p>
              </div>
            ))}
        </section>
      </div>
    </section>
  );
}
