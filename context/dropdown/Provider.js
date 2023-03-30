import React from "react";
import { dropdownContext } from ".";

export default function DropdownContext({ children }) {
  const [view, setView] = React.useState(false);

  const handleViewDropdown = () => {
    setView(!view);
  };

  return (
    <dropdownContext.Provider value={{ view, handleViewDropdown }}>
      {children}
    </dropdownContext.Provider>
  );
}
