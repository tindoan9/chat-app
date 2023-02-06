import { Avatar, Button } from "antd";
import React from "react";
import { auth } from "../../../../../firebase/config";

export const Sidebar = () => {
  return (
    <>
      <div className="avatar">
        <Avatar src="" />
      </div>
      <div className="btn">
        <Button onClick={() => auth.signOut()}>Logout</Button>
      </div>
    </>
  );
};
