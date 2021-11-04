import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_has">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://picsum.photos/seed/picsum/600/300" alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>Darren Potts</h2>
        <h4>potts.darren@gmail.com</h4>
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
      </div>
    </div>
  );
}

export default Sidebar;
