import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ClickMe from "./components/ClickMe";
import CountAppendOne from "./components/CountAppendOne";
import CountAppendTree from "./components/CountAppendTree";
import Title from "./components/Title";


function App() {
  return (
      <div className="content">
          <ClickMe/>
          <CountAppendOne/>
          <CountAppendTree/>
          <Title text="MY BLOG" color="red" size="20px"/>
          <Title text="NOT MY BLOG" color="blue" size="24px"/>
          <Title text="SOMESING BLOG" color="green" size="12px"/>
      </div>

  );
}

export default App;
