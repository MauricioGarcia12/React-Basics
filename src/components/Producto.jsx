import React from 'react';
const Producto = ({producto}) => {

    const {nombre,precio, id}= producto;
    return ( 
        <div>
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
        </div>
     );
}
 
export default Producto;