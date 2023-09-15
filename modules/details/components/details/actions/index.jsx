import { useEventRouter } from "hooks";
import { ActionsCont, AddCartButton, GetNowButton } from "./styled";
import { addToCart, shopProductNow } from "features";
import { BsCart3 } from "react-icons/bs";

export default function ActionsButtons({ product }) {
  const addItemInCart = useEventRouter(addToCart, "/cart", "/auth/login");
  const shopProduct = useEventRouter(shopProductNow, "/payment", "/auth/login");

  return (
    <ActionsCont>
      <GetNowButton onClick={() => shopProduct()}>Buy</GetNowButton>
      <AddCartButton onClick={() => addItemInCart({ idProduct: product?._id })}>
        <BsCart3 size={25} />
      </AddCartButton>
    </ActionsCont>
  );
}
