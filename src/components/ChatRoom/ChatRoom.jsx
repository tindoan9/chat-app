import React from "react";
import { Row, Col } from "antd";
import { Sidebar } from "./components/Sidebar";
import { ChatWindow } from "./components/ChatWindow";

export const ChatRoom = () => {
  return (
    <Row>
      <Col span={4}>
        <Sidebar />
      </Col>
      <Col span={20}>
        <ChatWindow />
      </Col>
    </Row>
  );
};
