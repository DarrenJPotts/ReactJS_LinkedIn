import { Create } from "@material-ui/icons";
import React from "react";

import InputOption from "../InputOption/InputOption";

import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="feed_inputOptions"></div>
      </div>
    </div>
  );
}

export default Feed;
