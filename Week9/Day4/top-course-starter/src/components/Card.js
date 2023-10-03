import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import { useState } from 'react';
export default function Card(props)
{
    const [clicked, changeClicked] = useState(false);
    
    function clickHandler()
    {
        changeClicked(!clicked);
    }

    return (
        <div>
            <div>
                <img src={props.course.image.url} alt={props.course.image.alt}></img>
                <div>
                    <button onClick={clickHandler}>
                        {clicked ? <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize={"1.75rem"}/>} 
                    </button>
                </div>
            </div>
            <div>
                <p>{props.course.title}</p>
                <p>{`${props.course.description.substring(120)}....`}</p>

            </div>
        </div>

    )
}