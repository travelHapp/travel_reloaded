
import './App.css';
import CrearDestino from './pages/create-destination/Create-destination';
import ButtonReusable from './components/buttonReusable/ButtonReusable';

function App() {
  const onClick1 = () => {
    console.log('click 1');
  };
  const onClick2 = () => {
    console.log('click 2');
  };
  
  return (
   <div className="App">
   <CrearDestino/>
   <ButtonReusable text= "Aceptar" id={1} onClick={onClick1} nameClass= "btn-aceptar"/>
   <ButtonReusable text= "Cancelar" id={2} onClick={onClick2} nameClass= "btn-cancelar"/>
   
   </div> 
  );
}

export default App;
