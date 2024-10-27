"use client"
import React, { useState, useEffect } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Bem = () => {
  const [toasts, setToasts] = useState([]);
  const [counter, setCounter] = useState(0);

  const addToast = (type) => {
    setCounter(prevCounter => prevCounter + 1);
    setToasts([{ id: counter, type }]); // Chỉ lưu thông báo mới nhất
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts([]);
      }, 3000); // 3 giây
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const renderToast = (type) => {
    switch(type) {
      case 'success':
        return (
          <div className="popup toast--success">
            <div className="toast__icon">
              <i className="fa fa-check-circle"></i>
            </div>
            <div className="toast__body">
              <h4 className='toast_title'>Success</h4>
              <p className='toast_msg'>Get data from Api success</p>
            </div>
            <div className="toast__close">
              <i className="fa fa-times"></i>
            </div>
          </div>
        );
      case 'error':
        return (
          <div className="popup toast--error">
            <div className="toast__icon">
              <i className="fa fa-times-circle"></i>
            </div>
            <div className="toast__body">
              <h4 className='toast_title'>Error</h4>
              <p className='toast_msg'>There was an error processing your request</p>
            </div>
            <div className="toast__close">
              <i className="fa fa-times"></i>
            </div>
          </div>
        );
      case 'warning':
        return (
          <div className="popup toast--warning">
            <div className="toast__icon">
              <i className="fa fa-exclamation-circle"></i>
            </div>
            <div className="toast__body">
              <h4 className='toast_title'>Warning</h4>
              <p className='toast_msg'>This is a warning message</p>
            </div>
            <div className="toast__close">
              <i className="fa fa-times"></i>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div id='toast'>
        {toasts.map(toast => (
          <div key={toast.id}>
            {renderToast(toast.type)}
          </div>
        ))}
      </div>
      <div>
        <div className="btn btn-success" onClick={() => addToast('success')}>
          Show success
        </div>
        <div className="btn btn-danger" onClick={() => addToast('error')}>
          Show error
        </div>
        <div className="btn btn-warning" onClick={() => addToast('warning')}>
          Show warning
        </div>
      </div>
    </>
  );
};

export default Bem;
