'use client';

import React, { useRef } from 'react';
import Draggable from 'react-draggable';

const CustomDraggable = ({ children }) => {
  const nodeRef = useRef(null);
  return (
    <Draggable
      nodeRef={nodeRef}
      axis='y'
      handle='.handle'
      defaultPosition={{ x: 0, y: 0 }}
      grid={[1, 1]}
      scale={1}
      bounds={{ top: -130, bottom: 370 }}
    >
      <div ref={nodeRef} className='h-full px-6 pt-2 bg-white border-t'>
        {children}
      </div>
    </Draggable>
  );
};

export default CustomDraggable;
