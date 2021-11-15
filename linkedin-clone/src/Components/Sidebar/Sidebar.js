import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://picsum.photos/seed/picsum/600/300" alt="" />
        <Avatar className="sidebar_avatar" src={user.photoURL}>
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who View You</p>
          <p className="sidebar_statNumber">200</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on Posts</p>
          <p className="sidebar_statNumber">200</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactJS")}
        {recentItem("programming")}
        {recentItem("fullStack")}
        {recentItem("webDevelopment")}
        {recentItem("angular")}
        <h3>Groups</h3>
        <h3>Events</h3>
        <h3>Followed Hashtags</h3>
        {recentItem("coding")}
        {recentItem("signalR")}
        {recentItem("LinkedIn")}
        {recentItem("technology")}
        {recentItem("3dArt")}
        {recentItem("Cgi")}
        {recentItem("Environmentalist")}
        {recentItem("Testing")}
      </div>
    </div>
  );
}

export default Sidebar;
