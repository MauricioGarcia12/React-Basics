import React from 'react';
const Producto = ({producto,carrito,agregarProducto,productos}) => {

    const {nombre,precio, id}= producto;
    
    //agregar producto al carrito
    const seleccionarProducto = id=>{
        //Cuando el id sea igual al del producto elegido traera todos los datos y creara el arreglo producto
        const producto =productos.filter(producto => producto.id ===id)[0];
        agregarProducto([
            //clonar un objeto o arreglo para obtener mas objectos
            ...carrito,producto
        ])
        
    }
    //eliminar un producto
    const eliminarProducto = id =>{
        const productos = carrito.filter(producto => producto.id !==id)
        //colocar productos en el state
        agregarProducto(productos)
    }
    return ( 
        <div>
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
            {productos
             ? 
             (<button type='button' onClick={()=>seleccionarProducto(id)} >
                Comprar
            </button>)
             :
            (<button type='button' onClick={()=>eliminarProducto(id)} >
                Eliminar
            </button>)

            }
        </div>
     );
}
 
export default Producto;