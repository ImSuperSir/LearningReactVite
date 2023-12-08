//Esta es mi primera aplicacion


//esto hay que instalarlo manualmente
//yarn add prop-types  <- esta es la forma de instalarlo desde la terminal
//Esto me sirve para definir el tipo de las propiedades
import PropTypes from "prop-types";


const GetUserName = () =>
{
  return 'Ramirez está viviendo en Vancouver BC, Canada.';
};

const getSumaNumeros = (a, b) =>
{
  return (a + b);
}


// export const MyFirstApp = () => (
// <>
// <h1>Esta es mi primera aplicación</h1>
// <p>Este es un segundo elemento</p>
// </>
// );

export const MyFirstApp = ({ title, subtitle = "subtitulo" }) =>
{
   return (
    <>
      {
  /*Aca puedo tranquilamente agregar comentarios  */}
      <h1>{title}</h1>
      {/* <h2>{getSumaNumeros(2, 5)}</h2> */}
      <h2>{subtitle}</h2>
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
  title: "Lauro Ramirez",
}