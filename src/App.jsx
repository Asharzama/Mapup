import React from "react";
import { Layout } from "antd";
import AppSidebar from "./components/Sidebar";
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";
import MapContainer from "./MapContainer";

function App() {
  return (
    <Layout>
      <AppSidebar />
      <Layout>
        <AppHeader />
        <MapContainer />
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default App;
