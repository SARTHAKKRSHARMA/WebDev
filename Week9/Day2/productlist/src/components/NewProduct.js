import "./NewProduct.css";
import ProductForm from "./ProductForm";


function NewProduct(props)
{
    function saveProduct(product)
    {
        console.log("I'm inside New Product");
        console.log(product);
        
        // Calling Parent Function
        props.pranay(product);
    }
    return (
        <div className="new-product">
            <ProductForm onSaveProduct={saveProduct} />
        </div>
    );
}

export default NewProduct;