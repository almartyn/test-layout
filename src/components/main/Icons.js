import "./Icons.css";
import Card from "../UI/Card";
import icon1 from "./img/icon1.svg";

const Icons = () => {
  return (
    <Card className="icons_container">
      <div className="icons_block">
        <h3 className="icons_block-title">Lorem Ipsum</h3>
        <div className="icons_block-items">
          <div className="items">
            <div className="item">
              <img src={icon1} alt="icon" />
            </div>
            <p className="item-paragraph">
              Praesent vitae orci ac urna finibus
            </p>
          </div>
          <div className="items">
            <div className="item">
              <img src={icon1} alt="icon" />
            </div>
            <p className="item-paragraph">Duis sed tortor hendrerit</p>
          </div>
          <div className="items">
            <div className="item">
              <img src={icon1} alt="icon" />
            </div>
            <p className="item-paragraph">Efficitur non vel urna</p>
          </div>
          <div className="items">
            <div className="item">
              <img src={icon1} alt="icon" />
            </div>
            <p className="item-paragraph">Bibendum sem sed, aliquam mi</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Icons;
