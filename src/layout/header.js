import { Layout, Menu, Dropdown, Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";
const { Header } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#">
        Profile
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#">
        Settings
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#">
        Logout
      </a>
    </Menu.Item>
  </Menu>
);

const Topbar = () => {
  return (
    <Header className="header">
      <div className="logo" style={{ float: "left", color: "#fff" }}>
        LOGO
      </div>
      <div className="dropdown" style={{ float: "right" }}>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <Avatar size={40}>J</Avatar> John Doe <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Topbar;
