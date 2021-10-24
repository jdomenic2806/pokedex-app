import React, { useState } from 'react';
import { Drawer } from 'antd';
import { Sidebar } from './Sidebar';
import { useHistory } from "react-router-dom";

export const SidebarMobile = () => {
  const [visible, setVisible] = useState(false);
  let history = useHistory();
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-4'>
          <button className="btn btnMenu" onClick={showDrawer}>
            <img
              src='/assets/Icons/Menu.svg'
              alt='Logo'
            />
          </button>
          <Drawer
            placement='left'
            onClose={onClose}
            visible={visible}
          >
           <Sidebar />
          </Drawer>
        </div>
        <div className='col-4'>
          <img
            src='/assets/logo.png'
            className='img-fluid pointer'
            width='150'
            height='150'
            alt='Logo'
            onClick={() => history.push("/")}
          />
        </div>
        <div className='col-4'></div>
      </div>
    </div>
  );
};
