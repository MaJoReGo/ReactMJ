import React from 'react';
import { ImagesPage } from '../ImagesPage/ImagesPage';
import { DescriptionPage } from '../DescriptionPage/DescriptionPage';
import '../../App.css';

export const Home = () => {
  return (
      <div className='ContainerContent'>
        <ImagesPage />
        <DescriptionPage />
      </div>
  );
};

export default Home;

