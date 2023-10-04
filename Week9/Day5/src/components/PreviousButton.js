import { FcPrevious } from 'react-icons/fc';

export default function PreviousButton(props) 
{
    const index = props.index;
    const setIndex = props.setIndex;
    const size = props.size;
    function clickHandler()
    {
        if(index == 0) setIndex(size - 1);
        else setIndex(index - 1);
    }
    return (
        <button onClick={clickHandler}><FcPrevious /></button>
    )   
}