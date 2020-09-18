import React from "react";
import "./dashboard.css";

import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Conversation from "../../components/conversation/conversation";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        <Topbar />
        <Sidebar />
        <Conversation />
      </div>
    </div>
  );
}

export default Dashboard;
