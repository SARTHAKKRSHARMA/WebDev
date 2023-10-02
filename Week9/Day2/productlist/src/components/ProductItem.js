import ProductDate from "./ProductDate";
import Card from "./Card";
import "./ProductItem.css";

import  { useState } from 'react';


function ProductItem (props)
{
    const [title, setTitle] = useState(props.title);
    function clickHandler()
    {
        setTitle("popcorn");
        console.log("Button Clicked");
    }



    return (
        <Card className="product-item">
            <ProductDate date={props.date} />
            <div className="product-item_description">
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to Cart</button>
        </Card>
    );
}


export default ProductItem