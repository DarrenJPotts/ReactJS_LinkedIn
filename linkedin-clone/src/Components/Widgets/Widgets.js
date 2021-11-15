import React from "react";
import "./Widgets.css";
import { FiberManualRecord, Info } from "@material-ui/icons";
import AddToFeed from "../AddToFeed/AddToFeed";

function Widgets() {
  const newsArticle = (heading, subTitile) => (
    <div className="widgets_article">
      <div class="widgets_articleLeft">
        <FiberManualRecord />
      </div>
      <div class="widgets_articleRight">
        <h3>{heading}</h3>
        <p>{subTitile}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_top">
        <div class="widgets_header">
          <h2>LinkedIn News</h2>
          <Info />
        </div>
        {newsArticle(
          "ReactJS",
          "In news today with ReactJs this is a test article"
        )}
        {newsArticle(
          "Angular",
          "In news today with Angular this is a test article"
        )}
      </div>

      <div className="widgets_bottom">
        <h4>Add To Your Feed</h4>

        <AddToFeed
          name="Company 1"
          title="Company"
          description="Computer Games"
        />
        <AddToFeed
          photoURL="https://picsum.photos/200/300"
          name="Company 2"
          title="Company"
          description="IT"
        />
        <AddToFeed
          photoURL="https://picsum.photos/seed/600/300"
          name="Company 3"
          title="Company"
          description="Health Advisor"
        />
      </div>
    </div>
  );
}

export default Widgets;
