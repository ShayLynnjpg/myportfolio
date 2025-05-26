export default function Button({ text, type, onClick }) {
  const baseStyle = "px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105";
  const typeStyle =
    type === "primary"
      ? "bg-purple-600 text-white shadow-lg"
      : "border border-white text-white hover:bg-purple-600 hover:text-white";

  return (
    <button className={`${baseStyle} ${typeStyle}`} onClick={onClick}>
      {text}
    </button>
  );
}