import { SiVisa, SiAmericanexpress, SiMastercard } from "react-icons/si";
import { FcMoneyTransfer } from "react-icons/fc";

const PAYMENT_METHODS = [
  {
    id: 1,
    title: "Debit card",
    icons: [
      <SiVisa color="#21246E" size={"50px"} />,
      <SiAmericanexpress color="#306FC5" size={"45px"} />,
      <SiMastercard color="#EE0005" size={"50px"} />,
    ],
  },
  {
    id: 2,
    title: "Credit card",
    icons: [
      <SiVisa color="#21246E" size={"50px"} />,
      <SiAmericanexpress color="#306FC5" size={"45px"} />,
      <SiMastercard color="#EE0005" size={"50px"} />,
    ],
  },
  {
    id: 3,
    title: "Stores",
    icons: [<FcMoneyTransfer size={"50px"} />],
  },
];

export default PAYMENT_METHODS;
