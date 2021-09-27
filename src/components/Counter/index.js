import React, {useState} from 'react';

export const Counter=()=>{
    const [count, setCount] = useState(0);

    const updateCount =()=>{
        setCount((count)=> count+1);
        setTimeout(()=>{setCount((count)=> count+1)}, 2000)
    }
    return <div>
        <p>{count}</p>
        <button onClick={updateCount}>Click</button>
    </div>
}