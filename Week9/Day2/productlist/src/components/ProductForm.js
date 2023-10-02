import { useState } from "react";
import "./ProductForm.css"


function ProductForm(props)
{
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    function titleChangeHandler(event)
    {
        setTitle(event.target.value);
    }

    function dateChangeHandler(event)
    {
        setDate(event.target.value);
    }

    function submitHandler(event)
    {
        event.preventDefault();
        const productData = {
            title : title,
            date  : date
        };
        
        props.onSaveProduct(productData);

        setTitle("");
        setDate(``);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-product-title">
                <label>Title</label>
                <input onChange={titleChangeHandler} type="text" value={title}></input>
            </div>
            <div className="new-product-date">
                <label>Date</label>
                <input onChange={dateChangeHandler} type="date" min='2023-01-01' max='2023-12-12' value={date}></input>
            </div>
            <div>
                <button type="submit" className="new-product-btn">Add Product</button>            
            </div>
        </form>
    )
}


export default ProductForm;