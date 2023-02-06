import React from "react";
import { Row, Col } from "antd";
import { Sidebar } from "./components/SideBar/Sidebar";
import { ChatWindow } from "./components/ChatWindow/ChatWindow";

export const ChatRoom = () => {
  return (
    <Row>
      <Col flex="200px">
        <Sidebar />
      </Col>
      <Col flex="auto">
        <ChatWindow />
      </Col>
    </Row>
  );
};
