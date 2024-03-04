import React from 'react';
import { FaGithub } from 'react-icons/fa';
import logo1 from '../../assets/logoSena.png';

export const Projects = () => {
  return (
    <div className='ContainerProjects'>
      <div className='ProjectsContent'>
        <div className="logoAndTitleContainerProjects">
          <img className="logoProjects" src={logo1} alt="Logo Sena" />
          <h1>Proyectos</h1>
        </div>
      </div>
      <div class="textContainerReferences">
  <p><b></b></p>
</div>

      <div className="container">
        <div className="box1">
          <img className="box-image1" src={logo1} alt="Logo 1" />
          <h1 className="box-title1">PaginaReact</h1>
          <p className="box-text1">Este proyecto, desarrollado con React, es un reflejo digital de mi trayectoria profesional</p>
          <a href="https://github.com/MaJoReGo/PaginaReactMaJo.git"><FaGithub /></a>
        </div>
        <div className="box2">
          <img className="box-image2" src={logo1} alt="Logo 2" />
          <h1 className="box-title2">PaginaReact</h1>
          <p className="box-text2">Este proyecto, desarrollado con React, es un reflejo digital de mi trayectoria profesional</p>
          <a href="https://github.com/MaJoReGo/PaginaReactMaJo.git"><FaGithub /></a>
        </div>
        <div className="box3">
          <img className="box-image3" src={logo1} alt="Logo 3" />
          <h1 className="box-title3">PaginaReact</h1>
          <p className="box-text3">Este proyecto, desarrollado con React, es un reflejo digital de mi trayectoria profesional</p>
          <a href="https://github.com/MaJoReGo/PaginaReactMaJo.git"><FaGithub /></a>
        </div>
        <div className="box4">
          <img className="box-image4" src={logo1} alt="Logo 4" />
          <h1 className="box-title4">PaginaReact</h1>
          <p className="box-text4">Este proyecto, desarrollado con React, es un reflejo digital de mi trayectoria profesional</p>
          <a href="https://github.com/MaJoReGo/PaginaReactMaJo.git"><FaGithub /></a>
        </div>
      </div>
    </div>
  );
};
