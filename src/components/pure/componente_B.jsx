import React from 'react';
import PropTypes from 'prop-types';
import { Connectivity } from '../../models/contact.class';


const ComponenteB = ({ connectivity }) => {
    return (
        <div>
            <h2>
                Nombre: {connectivity.name}
            </h2>
            <h3>
                Apellido: {connectivity.lastName}
            </h3>

            <h4>
                Email: {connectivity.email}
            </h4>

            <h5>
                Contacto: {connectivity.online ? 'Contacto En Línea' : 'Contacto No Disponible'}
            </h5>


        </div>
    );
};


ComponenteB.propTypes = {
    connectivity: PropTypes.instanceOf(Connectivity)

};


export default ComponenteB;
