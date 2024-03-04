import React from 'react';
import logo1 from '../../assets/logoSena.png';
import '../../App.css';

export const ImagesPage = () => (
  <div>
    <div className='ContainerProfile'>
      <div className='ProfileContent'>
        <div className="logoAndTitleContainer">
          <img className="logoProfile" src={logo1} alt="Logo Sena" />
          <h1>Inicio</h1>
        </div>
      </div>
      <div class="textContainerReferences">
  <p><b></b></p>
</div>
    </div>
  </div>
);
