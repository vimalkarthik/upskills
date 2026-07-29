import { useEffect, useState } from "react";

function Toggle() {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = check ? "black" : "white";
    document.body.style.color = check ? "white" : "black";
  }, [check]);

  return (
    <div className="container">
        <h1>{`${check? "Dark Mode" : "Light Mode"}`}</h1>
      <div className={`toggleWrapper ${check ? "active" : ""}`}>
        <input
          type="checkbox"
          className="toggleDefault"
          checked={check}
          onChange={() => setCheck(prev => !prev)}
        />
      </div>
    </div>
  );
}

export default Toggle;
