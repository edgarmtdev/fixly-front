import { SiVisa, SiAmericanexpress, SiMastercard } from "react-icons/si";
import { FcMoneyTransfer } from "react-icons/fc";

const PAYMENT_METHODS = [
  {
    id: 1,
    title: "Debit card",
    icons: [
      <SiVisa color="#21246E" />,
      <SiAmericanexpress color="#306FC5" />,
      <SiMastercard color="#EE0005" />,
    ],
  },
  {
    id: 2,
    title: "Credit card",
    icons: [
      <SiVisa color="#21246E" />,
      <SiAmericanexpress color="#306FC5" />,
      <SiMastercard color="#EE0005" />,
    ],
  },
  {
    id: 3,
    title: "Stores",
    icons: [<FcMoneyTransfer />],
  },
];

export default PAYMENT_METHODS;
