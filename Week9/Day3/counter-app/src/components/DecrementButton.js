function DecrementButton(props)
{
    function decrementValue()
    {
        props.changeVal(props.currVal - 1);
    }
    return (
        <button onClick={decrementValue}>-</button>
    )
}

export default DecrementButton;