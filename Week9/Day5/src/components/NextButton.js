import { FcNext } from 'react-icons/fc';
export default function NextButton(props) 
{
    const index = props.index;
    const setIndex = props.setIndex;
    const size = props.size;
    function clickHandler()
    {
        setIndex((index + 1) % size);
    }

    return (
        <button onClick={clickHandler}><FcNext/></button>
    )
}