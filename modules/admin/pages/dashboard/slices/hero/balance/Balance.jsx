import CardInformation from "../CardInformation";
import { useQuery } from "react-query";
import { getBalance } from "services";

export default function Balance({ color }) {
  const { data, isLoading } = useQuery(["balance"], getBalance);

  const balance = data?.balance?.available[0]?.amount.toLocaleString("en", {
    style: "currency",
    currency: "MXN",
  });
  return (
    <CardInformation color={color}>
      <h4 className="mb-3">Total Balance</h4>
      <p className="font-semibold text-2xl tracking-wide">
        {isLoading ? "Loading..." : `${balance}`}
      </p>
    </CardInformation>
  );
}
