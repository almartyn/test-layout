import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TitleArrow from "./components/header/TitleArrow";
import Icons from "./components/main/Icons";
import Main from "./components/main/Main";
import Form from "./components/UI/Form";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Header/>
      <TitleArrow></TitleArrow>
      <Form></Form>
      <Main></Main>
      <Icons></Icons>
      <Footer/>
    </div>
  );
};

export default App;
