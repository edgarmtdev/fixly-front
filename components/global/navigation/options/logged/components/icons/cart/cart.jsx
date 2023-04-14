import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi";
import AmountLabel from "./amount";

const IconCart = () => {
  return (
    <Link href={"/cart"}>
      <span className="relative">
        <HiOutlineShoppingCart size={24} color={"#3E5067"} />
        <AmountLabel />
      </span>
    </Link>
  );
};

export default IconCart;
