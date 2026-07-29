import { useEffect, useState } from "react";

function ChangeBgColor() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "black" : "white";
    document.body.style.color = isDark ? "white" : "black";
  }, [isDark]);

  return (
    <>
      <h5>Hello World!</h5>

      <button onClick={() => setIsDark(prev => !prev)}>
        Toggle Theme
      </button>
    </>
  );
}

export default ChangeBgColor;