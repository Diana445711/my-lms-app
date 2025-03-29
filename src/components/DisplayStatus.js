import React from 'react';
import '../App.css';

const DisplayStatus = ({ type, message }) => {
  return (
    <div className={`status-${type}`}>
      {type === 'success'}
      {message}
    </div>
  );
};

export default DisplayStatus;