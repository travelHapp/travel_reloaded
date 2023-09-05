import { BrowserRouter } from "react-router-dom";
import Router from "./application/Router";
import Nav from "./components/nav/Nav";


function App() {
  const isAuthenticated = localStorage.getItem('auth_token') !== undefined;


  return (
    <>
    <Nav isAuthenticated={isAuthenticated}/>
    <BrowserRouter>
        <Router isAuthenticated={isAuthenticated} />     
    </BrowserRouter>
    </>
  );
}

export default App;
