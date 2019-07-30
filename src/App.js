import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar';

import {Layout, Menu, Breadcrumb} from 'antd';
import MapBranch from './components/MapBranch';
const {Header, Content, Footer} = Layout;

function App() {
  return (
    <div>
         <Layout className="layout">
        <HeaderBar/>
        <Content style={{
          padding: '0 50px'
        }}>
          <div
            style={{
            background: '#fff',
            padding: 24,
            minHeight: 280
          }}>
            <MapBranch />

          </div>
        </Content>
        <Footer style={{
          textAlign: 'center'
        }}>React Redux Workshop ©2012-2019 Created by Nextflow.in.th</Footer>
      </Layout>,
    </div>
  );
}

export default App;
