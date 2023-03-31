import React from "react";
import { dropdownContext } from ".";

export default function DropdownContext({ children }) {
  const [view, setView] = React.useState(true);

  const handleViewDropdown = () => {
    setView(true);
  };

  const handleNotViewDropdown = () => {
    setView(false);
  };

  return (
    <dropdownContext.Provider
      value={{ view, handleViewDropdown, handleNotViewDropdown }}
    >
      {children}
    </dropdownContext.Provider>
  );
}
