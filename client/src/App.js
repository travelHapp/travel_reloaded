import { BrowserRouter } from "react-router-dom";
import Router from "./application/Router";
import Nav from "./components/nav/Nav";


function App() {


  return (
    <>
    <Nav/>
    <BrowserRouter>
        <Router />     
    </BrowserRouter>
    </>
  );
}

export default App;
