import useEventRouter from "hooks/useEventRouter";
import { ActionsCont, AddCartButton, GetNowButton } from "./styled";
import { addToCart, shopProductNow } from "features";

export default function ActionsButtons({ product }) {
  const addItemInCart = useEventRouter(addToCart, "/cart", "/auth/login");
  const shopProduct = useEventRouter(shopProductNow, "/payment", "/auth/login");

  return (
    <ActionsCont>
      <GetNowButton onClick={() => shopProduct()}>
        <span>Buy</span>
      </GetNowButton>
      <AddCartButton onClick={() => addItemInCart({ idProduct: product?._id })}>
        <span>Add to Cart</span>
      </AddCartButton>
    </ActionsCont>
  );
}
