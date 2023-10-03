import React, { useState } from "react";
import { filterData, apiUrl } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useEffect } from "react";
import { toast } from "react-toastify";

const App = () => {
  const newObj = {};
  const [courses, setCourse] = useState(newObj);
  useEffect( () => {
    const fetchData = async () => 
    {
        try
        {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setCourse(data.data);
        }
        catch(e)
        {
          toast.error("Something went wrong");
        }
    }
    fetchData();
  }, [])
  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
    </div>
  );
};

export default App;
