import './Preloader.scss';
import React from 'react';

export const Preloader = () => {
  const text = 'loading';
  return (
    <div className='preloader'>
      {[...text].reverse().map(char => (
        <div className='preloader__char' key={char}>
          {char}
        </div>
      ))}
    </div>
  );
};
