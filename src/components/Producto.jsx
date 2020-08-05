import React from 'react';
const Producto = ({producto,carrito,agregarProducto,productos}) => {

    const {nombre,precio, id}= producto;
    
    //agregar producto al carrito
    const seleccionarProducto = id=>{
        //Cuando el id sea igual al del producto elegido traera todos los datos y creara el arreglo producto
        const producto =productos.filter(producto => producto.id ===id)[0];
        agregarProducto([
            //clonar un objeto o arreglo
            ...carrito,producto
        ])
        
    }
    return ( 
        <div>
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
            <button type='button' onClick={()=>seleccionarProducto(id)} >
                Comprar
            </button>
        </div>
     );
}
 
export default Producto;