import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

//pages
import SignIn from "./admin/pages/SignIn";
import SignUp from "./admin/pages/SignUp";
import Products from "./admin/pages/Products";


export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/admin", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={() => <h1>FrontEnd</h1>} />
        <Route exact path="/admin" component={SignIn} />
        <PrivateRoute path="/admin/products" component={Products} isPrivate />
        <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>

 
);




export default Routes;
