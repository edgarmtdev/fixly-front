export default function CardInformation({ color, children }) {
  return (
    <div className={`bg-gradient-to-r ${color} text-white p-6 rounded h-48`}>
      {children}
    </div>
  );
}
