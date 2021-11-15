import React from "react";
import { Avatar } from "@material-ui/core";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_Icon" />}
      {avatar && (
        <Avatar className="headerOption_Icon" src={user?.photoURL}>
          {user?.displayName[0]}
        </Avatar>
      )}
      <h3 className="headerOption_Title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
