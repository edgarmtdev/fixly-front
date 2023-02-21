const FormUser = () => {
  return (
    <div>
      <h2 className=" text-white font-semibold">Send a comment</h2>
      <input
        type="text"
        className=" mt-5 p-2 w-4/5 rounded-sm "
        placeholder=" Write your email"
      />
      <div className=" w-48 mt-10 bg-moztaza-500 text-center p-[8px] rounded-sm font-semibold text-[13px] hover:bg-moztaza-400 text-white">
        Send
      </div>
    </div>
  );
};
export default FormUser;
