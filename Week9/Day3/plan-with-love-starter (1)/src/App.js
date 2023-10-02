import React from "react";
import Tours from "./components/Tours";
import { useState } from "react";
import data from "./data";
import Refresh from "./components/Refersh";
import "./App.css";

const App = () => {
  const [tours, setTours] = useState(data);
  function removeTour(id)
  {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  return (
    <div className="App">  
      {tours.length == 0 ? <Refresh setTours={setTours} /> : <Tours tours={tours} removeTour={removeTour}></Tours>}
    </div>
  )
};

export default App;
