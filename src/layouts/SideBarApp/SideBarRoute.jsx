import React from "react";
import { useLocation } from "react-router-dom";
import { SideBarApp } from "./SideBarApp";
import { ChatRoom } from "../../feature/page/ChatRoom/ChatRoom";

export const SideBarRoute = () => {
  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case "/chatroom":
        return <ChatRoom />;
      default:
        return <ChatRoom />;
    }
  };
  return (
    <>
      <SideBarApp>{renderContent()}</SideBarApp>
    </>
  );
};
