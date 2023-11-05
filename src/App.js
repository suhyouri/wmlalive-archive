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

import Day230108 from "./component/Day230108";
import Day230221 from "./component/Day230221";
import Day230510 from "./component/Day230510";
import Day230520 from "./component/Day230520";
import Day230613 from "./component/Day230613";

import Day230625 from "./component/Day230625";
import Day230716 from "./component/Day230716";
import Day230802 from "./component/Day230802";
import Day230902 from "./component/Day230902";
import Day231015 from "./component/Day231015";
import Day231105 from "./component/Day231105";
import Day231106 from "./component/Day231106";

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

            <Route path="/230108" element={<Day230108 />} />
            <Route path="/230221" element={<Day230221 />} />
            <Route path="/230510" element={<Day230510 />} />
            <Route path="/230520" element={<Day230520 />} />
            <Route path="/230613" element={<Day230613 />} />
            <Route path="/230625" element={<Day230625 />} />
            <Route path="/230716" element={<Day230716 />} />
            <Route path="/230802" element={<Day230802 />} />
            <Route path="/230902" element={<Day230902 />} />
            <Route path="/231015" element={<Day231015 />} />
            <Route path="/231105" element={<Day231105 />} />
            <Route path="/231106" element={<Day231106 />} />
          </Routes>
          <footer>
            <a href="mailto:suhyouri@gmail.com" className="nav__link">
              © Suh Youri
            </a>
          </footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;