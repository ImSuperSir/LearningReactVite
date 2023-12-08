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

export const MyFirstApp = () =>
{
  const lValor = GetUserName();
  return (
    <>
      {
  /*Aca puedo tranquilamente agregar comentarios  */}
      <h1>{lValor}</h1>
      <h2>{getSumaNumeros(2, 5)}</h2>
    </>
  )
}