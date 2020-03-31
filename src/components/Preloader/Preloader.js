import './Preloader.scss';
import React from 'react';
import { Spinner } from '../Spinner/Spinner';
import { LoaderText } from '../LoaderText/LoaderText';

export const Preloader = () => {
  return (
    <div className='preloader'>
      <Spinner className='preloader__spinner'/>
      <LoaderText className='preloader__loader-text'/>
    </div>
  );  
};
