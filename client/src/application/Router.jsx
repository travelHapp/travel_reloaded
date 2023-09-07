import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import CreateDestination from "../pages/create-destination/CreateDestination";
import EditDestination from "../pages/edit-destination/EditDestination";
import Login from "../pages/login/login";
import RegistrationForm from "../pages/registration-form/RegistrationForm";
import Logout from '../components/logout/Logout';
// import DeleteDestination from './pages/delete-destination/DeleteDestination';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      
      {/* <ProtectedRoute path="/create-destination" isAuthenticated={user !== null} element={<CreateDestination />} /> */}
      {/* <Route path="/detail-destination/:id" element={<DetailDestination />} /> */}
      <Route path="/edit-destination/:id" element={<EditDestination />} />
      <Route path="/create-destination" element={<CreateDestination />} />
     
      {/* <Route path="/delete-destination/:id" element={<DeleteDestination />} /> */}
      
      
    
    </Routes>
  );
};

export default Router;
