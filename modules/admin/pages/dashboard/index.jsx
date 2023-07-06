import { useQuery } from "react-query";
import { getBalance } from "services";
import ToolbarAdmin from "../../components/toolbar";
import { useState } from "react";

const colors = {
  original: "from-primary-400 via-primary-300 to-primary-200",
  pink: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  blue: "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ",
};

export default function DashboardAdminModule() {
  const { data, isLoading } = useQuery(["balance"], getBalance);

  const [color, setColor] = useState(colors.original);

  const changeColor = (color) => setColor(color);

  return (
    <>
      <ToolbarAdmin title={"Dashboard"} />
      <button onClick={() => changeColor(colors.pink)}>changePink</button>
      <button onClick={() => changeColor(colors.blue)}>changeBlue</button>
      <button onClick={() => changeColor(colors.original)}>reset</button>
      <section className="mt-10 mx-10 flex flex-col gap-10">
        <div className="grid grid-cols-3 gap-10">
          <div
            className={`bg-gradient-to-r ${color} text-white p-5 rounded h-48`}
          >
            <h4 className="mb-2">Total Balance</h4>
            <p className="font-semibold text-2xl tracking-wide">
              {isLoading
                ? "Loading..."
                : `$ ${data?.balance?.available[0]?.amount} mxn`}
            </p>
          </div>
        </div>
        <div className="bg-white h-48 rounded"></div>
      </section>
    </>
  );
}
