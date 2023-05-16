import LinkItem from "./link";
import { AiOutlineDashboard, AiOutlineShopping } from "react-icons/ai";

const links = [
  {
    route: "/admin/dashboard",
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
  },
  { route: "/admin/products", title: "Products", icon: <AiOutlineShopping /> },
];

export default function LinksAside() {
  return (
    <ul>
      {links.map((link, index) => (
        <LinkItem key={index} {...link} />
      ))}
    </ul>
  );
}
