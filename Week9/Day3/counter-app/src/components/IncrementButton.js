function IncrementButton(props)
{
    function incrementValue()
    {
        props.changeVal(props.currVal + 1);
    }

    return (
        <button onClick={incrementValue}>+</button>
    )
}

export default IncrementButton;