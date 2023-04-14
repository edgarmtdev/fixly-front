import { dropdownContext } from "context/dropdown";
import { useContext } from "react";
import { HiChevronDown, HiUser } from "react-icons/hi";

const IconUser = () => {
  const { view, handleViewDropdown, handleNotViewDropdown } =
    useContext(dropdownContext);
  return (
    <span
      onClick={view ? handleNotViewDropdown : handleViewDropdown}
      className="flex items-center"
    >
      <HiUser style={{ cursor: "pointer" }} size={24} color={"#3E5067"} />
      <HiChevronDown
        style={{ cursor: "pointer" }}
        size={18}
        color={"#3E5067"}
      />
    </span>
  );
};

export default IconUser;
