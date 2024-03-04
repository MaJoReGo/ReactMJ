import React from 'react';
import logo1 from '../../assets/logoSena.png';
import foto from '../../assets/User.jpg';
import './Profile.css'; 

export const Profile = () => {
  return (
    <div className='ContainerProfile'>
      <div className='ProfileContent'>
        <div className="logoAndTitleContainer">
          <img className="logoProfile" src={logo1} alt="Logo Sena" />
          <h1>Perfil</h1>
        </div>
      </div>
      <div class="textContainerReferences">
  <p><b></b></p>
</div>

      <div className="ProfileContentText">
        <img className="imgProfile" src={foto} alt="fotoPerfil" />
        <div className="text">
          <h1>¿Quien soy?</h1>
          <p>Como desarrollador de software enfocado en el front-end, poseo sólidos conocimientos en HTML y CSS. Mi pasión radica en crear interfaces de usuario atractivas y funcionales que mejoren la experiencia del usuario. Con experiencia en el diseño y desarrollo de sitios web y aplicaciones, estoy comprometido en ofrecer soluciones innovadoras y de calidad que cumplan con las necesidades de mis clientes. Mi objetivo es seguir aprendiendo y creciendo en este campo para poder ofrecer siempre lo mejor en cada proyecto en el que me involucre.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

