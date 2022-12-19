import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import About from './component/About';
import Home from './component/Home';
import EmptyPage from './component/EmptyPage'
import Day0819 from './component/Day0819';
import Day0803 from './component/Day0803';
import Day0910 from './component/Day0910';
import Day0912 from './component/Day0912';
import Day0923 from './component/Day0923';
import Day55 from './component/Day55';
import Day0928 from './component/Day0928'
import Day0930 from './component/Day0930';
import Day1006 from "./component/Day1006";
import Day1009 from "./component/Day1009";
import Day1025 from "./component/Day1025";
import Day1028 from "./component/Day1028";
import Day1102 from "./component/Day1102";
import Day1103 from './component/Day1103';
import Header from './component/Header';


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route path="/" element={<App />}></Route> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" component={About} />
            <Route path="*" element={<EmptyPage />} />
            <Route path="/0819" element={<Day0819 />} />
            <Route path="/0803" element={<Day0803 />} />
            <Route path="/0912" element={<Day0912 />} />
            <Route path="/0910" element={<Day0910 />} />
            <Route path="/0923" element={<Day0923 />} />
            <Route path="/55" element={<Day55 />} />
            <Route path="/0928" element={<Day0928 />} />
            <Route path="/0930" element={<Day0930 />} />
            <Route path="/0930" element={<Day1006 />} />
            <Route path="/1006" element={<Day1006 />} />
            <Route path="/1009" element={<Day1009 />} />
            <Route path="/1025" element={<Day1025 />} />
            <Route path="/1028" element={<Day1028 />} />
            <Route path="/1102" element={<Day1102 />} />
            <Route path="/1103" element={<Day1103 />} />
          </Routes>
          <footer>
            <a href="mailto:suhyouri@gmail.com" className="nav__link">
              © Suh Youri 2022
            </a>
          </footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;