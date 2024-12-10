import "./Input.css";

function Input({ type, placeholder, value, onChange, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="input"
    />
  );
}

export default Input;
