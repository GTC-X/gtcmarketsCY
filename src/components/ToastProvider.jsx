'use client';

import { ToastContainer } from 'react-toastify';

export function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3500}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="light"
      toastStyle={{ zIndex: 99999 }}
      style={{ zIndex: 99999 }}
    />
  );
}
