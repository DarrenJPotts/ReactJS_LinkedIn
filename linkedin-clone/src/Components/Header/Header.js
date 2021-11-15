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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/userSlice";
import { auth } from "../../firebase/firebase";

function Header(props) {
  const dispatch = useDispatch();

  const LogOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

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
        <HeaderOption title="Me" avatar={true} onClick={LogOutOfApp} />
      </div>
    </div>
  );
}
export default Header;
