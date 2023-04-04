import { useSelector } from "react-redux";
import ActionsButtons from "./actions";
import ImageSlider from "./images";
import { Card, CardContainer, Details, Price } from "./styled";
import TitleProduct from "./tittle";
import SpinnerLoader from "/components/utils/loaders/spinner";

function CardProduct({ product, loading }) {
  const user = useSelector((selector) => selector.user);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <CardContainer>
      <ImageSlider imgURL={product?.imgURL[0]} />
      <Card>
        <TitleProduct productName={product?.name} />
        <Price>
          <span>$ </span>
          {product?.price?.$numberDecimal || product?.price}
        </Price>
        <Details>
          <p>
            <span>Description: </span>
            {product?.description}
          </p>
        </Details>
        {user.logged ? (
          <ActionsButtons product={product} />
        ) : (
          <p>For shop, signin please</p>
        )}
      </Card>
    </CardContainer>
  );
}

export default CardProduct;
