import PropTypes from 'prop-types';


export const CounterApp  = ({value}) => {

  // function handleAdd(event) {
  //   ...
  // } ;
  const handleAdd = (event) => {
    /* de aca para el manejo del evento, podemos desestructura y
    o realizar cualquier cosa que deseemos */
    console.log(event)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>
      {/* <button onClick={ (event) => handleAdd(event)}> */}
      <button onClick={ handleAdd }>  {
                                        /*esta linea esta simplificada, porque 
                                        solo se maneja un argumento, 
                                        que lo toma por default (checar la linea anterior),
                                        osea es lo mismmo : (event) => handleAdd(event)  
                                        El evento onclick recibe el event, y este lo envia a handleAdd
                                        */}
        +1
      </button>
    </>
  );
}

CounterApp.propTypes = {
  value : PropTypes.number.isRequired,
}


