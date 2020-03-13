import React, { Component } from 'react';
import Navegador from '../Commom/Navegador';
import Galeria from './Galeria';

class PaginaPrincipal extends Component {
    state = {  }
    render() { 
        return ( 
        <div id="principal">
            <Navegador></Navegador>
            <Galeria></Galeria>
        </div> );
    }
}
 
export default PaginaPrincipal;