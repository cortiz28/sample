import { Breadcrumb, Layout, Menu, theme,Avatar } from 'antd';
import SideBar from './Sidebar';
import './Navbar.css';
import React, { useEffect,useState } from 'react'
import { UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const Navbar: React.FC = () => {
    const [userimg,setUserimg] = useState('https://e7.pngegg.com/pngimages/981/645/png-clipart-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-thumbnail.png')
    const [userName,setUserName]= useState('Celmar');
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const nameChangeHandler = (username:any) =>{
    
  };
  

  return (
    <Layout>
        <Header  style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%',display:'flex',justifyContent:'space-between',color:'white',paddingLeft:40}}>
        <div><SideBar ></SideBar></div>
        <div className='greet-img-container'>
            <div className='greetings-container'>
                <h2>Hi {userName}! Welcome back</h2>
            </div>
            <div className='img-container'>
                <img src={userimg} alt="" />
            </div>
        </div>
        </Header>
    </Layout>

      
    
  );
};

export default Navbar;