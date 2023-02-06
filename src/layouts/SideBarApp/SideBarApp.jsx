import React from "react";
import { SideBar } from "./SideBar/SideBar";

export const SideBarApp = ({ children }) => {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
};
