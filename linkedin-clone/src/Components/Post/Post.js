import { Avatar } from "@material-ui/core";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import React, { forwardRef } from "react";
import InputOption from "../InputOption/InputOption";
import "./Post.css";

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
  return (
    <div className="post">
      <div class="post_header">
        <Avatar src={photoURL}>{name[0]}</Avatar>
        <div class="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div class="post_body">
        <p>{message}</p>
      </div>

      <div class="post_buttons">
        <InputOption title="Like" Icon={ThumbUpOutlined} color="gray" />
        <InputOption title="Comment" Icon={ChatOutlined} color="gray" />
        <InputOption title="Share" Icon={ShareOutlined} color="gray" />
        <InputOption title="Send" Icon={SendOutlined} color="gray" />
      </div>
    </div>
  );
});

export default Post;
