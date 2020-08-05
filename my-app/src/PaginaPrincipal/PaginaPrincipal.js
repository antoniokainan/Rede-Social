import React, { Component } from 'react';
import Navegador from '../Commom/Navegador';
import Galeria from './Galeria';
import './PaginaPrincipal.css'

class PaginaPrincipal extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="principal">
            <Navegador></Navegador>
            <Galeria></Galeria>
        </div> );
    }
}
 
export default PaginaPrincipal;