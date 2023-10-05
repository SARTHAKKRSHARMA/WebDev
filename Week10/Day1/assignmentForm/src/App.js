import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({firstName : "", lastName : "", email : "", country : "india", address : "", state : "", zip : "", comments : false, candidates : false, offers : false, notification : ""});

  function changeHandler(event)
  {
    const {name, value, type, checked} = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name] : type=="checkbox" ? checked : value,
      }
    })
  }

  function submitHandler(event)
  {
    event.preventDefault();
    const apiData = JSON.stringify(formData);
    console.log(apiData);
  }

  return (
    <div className="w-[100vw] min-h-[100vh] mt-5">
      <form className="w-[55%] mx-auto p-5" onSubmit={submitHandler}>
        
        <div className="my-2 flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input onChange={changeHandler} type="text" name="firstName" id="firstName" placeholder="Pranay" className="outline outline-1 outline-blue-400 rounded-md p-[2px]" value={formData.firstName}></input>
        </div>

        <div className="my-2 flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input onChange={changeHandler} type="text" name="lastName" id="lastName" placeholder="Gupta" className="outline outline-1 outline-blue-400 rounded-md p-[2px]" value={formData.lastName}></input>
        </div>
        
        <div className="my-2 flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input onChange={changeHandler} type="email" name="email" id="email" placeholder="pgupta@duck.com" className="outline outline-1 outline-blue-400 rounded-md p-[2px]" value={formData.email}></input>
        </div>

        <div className="my-2 flex flex-col">
          <label htmlFor="country">Country</label>
          <select id="county" onChange={changeHandler} name="country" value={formData.country} className="outline outline-1 outline-blue-400 rounded-md p-[2px]">
            <option value="india">India</option>
            <option value="mexico">Mexico</option>
            <option value="usa">USA</option>
            <option value="russia">Russia</option>
          </select>
        </div>  

        <div className="my-2 flex flex-col">
          <label htmlFor="address">Street Address</label>
          <input onChange={changeHandler} type="text" name="address" id="address" placeholder="1234 Main Street" className="outline outline-1 outline-blue-400 rounded-md p-[2px]" value={formData.address}></input>
        </div>

        <div className="my-2 flex flex-col">
          <label htmlFor="state">State/Province</label>
          <input onChange={changeHandler} type="text" name="state" id="state" placeholder="West Bengal" className="outline outline-1 outline-blue-400 rounded-md p-[2px]" value={formData.state}></input>
        </div>        

        <div className="my-2 flex flex-col">
          <label htmlFor="zip">ZIP/Postal Code</label>
          <input onChange={changeHandler} type="text" name="zip" id="zip" placeholder="713301" className="outline outline-1 outline-blue-400 rounded-md p-[2px]" value={formData.zip}></input>
        </div>  

        <div className="my-2 flex flex-col gap-2">
          <p>By Email</p>
          
          <div className="flex items-baseline gap-4">
            <input onChange={changeHandler} type="checkbox" name="comments" id="comments" value={formData.comments}/>
            <div>
              <p className=" font-bold">Comments</p>
              <p className=" opacity-80">Get notified when someones post a comment on a posting</p>
            </div>
          </div>

          <div className="flex items-baseline gap-4">
            <input onChange={changeHandler} type="checkbox" name="candidates" id="candidates" value={formData.candidates}/>
            <div>
              <p className=" font-bold">Candidates</p>
              <p className=" opacity-80">Get notified when a candidate applies for a job</p>
            </div>
          </div>

          <div className="flex items-baseline gap-4">
            <input onChange={changeHandler} type="checkbox" name="offers" id="offers" value={formData.offers}/>
            <div>
              <p className=" font-bold">Offers</p>
              <p className=" opacity-80">Get notified when a candidate accepts or rejects an offer</p>
            </div>
          </div>
        </div>


        <div className="my-2 flex flex-col gap-2">
          <div>
            <p>Push Notification</p>
            <p>They are delivered via SMS to your mobile phone</p>
          </div>
          
          <div className="flex items-baseline gap-4">
            <input onChange={changeHandler} type="radio" name="notification" id="Everything" value="Everything" checked={formData.notification === "Everything"}/>
            <p className=" font-bold">Everything</p>
          </div>

          <div className="flex items-baseline gap-4">
            <input onChange={changeHandler} type="radio" name="notification" id="Same as Email" value="Same as Email" checked={formData.notification === "Same as Email"} />
            <p className=" font-bold">Same as email</p>            
          </div>

          <div className="flex items-baseline gap-4">
            <input onChange={changeHandler} type="radio" name="notification" id="No Push Notification" value="No Push Notification" checked={formData.notification === "No Push Notification"} />
            <p className=" font-bold">No Push Notification</p>
          </div>
        </div>

        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
};

export default App;
