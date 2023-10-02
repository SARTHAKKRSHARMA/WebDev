import ProductItem from "./ProductItem";
import Card from "./Card";
import "./Products.css"

function Products(props)
{
    return(
        <Card className="products">
            <ProductItem 
                title={props.items[0].itemName}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />

            <ProductItem 
                title={props.items[1].itemName}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />

            <ProductItem 
                title={props.items[2].itemName}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />

            <ProductItem 
                title={props.items[3].itemName}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
        </Card>
    )
}

export default Products;