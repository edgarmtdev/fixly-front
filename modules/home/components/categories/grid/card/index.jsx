import Link from "next/link";
import { Card } from "./styled";

const CardCategory = ({ name, icon }) => {
  return (
    <Link href={`/products/categories?cat=${name}`}>
      <Card>
        {icon}
        <span>{name}</span>
      </Card>
    </Link>
  );
};
export default CardCategory;
