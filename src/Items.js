import React, { useState } from 'react';

function Counter() {

  const [totalcount, setCount] = useState(0);
  const [totallikes,setlikes]=useState(0)

  return (
    <div>
      <p>totaldislikes:{totalcount} </p>
      <button onClick={() => setCount(totalcount + 1)}>Increment
      </button>
      <button onClick={() => totalcount>0?setCount(totalcount - 1):setCount(totallikes)}>Decrement
      </button>
      <p>totallikes:{totallikes} </p>
      <button onClick={() => setlikes(totallikes + 1)}>Increment
      </button>
      <button onClick={() => totallikes>0?setlikes(totallikes - 1):setCount(totallikes)}>Decrement
      </button>
    </div>
  );
}
export default Counter
