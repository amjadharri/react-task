import { Layout, Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
const { Content } = Layout;

const AppContent = ({ children }) => {
  const location = useLocation();
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
          {location.pathname.split("/")[1]}
        </Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default AppContent;
