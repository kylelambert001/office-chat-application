import React from "react";
import "./message.css";

import Avatar from "../avatar/avatar";
import { truncateStr } from "../../helpers";

function Message({ message, active }) {
  return (
    <button
      type="button"
      className={active ? "message message--active" : "message"}>
      <div className="message-avatar">
        <Avatar size="42px" color="teal" user="Kyle" />
      </div>
      <div className="message-info">
        <span className="message-heading">Finance Team</span>
        <span className="message-preview">{truncateStr(string, 13)}</span>
      </div>
    </button>
  );
}

export default Message;

const string =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloremque obcaecati nostrum error! Voluptatibus nihil odit officiis, magni velit adipisci consectetur repellendus fugit ut sapiente, quaerat repudiandae nemo magnam exercitationem?Vero commodi cupiditate nesciunt quia repellendus, tenetur cumque obcaecati dolore libero rem perspiciatis sed itaque quidem nemo cum ipsum laudantium dignissimos excepturi amet? Nihil et, architecto assumenda voluptatibus ducimus omnis.";
