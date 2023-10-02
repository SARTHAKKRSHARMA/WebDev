import { useState } from 'react';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import ResetButton from './ResetButton';

function Main()
{
    const [counter, setcounter] = useState(0)


    return(
        <div>
            <h1>Counter</h1>
            <div>
                <DecrementButton currVal={counter} changeVal={setcounter}/>
                <p>{counter}</p>
                <IncrementButton currVal={counter} changeVal={setcounter}/>
            </div>
            <ResetButton changeVal={setcounter}></ResetButton>
        </div>
    )
}

export default Main;