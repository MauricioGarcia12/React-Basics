import React, {Fragment,useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

 //listado de productos
  const [productos, guardarProductos] = useState([
    {id:1,nombre:'Camisa React JS',precio:50},
    {id:2,nombre:'Camisa Vue JS',precio:60},
    {id:3,nombre:'Camisa Angular JS',precio:80},
    {id:4,nombre:'Camisa Laravel JS',precio:50},
  ]);
  //STATE para un carrito d ecompras

  const [carrito,agregarProducto]=useState([]);


  //Obtener fecha
  const fecha = new Date().getFullYear();

  return (
  <Fragment>
      <Header
        titulo='Tienda Virtual'
      />
      <h1>Lista de Productos</h1>
      {productos.map(producto =>(
        <Producto
            carrito={carrito}
            agregarProducto={agregarProducto}
            key ={producto.id}
            producto={producto}
            productos={productos}
        />
      ))}
      <Carrito carrito={carrito} agregarProducto={agregarProducto}/>
      <Footer fecha={fecha}/> 
  </Fragment>
      
 
  );
}

export default App;
