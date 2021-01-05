import "./Input.scss";

export const Input = ({ type, name, value, handleChange, placeholder }) => (
  <input
    className="Input"
    type={type}
    name={name}
    value={value}
    onChange={handleChange}
    placeholder={placeholder}
  />
);
