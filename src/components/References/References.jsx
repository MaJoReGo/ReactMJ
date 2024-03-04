import React from 'react';
import { FaWhatsapp ,  FaUser } from 'react-icons/fa'; // Importa FaUser desde react-icons/fa
import logo1 from '../../assets/logoSena.png';
import './References.css';



export const References = () => {
  return (
    <div className='ContainerReferences'>
      <div className='ReferencesContent'>
        <div className="logoAndTitleContainerReferences">
          <img className="logoExperience" src={logo1} alt="Logo Sena" />
          <h1>Referencias</h1>
        </div>
      </div>
      <div class="textContainerReferences">
  <p><b></b></p>
</div>

      <div className="containerReferences">
        <div className="box1References">
          <FaUser className="box-image1References" />
          <h1 className="box-title1References">Lina Fernanda Gomez</h1>
          <p className="box-text1References"><b>Telefono:</b>312 2820646<br/>
          <b>Profesion:</b>Contadora</p>
          <a href="https://api.whatsapp.com/send?phone=TUNUMERO"><FaWhatsapp /></a>
        </div>
        <div className="box2References">
          <FaUser className="box-image2References" />
          <h1 className="box-title2References">Diego Alejandro Calvo</h1>
          <p className="box-text2References"><b>Telefono:</b>317 6713360<br/>
          <b>Profesion:</b>Desarrollador Software</p>
          <a href="https://api.whatsapp.com/send?phone=TUNUMERO"><FaWhatsapp /></a>
        </div>
        <div className="box3References">
          <FaUser className="box-image3References" />
          <h1 className="box-title3References">Carolina Gomez</h1>
          <p className="box-text3References"><b>Telefono:</b>318 5685022<br/>
          <b>Profesion:</b>Supervisora Colombina</p>
          <a href="https://api.whatsapp.com/send?phone=TUNUMERO"><FaWhatsapp /></a>
        </div>
        <div className="box4References">
          <FaUser className="box-image4References" />
          <h1 className="box-title4References">Santiago Suarez</h1>
          <p className="box-text4References"><b>Telefono:</b>316 5116270<br/>
          <b>Profesion:</b>Ingeniero Civil</p>
          <a href="https://api.whatsapp.com/send?phone=TUNUMERO"><FaWhatsapp /></a>
        </div>
      </div>
    </div>
  );
};
