import { useState } from "react";
import "./Card.css"

function Card(props)
{
    const {id, name, info, image, price} = props.tour;
    const removeTour = props.removeTour;
    function readMoreHandler()
    {
        if(readMore)
        {
            setDescription(`${info.substring(0, 200)}....`);
        }
        else
        {
            setDescription(`${info.substring(0)}`);
        }
        setReadMore(!readMore);        
    }

    const [description, setDescription] = useState(`${info.substring(0, 200)}....`);
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>   
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>{readMore ? `Show Less` : `Read More`}</span>
                </div>
            </div>
            <button className="btn-red" onClick={() => {removeTour(id)}}>Not Interested</button>
        </div>
    )
}

export default Card;