function ResetButton(props)
{
    function resetValue()
    {
        props.changeVal(0);
    }
    return (
        <button onClick={resetValue}>Reset</button>
    )
}

export default ResetButton;