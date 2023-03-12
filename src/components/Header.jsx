//creating a Header constant from the Layout component
import { Layout, Button } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import "./styles.css";

const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header className="header">
      <div className="logo">
        Logo
        <div className="header-buttons">
          <Button icon={<UserOutlined />} type="text">
            Profile
          </Button>
          <Button icon={<LogoutOutlined />} type="text">
            Logout
          </Button>
        </div>
      </div>
    </Header>
  );
}
