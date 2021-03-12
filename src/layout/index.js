import { Layout } from "antd";
import Topbar from "./header";
import Sidebar from "./sidebar";
import AppContent from "./content";
import AppFooter from "./footer";

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Topbar />
      <Layout>
        <Sidebar />
        <Layout>
          <AppContent children={children} />
        </Layout>
      </Layout>
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;
