import Link from "next/link";
import { NavbarTitle } from "./styled";
import { RiFlashlightLine } from "react-icons/ri";

export default function TitleAside() {
  return (
    <Link href={"/admin/dashboard"}>
      <NavbarTitle>
        <RiFlashlightLine color="#CD8A20" />
        <h1>Fixly</h1>
      </NavbarTitle>
    </Link>
  );
}
