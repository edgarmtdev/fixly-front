import { useDispatch } from "react-redux";

const useSendData = (callback) => {
  const dispatch = useDispatch();

  dispatch(callback());
  return;
};

export default useSendData;
