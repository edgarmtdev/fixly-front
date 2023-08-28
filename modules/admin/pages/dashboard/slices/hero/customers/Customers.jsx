import CardInformation from "../CardInformation";
import { useQuery } from "react-query";
import { getLastCustomers } from "services";

export default function Customers({ color }) {
  const { isLoading, data } = useQuery(["customers"], getLastCustomers);
  return (
    <CardInformation color={color}>
      <h4 className="mb-3">Last Customers</h4>
      <p className="font-semibold text-2xl tracking-wide">
        {isLoading ? "Loading..." : `${data.numberOfCustomers}`}
      </p>
    </CardInformation>
  );
}
