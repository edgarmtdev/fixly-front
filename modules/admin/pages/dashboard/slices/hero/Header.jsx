import Customers from "./customers/Customers";
import Balance from "./balance/Balance";

const colors = {
  original: "bg-gradient-to-b from-primary-400 via-primary-300 to-primary-200",
  pink: "bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500",
  blue: "bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
};

export default function Header() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <Balance color={colors.original} />
      <Customers color={colors.blue} />
    </div>
  );
}
