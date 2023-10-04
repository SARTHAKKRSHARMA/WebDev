export default function SurpriseButton(props) 
{
    const setIndex = props.setIndex;
    const size = props.size;
    
    function clickHandler()
    {
        setIndex(Math.floor(Math.random() * size))
    }

    return (
        <button onClick={clickHandler} className=" bg-purple-600 p-2 text-white rounded-md">Surprise Me</button>
    )
}