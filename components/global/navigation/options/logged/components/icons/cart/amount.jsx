import { useGetGlobalState } from "hooks/useGetGlobalState";

const AmountLabel = () => {
  const { items } = useGetGlobalState("cart");
  return (
    <span className="absolute top-[-5px] right-[-5px] text-[10px] text-white p-1 bg-red-600 flex items-center justify-center rounded-full w-4 h-4">
      {items.length}
    </span>
  );
};

export default AmountLabel;
