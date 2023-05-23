import Link from "next/link";

export default function LinkItem({ route, title, icon }) {
  return (
    <Link href={route}>
      <li className="py-2 px-4 rounded cursor-pointer flex items-center gap-4 hover:text-primary-100 hover:bg-primary-300">
        <span className="text-2xl">{icon}</span>
        <p className="text-sm">{title}</p>
      </li>
    </Link>
  );
}
