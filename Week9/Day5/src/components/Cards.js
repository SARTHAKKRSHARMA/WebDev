import Card from "./Card";


export default function Cards(props)
{
    const reviews = props.reviews;
    const index = props.index;
    return (
        <div>
            <Card key={reviews[index].id} review={reviews[index]}></Card>
        </div>
    )
}