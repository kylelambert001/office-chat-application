import React from "react";
import "./user.css";

import Avatar from "../avatar/avatar";

function User({ active, user }) {
  return (
    <button type="button" className={active ? "user user--active" : "user"}>
      <div className="user-avatar">
        <Avatar size="42px" color="coral" user="Tommy" />
      </div>
      <div className="user-info">
        <span className="user-heading">Kyle Lambert</span>
      </div>
    </button>
  );
}

export default User;
