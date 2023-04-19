import { SiVisa, SiAmericanexpress, SiMastercard } from "react-icons/si";
import { FcMoneyTransfer } from "react-icons/fc";

const PAYMENT_METHODS = [
  {
    id: 1,
    title: "Debit card",
    icons: [
      <SiVisa color="#21246E" key={1} />,
      <SiAmericanexpress color="#306FC5" key={2} />,
      <SiMastercard color="#EE0005" key={3} />,
    ],
  },
  {
    id: 2,
    title: "Credit card",
    icons: [
      <SiVisa color="#21246E" key={1} />,
      <SiAmericanexpress color="#306FC5" key={2} />,
      <SiMastercard color="#EE0005" key={3} />,
    ],
  },
  {
    id: 3,
    title: "Stores",
    icons: [<FcMoneyTransfer key={1} />],
  },
];

export default PAYMENT_METHODS;
