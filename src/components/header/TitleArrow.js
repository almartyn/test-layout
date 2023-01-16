import Card from "../UI/Card";
import "./TitleArrow.scss";
import img from "./img/arrow.svg";

const TitleArrow = () => {
  return (
    <Card className="arrow_wraper">
      <div className="arrow_wraper-container">
        <div className="arrow_container">
          <h2 className="arrow_h2">Lorem ipsum dolor, consectetur elit</h2>
          <img className="arrow_img" src={img} alt="arrow"/>
        </div>
      </div>
    </Card>
  );
};
export default TitleArrow;
