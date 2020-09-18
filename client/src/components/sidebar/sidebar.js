import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./sidebar.css";

import Message from "../message/message";
import User from "../user/user";

function Sidebar(props) {
  const [activeTab, setActiveTab] = useState("convos");

  function handleClick(e) {
    if (e.target.name !== activeTab) {
      setActiveTab(e.target.name);
    }
  }

  return (
    <div className="sidebar">
      <div className="sidebar-tabs">
        <button
          name="convos"
          onClick={handleClick}
          className={
            activeTab === "convos"
              ? "sidebar-tab sidebar-tab--active"
              : "sidebar-tab"
          }>
          All Converstaions
        </button>
        <button
          name="users"
          onClick={handleClick}
          className={
            activeTab === "users"
              ? "sidebar-tab sidebar-tab--active"
              : "sidebar-tab"
          }>
          All Users
        </button>
      </div>
      {activeTab === "convos" ? (
        <ul className="sidebar-list">
          <Message />
          <Message active />
        </ul>
      ) : (
        <ul className="sidebar-list">
          <User />
          <User active />
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
