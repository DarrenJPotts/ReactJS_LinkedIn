import { Avatar } from "@material-ui/core";
import React from "react";
import "./AddToFeed.css";

function AddToFeed({ name, title, description, photoURL }) {
  return (
    <div className="addToFeed">
      <Avatar className="sidebar_avatar" src={photoURL}>
        {name[0]}
      </Avatar>
      <div class="addToFeed_profile">
        <h2>{name}</h2>
        <p>
          {title} - {description}
        </p>

        <button className="addToFeed_button">
          <span className="addToFeed_buttonText">Follow +</span>
        </button>
      </div>
    </div>
  );
}

export default AddToFeed;
