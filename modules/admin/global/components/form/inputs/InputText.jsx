export default function InputText({ name, placeholder, event, icon }) {
  return (
    <div className="relative flex items-center">
      <input
        onChange={event}
        className="outline-primary-300 rounded text-xs p-2 w-[100%] hover:border-[1px] hover:border-primary-300 transition duration-500"
        type="text"
        name={name}
        placeholder={placeholder}
      />
      <span className="absolute right-1">{icon}</span>
    </div>
  );
}
