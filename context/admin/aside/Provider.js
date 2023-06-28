import { useEffect, useState } from "react";
import { asideContext } from ".";
import { useRouter } from "next/router";

export default function AsideContext({ children }) {
  const router = useRouter();
  const [view, setView] = useState(false);

  useEffect(() => setView(false), [router.route]);
  return (
    <asideContext.Provider value={{ view, setView }}>
      {children}
    </asideContext.Provider>
  );
}
