import { useEffect, useState } from "react";
import { dropdownContext } from ".";
import { useRouter } from "next/router";

export default function DropdownContext({ children }) {
  const router = useRouter();
  const [view, setView] = useState(false);

  const handleViewDropdown = () => {
    setView(true);
  };

  const handleNotViewDropdown = () => {
    setView(false);
  };

  useEffect(() => setView(false), [router.route]);

  return (
    <dropdownContext.Provider
      value={{ view, handleViewDropdown, handleNotViewDropdown }}
    >
      {children}
    </dropdownContext.Provider>
  );
}
