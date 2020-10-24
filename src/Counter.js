import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
                  <h6> Counter </h6>
      <p> current count: {count} </p>
      <button onClick={() => setCount(count + 1)}>increment the count</button>
     
        </div>
    );
};

export default Counter;
