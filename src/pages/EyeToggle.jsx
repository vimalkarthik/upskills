import React, { useState } from "react";
import view from "../assets/view.png";
import hide from "../assets/hide.png";

function EyeToggle() {
  const [open, setOpen] = useState(false);

  const toggleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="eyeContainer">
      <div className="eyeWrapper">
        <form>
          <div className="eyeinputWrapper">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Your Email Address..."
            />
          </div>

          <div className="eyeinputWrapper">
            <label>Password</label>

            <div className="passwordWrapper">
              <input
                type={open ? "text" : "password"}
                placeholder="Enter Your Password..."
                maxLength={8}
              />

              <span onClick={toggleClick} className="eyeIcon">
                <img
                  src={open ? hide : view}
                  alt={open ? "Hide Password" : "Show Password"}
                />
              </span>
            </div>
          </div>

          <button type="submit" className="eyeFormBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EyeToggle;