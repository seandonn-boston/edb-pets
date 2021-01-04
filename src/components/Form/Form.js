import "./Form.scss";

export const Form = ({ handleSubmit, children }) => (
  <form className="Form" onSubmit={handleSubmit}>
    {children}
  </form>
);
