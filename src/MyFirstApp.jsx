//Esta es mi primera aplicacion


//esto hay que instalarlo manualmente
//yarn add prop-types  <- esta es la forma de instalarlo desde la terminal
//Esto me sirve para definir el tipo de las propiedades
import PropTypes from "prop-types";



export const MyFirstApp = ({ title, subtitle, name }) =>
{
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{name}</p>
    </>
  )
}



/*
las definiciones de props, no se pueden 
tenerse antes de la definición de los componentes

*/
MyFirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}


/* 
Los default props se cargan antes que los propTypes, por eso no manda error si no
se envian desde la página */
MyFirstApp.defaultProps = {
  subtitle: "Ingeniero de Software",
  // title: "Lauro Ramirez",
  name: 'Frida Sophia Ramírez'
}