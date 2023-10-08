import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import giphy from "../assets/images/giphy.gif";
import useGIF from "../hooks/useGIF";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag()
{
    const [tag, setTag] = useState("cute cats");
    const {gif, fetchData} = useGIF(tag);

    function changeHandler(event)
    {
        setTag(event.target.value);
    }

    function clickHandler()
    {
        if(tag)
        {
            fetchData();
        }
    }

    return (
        <div className="flex flex-col items-center bg-blue-600 rounded-lg border-2 border-black p-3">
            <h2>Tag GIFs</h2>
            {gif === "" ? <Spinner/> : <img src={gif} width={300} className=" aspect-square"/> } 
            <label htmlFor="tag">Tag</label>
            <input type="text" name="tag" id="tag" placeholder="Enter tag" value={tag} onChange={changeHandler} />
            <button onClick={clickHandler}>Generate</button>
        </div>
    );
}