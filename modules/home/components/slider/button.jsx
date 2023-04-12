const Button = ({ event, icon }) => (
  <button
    className="bg-[#3e5067] p-2 rounded-full hover:scale-105 transition duration-150"
    onClick={event}
  >
    <span className="text-white">{icon}</span>
  </button>
);

export default Button;
