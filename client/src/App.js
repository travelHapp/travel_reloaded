import './App.css';
import TravelDetails from './components/TravelDetails/TravelDetails';
import Modal from './components/modal/Modal.jsx';


function App() {
  // const onClick1 = () => {
  //   console.log('click 1');
  // };
  // const onClick2 = () => {
  //   console.log('click 2');
  // };
  
  return (
   <div className="App">
  <Modal/>
  <TravelDetails/>
  
   </div> 
  );
}

export default App;
