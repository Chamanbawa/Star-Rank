import { FaStar } from "react-icons/fa";
import "../style/index.css";

function Star({ selected = true, onSelect = (f) => f, className }) {
  return (
    <FaStar
      className={className}
      onClick={onSelect}
      color={selected ? "#FFD700" : "#5c5959"}
      onMouseEnter={() => onSelect(true)}
      onMouseLeave={() => onSelect(false)}
    />
  );
}

export default Star;
