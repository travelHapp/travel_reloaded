import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import CreateDestination from './pages/CreateDestination';
// import EditDestination from './pages/EditDestination';
// import DestinationDetail from './pages/DestinationDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/create-destination" element={<CreateDestination/>} />
        <Route path="/edit-destination/:id" element={<EditDestination/>} />
        <Route path="/destination/:id" element={<DestinationDetail/>} /> */}
      
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
