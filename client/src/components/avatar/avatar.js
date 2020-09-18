import React from "react";
import "./avatar.css";

import { getUserInitial } from "../../helpers";

function Avatar({ size, color, user }) {
  const avatar = {
    height: size,
    width: size,
  };

  const placeholder = {
    backgroundColor: color,
  };

  return (
    <div className="avatar" style={avatar}>
      <span className="avatar-placeholder" style={placeholder}>
        {getUserInitial(user)}
      </span>
    </div>
  );
}

export default Avatar;
