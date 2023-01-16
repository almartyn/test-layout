import "./Form.scss";
import SubmitButton from "./SubmitButton";
import img from "./img/payment-methods-grey.png";

const Form = (props) => {
 
  return (
    <div id="scrollTo" className="form_wraper">
      <h2 className="form_title"> Lorem ipsum </h2>
      <form className="form">
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" placeholder="e.g. John" />
        <label htmlFor="secondName">Second Name</label>
        <input id="secondName" type="text" placeholder="e.g. Lander" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="e.g. name@gmail.com" />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input id="phoneNumber" type="text" placeholder="+639145789873" />
        <SubmitButton type="submit">submit</SubmitButton>
        <input className="castom-checkbox" id="checkbox" type="checkbox" />
        <label htmlFor="checkbox">
          I agree to the Privacy Policy, Terms & <br /> Conditions and to
          receive marketing material
        </label>
      </form>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu tortor
        orci.
      </p>
      <div className="container-payment-methods">
        <img src={img} alt="payment methods" />
      </div>
    </div>
  );
};

export default Form;
