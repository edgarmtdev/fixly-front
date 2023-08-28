import { CgSpinner } from "react-icons/cg";

export default function ButtonUpload({ loading }) {
  return (
    <button
      className="bg-moztaza-500 text-white flex justify-center rounded p-3 text-sm hover:scale-x-[.995] transition duration-75"
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
