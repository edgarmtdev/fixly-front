import { useEffect, useState } from "react";
import { dropdownContext } from ".";

export default function DropdownContext({ children }) {
  const [view, setView] = useState(false);

  const handleViewDropdown = () => {
    setView(true);
  };

  const handleNotViewDropdown = () => {
    setView(false);
  };

  useEffect(() => setView(false), []);

  return (
    <dropdownContext.Provider
      value={{ view, handleViewDropdown, handleNotViewDropdown }}
    >
      {children}
    </dropdownContext.Provider>
  );
}
