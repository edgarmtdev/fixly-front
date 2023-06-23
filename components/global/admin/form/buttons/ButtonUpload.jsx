import { CgSpinner } from "react-icons/cg";

export default function ButtonUpload({ loading }) {
  return (
    <button
      className="bg-moztaza-500 text-white flex justify-center rounded p-2 font-semibold text-sm hover:scale-x-[.99] hover:opacity-95 transition duration-75"
      type="submit"
    >
      {loading ? (
        <CgSpinner size={28} className=" animate-spin" />
      ) : (
        "Create product"
      )}
    </button>
  );
}
