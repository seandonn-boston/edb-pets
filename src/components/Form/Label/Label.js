import "./Label.scss";

export const Label = ({ htmlFor, title }) => (
  <label className="Label" htmlFor={htmlFor}>
    {title}
  </label>
);
