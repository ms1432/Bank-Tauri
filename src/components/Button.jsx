import { useState } from "react";

function Button(props) {
  const [hovered, setHovered] = useState(false);

  const style = {
    minWidth: "150px",
    minHeight: "40px",
    backgroundColor: props.color || "#007BFF",
    color: props.textColor || "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    width: props.width || "auto",
    boxShadow: hovered
      ? "0 6px 8px rgba(0, 0, 0, 0.2)"
      : "0 4px 6px rgba(0, 0, 0, 0.1)",
    transform: hovered ? "scale(1.05)" : "scale(1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  return (
    <button
      style={style}
      onClick={props.handleOnClick}
      type={props.type}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {props.text}
    </button>
  );
}

export default Button;
