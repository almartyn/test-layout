import Card from "../UI/Card";
import "./Header.scss";

const Header = (props) => {
  return (
    <Card className="background">
      <div className="header-container">
        <div className="title-text">
          <h2 className="title-h2">Morbi eu tortor orci</h2>
          <h1 className="title-h1">
            Lorem ipsum <br />
            dolor sit amet
          </h1>
        </div>
      </div>
    </Card>
  );
};
export default Header;
