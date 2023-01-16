import Button from "../UI/Button";
import Card from "../UI/Card";
import "./Footer.scss";
import img from "./img/Button-Payments.jpg"


const Footer = () => {
   return (
      <Card>
         <div className="footer-wraper">
         <Button type="submit">Lorem ipsum dolor sit amet</Button>
         <img className="payments" src={img} alt="Button Payments"/>
         </div>
      </Card>
   );
}

export default Footer;