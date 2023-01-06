import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import {MenuUnfoldOutlined} from '@ant-design/icons';
import MainMenu from '../sidebar/MainMenu';
const SideBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuUnfoldOutlined style={{fontSize:20,color:'white'}} type="primary" onClick={showDrawer}></MenuUnfoldOutlined>
      
      <Drawer title="" placement="left" onClose={onClose} open={open}>
        <MainMenu/>
      </Drawer>
    </>
  );
};

export default SideBar;