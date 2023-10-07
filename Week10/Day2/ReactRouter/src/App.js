import React from "react";
import {Routes, Route, Link, NavLink} from "react-router-dom";
import Home from  "./components/Home";
import Support from "./components/Support";
import About from "./components/About";
import Labs from "./components/Labs";
import NotFound from "./components/NotFound";
import MainHeader from "./components/MainHeader";


const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/support">Support</NavLink>
          <NavLink to="/labs">Labs</NavLink>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader />} >
          <Route index element={<Home />} />
          <Route path="/support" element={ <Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<NotFound />} />
        </Route> 
      </Routes>
    </div>
  )
};

export default App;
