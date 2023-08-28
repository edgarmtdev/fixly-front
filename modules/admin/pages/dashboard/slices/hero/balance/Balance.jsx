import { formatBalance } from "modules/admin/helpers";
import CardInformation from "../CardInformation";
import { useQuery } from "react-query";
import { getBalance } from "services";

export default function Balance({ color }) {
  const { data, isLoading } = useQuery(["balance"], getBalance);

  const balance = formatBalance(data);

  return (
    <CardInformation color={color}>
      <h4 className="mb-3">Total Balance</h4>
      <p className="font-semibold text-2xl tracking-wide">
        {isLoading ? "Loading..." : `${balance}`}
      </p>
    </CardInformation>
  );
}
