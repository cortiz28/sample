import React from 'react'
import Navbar from './components/navbar/Navbar';
import SideBar from './components/navbar/Sidebar';
import {MenuUnfoldOutlined} from '@ant-design/icons';
import {Layout} from 'antd';
import './App.css'
import Dashboard from './components/dashboard/Dashboard';
const { Header, Footer, Sider, Content } = Layout;


function App() {

  

  return (
    <Layout>
      <Header>
        <Navbar/>  
      </Header>
      <Layout className='layout'>
        <Content>
          <Dashboard/>
        </Content>
      </Layout>
      <Footer> I am a Footer</Footer>
    </Layout>
  );
};

export default App;
