import Link from "next/link";

export default function LinkItem({ route, title }) {
  return (
    <Link href={route}>
      <li className="p-4 hover:bg-white cursor-pointer">{title}</li>
    </Link>
  );
}
