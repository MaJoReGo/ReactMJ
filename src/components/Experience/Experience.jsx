import React from 'react';
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMysql, SiMongodb } from "react-icons/si";
import logo1 from '../../assets/logoSena.png';
import './Experience.css'; 

export const Experience = () => {
  return (
    <div className='ContainerExperience'>
      <div className='ExperienceContent'>
        <div className="logoAndTitleContainerExperience">
          <img className="logoExperience" src={logo1} alt="Logo Sena" />
          <h1>Experiencia</h1>
        </div>
      </div>
      <div className="textContainerExperience">
        <p><b>_______________________________________________________________________________________________________________________________________</b></p>
      </div>
      <div className="progressContainer">
        <div className="progressItem">
          <div className="progressText">
            <FaHtml5 />
            <p><b>HTML5:</b> 50%</p> 
          </div>
          <div className="progressBar">
            <div className="progressFill" style={{width: '50%'}}></div>
          </div>
          <div className="progressImage"></div>
        </div>

        <div className="progressItem">
          <div className="progressText">
            <FaCss3Alt />
            <p><b>CSS:</b> 50%</p> 
          </div>
          <div className="progressBar">
            <div className="progressFill" style={{width: '50%'}}></div>
          </div>
          <div className="progressImage"></div>
        </div>

        <div className="progressItem">
          <div className="progressText">
            <SiMysql />
            <p><b>MySQL:</b> 45%</p> 
          </div>
          <div className="progressBar">
            <div className="progressFill" style={{width: '45%'}}></div>
          </div>
          <div className="progressImage"></div>
        </div>

        <div className="progressItem">
          <div className="progressText">
            <SiMongodb />
            <p><b>MongoDB:</b> 35%</p> 
          </div>
          <div className="progressBar">
            <div className="progressFill" style={{width: '35%'}}></div>
          </div>
          <div className="progressImage"></div>
        </div>
      </div>
    </div>
  );
};


