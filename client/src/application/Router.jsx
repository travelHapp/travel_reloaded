import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import CreateDestination from "../pages/create-destination/CreateDestination";
import EditDestination from "../pages/edit-destination/EditDestination";
import Login from "../pages/login/login";
import RegistrationForm from "../pages/registration-form/RegistrationForm";
import Logout from "../components/logout/Logout";
import DetailDestination from "../pages/detail-destination/DestinationDetail";
// import PrivateRoutes from "../utils/PrivateRoutes";

const Rutas = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route
          path="/"
          element={ */}
            {/* // <PrivateRoutes> */}
              <Route path="/create-destination" element={<CreateDestination />} />
              <Route path="/edit-destination/:id" element={<EditDestination />} />
              <Route path="/detail-destination/:id" element={<DetailDestination />} />
            {/* // </PrivateRoutes> */}
          {/* } */}
        {/* /> */}
      </Routes>
    
  );
};

export default Rutas;

