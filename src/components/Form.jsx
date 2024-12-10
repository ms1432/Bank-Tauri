import "./Form.css";
function Form({ children, customStyle }) {
  return <form style={customStyle}>{children}</form>;
}

export default Form;
