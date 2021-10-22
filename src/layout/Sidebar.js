import React from 'react';
import { useHistory } from "react-router-dom";

export const Sidebar = () => {
  let history = useHistory();
  return (
    <>
      <div className='col-12 d-flex justify-content-center' onClick={() => history.push("/")}>
        <img
          src='/assets/logo.png'
          className='img-fluid pointer'
          width='100'
          height='100'
          alt='Logo'
        />
      </div>
      <div className='col-12 d-flex justify-content-center'>
        <div className='row'>
          <div className='col-12 pb-4 d-flex justify-content-center'>
            <img
              src='/assets/avatar.png'
              className='rounded-circle img-fluid'
              width='150'
              height='150'
              alt='Avatar'
            />
          </div>
          <div className='col-12 d-flex justify-content-center'>
            <h3 className="txtColorNameSidebar">ASHK123</h3>
          </div>
          <div className='col-12 d-flex justify-content-center'>
            <h4 className="txtColorLevelSidebar">Level 1</h4>
          </div>
        </div>
      </div>
      <div className='col-12 d-flex justify-content-center'></div>
      <div className='col-12'>
        <button type='button' className='btn btn-logout d-flex btn-sm'>
          <div className='col-4'>
            <img className='svgLogout' src='/assets/Icons/Logout.svg' />
          </div>
          <div className='col-4'>LOGOUT</div>
          <div className='col-4'></div>
        </button>
      </div>
    </>
  );
};
