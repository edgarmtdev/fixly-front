import CardCategory from "./card";
import { Container } from "./styled";
import { useSetState } from "hooks";
import CATEGORIES_LINKS from "./model/categories";

export default function GridCategories() {
  const [categories] = useSetState(CATEGORIES_LINKS);
  return (
    <Container>
      {categories.map((item, index) => (
        <CardCategory key={index} name={item.title} icon={item.icon} />
      ))}
    </Container>
  );
}
