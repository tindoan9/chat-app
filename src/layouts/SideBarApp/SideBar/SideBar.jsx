import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import { options } from "./options";

export const SideBar = () => {
  return (
    <div className="container__sidebar">
      <div className="wrapper">
        <div className="wrapper__sidebar">
          <div className="wrapper__sidebar__avatar">
            <Avatar size="large" icon={<UserOutlined />} />
          </div>
          <div className="wrapper__sidebar__option">
            {options.map((item) => {
              return (
                <p key={item.pathName} className="option">
                  {item.icon}
                </p>
              );
            })}
          </div>
        </div>
        <div className="signout">
          <LogoutOutlined />
        </div>
      </div>
    </div>
  );
};
