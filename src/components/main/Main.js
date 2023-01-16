import Card from "../UI/Card";
import "./Main.scss";
import img from "./img/article.png";
import Button from "../UI/Button";

const Main = () => {
  const scrollHandler = () => {};
  return (
    <Card className="main_wraper">
      <div className="main_wraper-container">
        <div className="main_title">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
        {/* <div className="main_text-and-img"> */}
          <div className="main_text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
              tortor orci. Vestibulum ornare faucibus dui, eu egestas augue
              aliquam sed. Suspendisse commodo consectetur ligula at commodo.
              Curabitur pretium turpis in ante consectetur, ac euismod ligula
              posuere. Nulla fermentum lorem vel libero pellentesque porttitor.
              Praesent libero ante, molestie quis sapien eu, mattis cursus orci.
              Quisque tellus nunc, consectetur faucibus ullamcorper in,
              imperdiet sit amet leo. Cras iaculis leo eu tempus volutpat. Nulla
              nec sapien condimentum, malesuada nunc nec, ultricies sem. <br />
              Phasellus tristique lacinia enim, quis iaculis purus rutrum ac.
              Cras non sapien vestibulum, semper ligula sit amet, venenatis
              urna. Etiam consequat turpis sit amet sapien viverra, fringilla
              feugiat turpis aliquam. Sed quis ultricies neque. Mauris ac
              aliquam mauris, sed mattis mi. Aliquam in posuere purus, at porta
              sapien. Donec quis orci gravida, finibus lectus a, bibendum ante.
              Nam bibendum malesuada luctus. Donec malesuada facilisis aliquet.
              Proin tincidunt enim sed sapien euismod rutrum. Proin suscipit
              mattis nisl nec pulvinar.
            </p>
          </div>
          <div className="iconsImg">
            <img src={img} alt="Acticle" />
          </div>
        {/* </div> */}
        <Button onClick={scrollHandler} type="submit">
          Lorem ipsum dolor sit amet
        </Button>
      </div>
    </Card>
  );
};
export default Main;
