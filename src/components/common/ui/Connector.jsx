import Image from 'next/image';
import React from 'react';

function Connector({ rotate, x, y }) {
  console.log(rotate);
  const index = x;
  let offset = 'left-4';
  if (index == 3) {
    offset = 'right-9';
  }
  return (
    <div
      style={{
        gridRow: `${y}`,
        gridColumn: `${x}`,
      }}
      className={`relative ${offset}`}
    >
      <Image
        src={'/connector.svg'}
        alt='road'
        height={20}
        width={70}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      />
    </div>
  );
}

export default Connector;
