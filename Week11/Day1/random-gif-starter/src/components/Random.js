import Spinner from "./Spinner";
import useGIF from "../hooks/useGIF";

export default function Random()
{

    const {gif, fetchData} = useGIF();
    function clickHandler()
    {
        fetchData();
    }

    return (
        <div className="flex flex-col items-center bg-green-400 rounded-lg border-2 border-black p-3">
            <h2>Random GIFs</h2>
            { gif==="" ? <Spinner /> : <img src={gif} width={300} className=" aspect-square"/>}
            <button onClick={clickHandler}>Generate</button>
        </div>
    );
}