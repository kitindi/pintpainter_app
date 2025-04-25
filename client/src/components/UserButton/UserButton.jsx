import React, { useState } from "react";
import "./UserButton.css";
const UserButton = () => {
  const [open, setOpen] = useState(false);
  // temp user
  const currentUser = true;
  return currentUser ? (
    <div className="userButton">
      <span className="avatarIcon">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#dc2626" viewBox="0 0 256 256">
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
        </svg>
      </span>
      <span className="arrowIcon" onClick={() => setOpen((prev) => !prev)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#6B7280" viewBox="0 0 256 256">
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </span>
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Setting</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <div>
      <a href="" className="loginLink">
        Login / Signup
      </a>
    </div>
  );
};

export default UserButton;
