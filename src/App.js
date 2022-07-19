import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";


function App() {
  return (
      <div className="w3-light-grey">
          <div className="w3-content" style={{maxWidth: '1400px'}}>
              <Header/>
              <MainContent/>
          </div>
          <Footer/>
      </div>

  );
}

export default App;
