import { useState } from "react";

function ChangeCount() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click
      </button>

      <p>Count: {count}</p>
    </> 
  );
}

export default ChangeCount;