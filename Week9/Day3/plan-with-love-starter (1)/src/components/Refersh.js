import "./Refresh.css";
import data from "../data";

function Refresh(props)
{
    return (
        <div className="refresh">
            <h2>No Tours Left</h2>
            <button className="btn-white" onClick={() => {props.setTours(data)}}>Refresh Content</button>
        </div>
    )
}

export default Refresh;