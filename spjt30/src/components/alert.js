import React from 'react';

const Alert = ({ message, type }) => {
  const getAlertStyle = () => {
    switch (type) {
      case 'success':
        return { backgroundColor: 'green', color: 'white' };
      case 'error':
        return { backgroundColor: 'red', color: 'white' };
      case 'info':
        return { backgroundColor: 'blue', color: 'white' };
      default:
        return {};
    }
  };

  return (
    <div style={{ ...getAlertStyle(), padding: '10px', borderRadius: '5px' }}>
      {message}
    </div>
  );
};

export default Alert;