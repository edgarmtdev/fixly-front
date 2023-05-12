import LinkItem from "./link";

const links = [
  { route: "/admin/dashboard", title: "Dashboard" },
  { route: "/admin/products", title: "Products" },
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
