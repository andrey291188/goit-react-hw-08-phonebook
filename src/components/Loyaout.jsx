import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Headers from './Headers/Headers';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        theme="colored"
      />
      <Headers />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
