import React from 'react';
import { Logo } from '../../Logo/Logo';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Item } from '../../Item/Item';
import '../../../App.css';

export const Header = () => {
  return (
    <div className='Content'>
    <header>
      <Logo />
      <nav>
        <h1>María José Restrepo Gómez</h1>
        <h2><b>__________________</b></h2>
        <ul>
          <Item link="/" content="Inicio" />
          <Item link="/profile" content="Acerca de mí" />
          <Item link="/projects" content="Proyectos" />
          <Item link="/references" content="Referencias" />
          <Item link="/experience" content="Experiencia" />
        </ul>
      </nav>
      <div className="Icons">
        <a href="https://co.linkedin.com/"><FaLinkedin /></a>
        <a href="https://www.facebook.com/?locale=es_LA"><FaFacebook /></a>
        <a href="https://www.instagram.com/accounts/login/"><FaInstagram /></a>
        <a href="https://twitter.com/?lang=es"><FaTwitter /></a>
        {/* Icono de WhatsApp flotante */}
        <a className="WhatsappIcon" href="https://wa.me/1234567890">
          <FaWhatsapp />
        </a>
      </div>
      <div className="logoContainerSena">
        <a href="https://oferta.senasofiaplus.edu.co/sofia-oferta/">
          <img className="LogoSena" src='src/assets/logoSenaB.png' alt="senaLogo" />
        </a>
      </div>
    </header>
    </div>
  )
};

