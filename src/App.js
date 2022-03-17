import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Invalid from "./components/InvalidPage/Invalid";



function App() {
  return (
    <div className="App">
    
      <Router>
      <Header />
        <Routes>
         <Route exact path="/" element={<Home />} />
         <Route exact path="/checkout" element={<Checkout />}/>
         <Route exact path="/*" element={<Invalid />}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
