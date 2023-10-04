import Card from "./Card";


export default function Cards(props)
{
    const reviews = props.reviews;
    const index = props.index;
    return (
        <div>
            {reviews.filter((review, _index) => index === _index).map((review) => <Card key={review.id} review={review}></Card>)}
        </div>
    )
}