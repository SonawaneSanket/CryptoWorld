import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Coins from "./Components/Coins";
import Exchange from "./Components/Exchange";
import CoinDetails from "./Components/CoinDetails";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/exchange" element={<Exchange></Exchange>}></Route>
        <Route path="/coin/:id" element={<CoinDetails></CoinDetails>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
