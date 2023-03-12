// This code renders a sidebar component using the Ant Design library. It contains a logo and three menu items, each with an icon. The sidebar is collapsible and can be toggled using the toggle function.
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Sider } = Layout;

export default function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggle}
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="logo">Logo</div>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
          United States
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          India
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          United Kingdom
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
