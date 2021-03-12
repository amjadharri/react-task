import { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import routes from "../router/routes";
const { Sider } = Layout;

const Sidebar = () => {
  const { pathname } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([pathname]);

  const handleSelect = ({ selectedKeys }) => {
    setSelectedKeys(selectedKeys);
  };

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={selectedKeys}
        onSelect={handleSelect}
        style={{ height: "100%", borderRight: 0 }}
      >
        {routes.map((route) => (
          <Menu.Item key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
