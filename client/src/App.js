import './App.css';
import Router from './application/Router';
import LoginForm from './components/login-form/Login-form';


function App() {
  // const onClick1 = () => {
  //   console.log('click 1');
  // };
  // const onClick2 = () => {
  //   console.log('click 2');
  // };
  
  return (
   <div className="App">
  <Router/>
  <LoginForm/>  
   </div> 
  );
}

export default App;
