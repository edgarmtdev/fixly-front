import React from "react";

const useSetState = (data) => {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    setState(data);
  }, []);
  return [state, setState];
};

export default useSetState;
