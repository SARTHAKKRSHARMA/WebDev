import { useState, useEffect } from "react";
import axios from "axios";
import giphy from "../assets/images/giphy.gif"


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
// const tagURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${tag}&limit=100&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

export default function useGIF(tag)
{

    const [gif, setGif] = useState("");
    
    async function fetchData()
    {
        try
        {
            setGif("")
            if(tag)
            {
                const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${tag}&limit=100&offset=0&rating=g&lang=en&bundle=messaging_non_clips` 
                const {data} = await axios.get(url);
                if(data.data.length === 0) 
                {
                    throw new Error("Not Found");
                }
                const index = Math.floor(Math.random() * data.data.length);
                const imgURL = data.data[index]?.images?.original?.url;
                setGif(imgURL);
            }
            else
            {
                const url = randomURL;
                const {data} = await axios.get(url);
                const imgSrc = data?.data?.images?.downsized_large?.url;
                setGif(imgSrc);
            }
        }
        catch(e)
        {
            setGif(giphy);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {gif, fetchData};
}