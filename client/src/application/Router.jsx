import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import CreateDestination from './pages/CreateDestination';
import EditDestination from './pages/EditDestination';
import DestinationDetail from './pages/DestinationDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/create-destination" component={CreateDestination} />
        <Route path="/edit-destination/:id" component={EditDestination} />
        <Route path="/destination/:id" component={DestinationDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
