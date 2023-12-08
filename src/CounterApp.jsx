import { useState }  from 'react'; // "use" por definición es usado para identificar los hooks
import PropTypes from 'prop-types';


export const CounterApp  = ({value}) => {


  const [counter, setCounter] = useState(value);  //los hooks deben ser constantes, las constantes son mas ligeras

  // function handleAdd(event) {
  //   ...
  // } ;
  const handleAdd = (event) => {
    /* de aca para el manejo del evento, podemos desestructura y
    o realizar cualquier cosa que deseemos */
    // console.log(event)
    //setCounter(counter + 1);  
                              /*practicamente le estamos diciento que hay un cambio en el estado, y el componente se redibuja
                              No podemos realizar counter++, ya que counter es tipo const, y eso es correcto
                              lo que hacemos con el setcounter es que redespliega el componente. */

      setCounter( (c) => c + 1) ; 
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      {/* <button onClick={ (event) => handleAdd(event)}> */}
      <button onClick={ handleAdd }>  {
                                        /* "handleAdd" esta linea esta simplificada, porque 
                                        solo se maneja un argumento, 
                                        que lo toma por default (checar la linea anterior),
                                        osea es lo mismmo que: (event) => handleAdd(event)  
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


