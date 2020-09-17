import React from "react";
import ConversationsList from "./ConversationsList";

import {
  GridWrapper,
  Topbar,
  Side,
  Message,
  Heading,
  SideTopbar,
  MessageTopbar,
} from "./styled";

function Dashboard(props) {
  return (
    <GridWrapper>
      <Topbar>
        <Heading>Conversations</Heading>
      </Topbar>
      <Side>
        <SideTopbar>
          <Heading>All Conversations</Heading>
        </SideTopbar>
        <ConversationsList />
      </Side>
      <Message>
        <MessageTopbar>
          <Heading>Finance Team</Heading>
        </MessageTopbar>
      </Message>
    </GridWrapper>
  );
}

export default Dashboard;
