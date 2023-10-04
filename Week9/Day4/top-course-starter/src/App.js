import React, { useState } from "react";
import { filterData, apiUrl } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourse] = useState({});
  const [category, setCategory] = useState(filterData[0].title);
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
        setLoading(false);
    }
    fetchData();
  }, [])
  return (     
          <div className="w-[100%] min-h-screen flex flex-col">
              <div>
                <Navbar />
              </div>
              <div className=" bg-bgDark">
                <div>
                  <Filter filterData={filterData} category={category} setCategory={setCategory} /> 
                </div>
                <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap">
                  {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
                </div>
              </div>

          </div>  
    );
};

export default App;
