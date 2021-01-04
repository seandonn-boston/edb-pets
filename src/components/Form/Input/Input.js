import "./Input.scss";

export const Input = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  handleClick,
}) => (
  <input
    className="Input"
    type={type}
    name={name}
    value={value}
    onChange={handleChange}
    placeholder={placeholder}
    onClick={handleClick}
  />
);
