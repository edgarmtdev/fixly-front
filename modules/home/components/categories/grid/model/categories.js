import {
  BsTools,
  BsFillKeyboardFill,
  BsLightbulb,
  BsCpuFill,
  BsFillHddNetworkFill,
} from "react-icons/bs";
import { RiComputerFill } from "react-icons/ri";
import { MdCable, MdSettingsInputHdmi } from "react-icons/md";
import { GiElectricalResistance } from "react-icons/gi";

const CATEGORIES_LINKS = [
  { id: 1, title: "Tools", icon: <BsTools /> },
  {
    id: 2,
    title: "Boards",
    icon: <BsFillKeyboardFill />,
  },
  {
    id: 3,
    title: "Leds",
    icon: <BsLightbulb />,
  },
  {
    id: 4,
    title: "Integrated",
    icon: <BsCpuFill />,
  },
  {
    id: 5,
    title: "Accessories",
    icon: <RiComputerFill />,
  },
  {
    id: 6,
    title: "Cables",
    icon: <MdCable />,
  },
  {
    id: 7,
    title: "Adapters",
    icon: <MdSettingsInputHdmi />,
  },
  {
    id: 8,
    title: "Network",
    icon: <BsFillHddNetworkFill />,
  },
  {
    id: 9,
    title: "Ressitances",
    icon: <GiElectricalResistance />,
  },
  {
    id: 10,
    title: "Ressitances",
    icon: <GiElectricalResistance />,
  },
];

export default CATEGORIES_LINKS;
