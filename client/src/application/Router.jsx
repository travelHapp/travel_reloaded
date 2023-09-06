import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import CreateDestination from "../pages/create-destination/CreateDestination";
import EditDestination from "../pages/edit-destination/EditDestination";
import Login from "../pages/login/login";
import RegistrationForm from "../pages/registration-form/RegistrationForm";
import Logout from '../components/logout/Logout';
// import DeleteDestination from './pages/delete-destination/DeleteDestination';

const Router = ({ isAuthenticated }) => {
  return (
    <Routes>

      <Route path="/" element={<Home isAuthenticated />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route
        path="/create-destination"
        element={
           isAuthenticated ? <CreateDestination /> : <Navigate to="/login" />
        }
      />

      <Route
        path="/edit-destination/:id"
        element={
          isAuthenticated ? <EditDestination /> : <Navigate to="/login" />
        }
      />
      {/* <Route
          path="/detail-destination/:id"
          element={ 
            isAuthenticated ? <DetailDestination /> : <Navigate to="/login" /> }
        /> */}

      {/* <Route
        path="/delete-destination/:id"
        element={ 
          isAuthenticated ? <DeleteDestination /> : <Navigate to="/login" /> }
      /> */}
      
    </Routes>
  );
};

export default Router;
