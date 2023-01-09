import { Space } from 'antd';
import React from 'react'
import DataTable from './DataTable';
import SaveNewData from '../savedata/SaveNewData';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <Space style={{display:'flex',justifyContent:'space-between'}}>
            <h2>Home Dashboard</h2>     
        </Space>
        <br />
        <div className='datalist-container'>
          <DataTable/>
        </div>
        <Space style={{display:'flex',justifyContent:'flex-end',paddingRight:50,paddingTop:50}}>
            <SaveNewData/>
        </Space>
    </div>
  )
}
export default Dashboard;