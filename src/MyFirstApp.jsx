//Esta es mi primera aplicacion

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

export const MyFirstApp = ({title="Hola, soy Lauro Ramirez", subtitle="subtitulo"}) =>
{
  // const lValor = GetUserName();
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