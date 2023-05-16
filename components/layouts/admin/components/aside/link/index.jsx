import Link from "next/link";

export default function LinkItem({ route, title, icon }) {
  return (
    <Link href={route}>
      <li className="py-2 px-4 hover:bg-white cursor-pointer flex items-center gap-3 text-sm">
        {icon}
        <span>{title}</span>
      </li>
    </Link>
  );
}
