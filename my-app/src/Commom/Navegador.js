import React, { Component } from 'react';
import './Navegador.css';
import Logo from './logo.png';

class Navegador extends Component {
  render() { 
      return (
          <nav className="navegador">
              <span><img src={Logo} width="20px" height="20px"/></span>
              <strong><a id="link">Linha do Tempo</a></strong>
              <strong><a id="link">Postar</a></strong>
              <a id="usuario">Bem-Vindo, Antonio</a>
          </nav>
      );
  }
}

export default Navegador;