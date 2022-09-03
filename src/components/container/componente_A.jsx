import React from 'react';
import PropTypes from 'prop-types';
import { Connectivity } from '../../models/contact.class';
import ComponenteB from '../pure/componente_B';
import { ESTADO } from '../../models/contact.state';


const ComponenteA = () => {

    const defaultConection = new Connectivity ('matias','espert','matias.espert@gmail.com', false)

    return (
        <div>
        <h2>TAREA 1</h2>
            <ComponenteB connectivity={defaultConection}></ComponenteB>
        </div>
    );
};




export default ComponenteA;
