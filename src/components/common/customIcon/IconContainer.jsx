import React from 'react';

function IconContainer({ children, text }) {
  return (
    <div className={`flex items-center ${!text ? '' : 'gap-2'}`}>
      {children}
      <h2>{text}</h2>
    </div>
  );
}

export default IconContainer;
