import React from "react";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import EmailIcon from "@material-ui/icons/Email";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt="Outlook"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png"
        />
      </div>
      <div className="header__right">
        <EmailIcon />
      </div>
    </div>
  );
};

export default Header;
