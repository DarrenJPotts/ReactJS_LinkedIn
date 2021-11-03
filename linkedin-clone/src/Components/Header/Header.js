import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import "./Header.css";
function Header(props) {
  return (
    <div>
      <div class="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />

        <div class="header_search">
          <SearchIcon />
          <input type="text" name="" id="" />
        </div>
      </div>

      <div class="header_right"></div>
    </div>
  );
}
export default Header;
