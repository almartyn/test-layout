import "./SubmitButton.css";

const SubmitButton = (props) => {
   return(
      <button className="submitButton" type={props.type}>{props.children}</button>
   );
}
export default SubmitButton;