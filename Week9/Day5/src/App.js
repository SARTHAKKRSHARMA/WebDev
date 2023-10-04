import React from "react";
import Cards from "./components/Cards";
import reviews from "./data";
import NextButton from "./components/NextButton";
import PreviousButton from "./components/PreviousButton";
import SurpriseButton from "./components/SurpriseButton";
import {useState} from 'react';


const App = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-[100vw] min-h-[100vh] bg-slate-200 flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center w-11/12 max-w-[1200px]">
        <h1 className=" text-3xl font-bold">Our Testimonials</h1>
        <div className="w-[100px] h-[3px] bg-purple-600"></div>
      </div>
      <div className="w-11/12 max-w-[540px] p-10 bg-white shadow-sm rounded-sm relative flex flex-col items-center h-[400px] justify-between">
        <Cards reviews={reviews} index={index} />
        <div className="w-[50px] flex items-center justify-between mb-3">
          <PreviousButton index={index} setIndex={setIndex} size={reviews.length} />
          <NextButton index={index} setIndex={setIndex} size={reviews.length}/>
        </div>
        <div>
          <SurpriseButton setIndex={setIndex} size={reviews.length}/>
        </div>
      </div>
    </div>
  )
};

export default App;
