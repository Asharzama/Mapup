import React from 'react';
import { Layout } from 'antd';
import Map from './Map';

const { Content } = Layout;

function MapContainer() {
  return (
    <Layout style={{ height: '100vh'}}>
      <Content style={{ height: '100%'}}>
        <Map />
      </Content>
    </Layout>
  );
}

export default MapContainer;
