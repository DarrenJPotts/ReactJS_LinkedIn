import React from "react";
import {
  BusinessCenter,
  Chat,
  Home,
  Search,
  SupervisorAccount,
  Notifications,
} from "@material-ui/icons";

import "./Header.css";
import HeaderOption from "../HeaderOption/HeaderOption";

function Header(props) {
  return (
    <div className="header">
      <div class="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />

        <div class="header_search">
          <Search />
          <input type="text" name="" id="" />
        </div>
      </div>

      <div class="header_right">
        <HeaderOption title="Home" Icon={Home} />
        <HeaderOption title="My Network" Icon={SupervisorAccount} />
        <HeaderOption title="Jobs" Icon={BusinessCenter} />
        <HeaderOption title="Messaging" Icon={Chat} />
        <HeaderOption title="Notifications" Icon={Notifications} />
        <HeaderOption
          title="Me"
          avatar="https://picsum.photos/200/200?random=2"
        />
      </div>
    </div>
  );
}
export default Header;
