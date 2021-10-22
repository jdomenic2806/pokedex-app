import React from 'react';
import { Sidebar } from './Sidebar';
import { useHistory } from "react-router-dom";

export const SidebarMobile = () => {

  let history = useHistory();
  const openNav = () => {
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    console.log('open')
  };
  const closeNav = () => {
    document.getElementById('mySidebar').style.width = '0px';
    document.getElementById('mySidebar').style.padding = '0px';
    document.getElementById('main').style.marginLeft = '0px';
  };

  return (
    <>
      <div id='mySidebar' className='sidebar'>
        <a href='javascript:void(0)' className='closebtn' onClick={closeNav}>
          ×
        </a>
        <Sidebar />
      </div>
      <div className='row menu-mobile align-items-center text-center ' id="main">
        <div className='col-4'>
          <button className='openbtn' onClick={openNav}>
            ☰
          </button>
        </div>
        <div className='col-4'>
          <img
            src='/assets/logo.png'
            className='img-fluid pointer'
            width='100'
            height='100'
            alt='Logo'
            onClick={() => history.push("/")}
          />
        </div>
        <div className='col-4'></div>
      </div>
    </>
  );
};
