import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    comments : "",
    isVisible : true,
    mode : "Online-Mode",
    favCar : ""
  });

  // console.log(formData);

  function submitHandler(event)
  {
    event.preventDefault();
    const newObj = JSON.stringify(formData);
    console.log(newObj);
  }

  function changeHandler(event)
  {
    const {name, value, checked, type} = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name] : (type === "checkbox") ? checked : value,
      }
    });
  }

  return (
    <div className="flex justify-center items-center mt-5">
      <form className="flex flex-col justify-center items-center gap-3" onSubmit={submitHandler}>
        <input onChange={changeHandler} name="firstName" type="text" placeholder="First Name" className=" outline p-3 rounded-md" value={formData.firstName}></input>
        <input onChange={changeHandler} name="lastName" type="text" placeholder="Last Name" className=" outline p-3 rounded-md" value={formData.lastName}></input>
        <input onChange={changeHandler} name="email" type="email" placeholder="Email" className=" outline p-3 rounded-md" value={formData.email}></input>
        <textarea placeholder="Enter your comments" onChange={changeHandler} name="comments" className="w-[200px] h-[100px  ] outline"/>
        <input type="checkbox" id="isVisible" onChange={changeHandler} name="isVisible" checked={formData.isVisible}></input>
        <label htmlFor="isVisible">Am I visible ?</label>

        <fieldset>
          <legend>Mode</legend>
          <input type="radio" onChange={changeHandler} name="mode" value="Online-Mode" id="Online-Mode" checked={formData.mode === "Online-Mode"} />
          <label htmlFor="Online-Mode">Online Mode</label>
          <input type="radio" onChange={changeHandler} name="mode" value="Offline-Mode" id="Offline-Mode" checked={formData.mode === "Offline-Mode"} />
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>

        <select onChange={changeHandler} name="favCar" id="favCar" value={formData.favCar}>
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="thar">Thar</option>
          <option value="legender">Legender</option>
          <option value="defender">Defender</option>
        </select>
        <label htmlFor="favCar">Favorite Car</label>
        <button type="submit">Submit</button>

      </form>

    </div>

  )
};

export default App;
