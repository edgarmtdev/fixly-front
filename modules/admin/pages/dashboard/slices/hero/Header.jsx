import Customers from "./customers/Customers";
import Balance from "./balance/Balance";

const colors = {
  original: "from-primary-400 via-primary-300 to-prsimary-200",
  pink: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  blue: "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ",
};

export default function Header() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <Balance color={colors.pink} />
      <Customers color={colors.blue} />
    </div>
  );
}
