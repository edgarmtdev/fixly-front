import React from "react";

export const useSetState = (data) => {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    setState(data);
  }, []);
  return [state, setState];
};
