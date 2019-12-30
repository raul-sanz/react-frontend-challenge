import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../utils/auth';
/**
 * Protec  routes, required authentication for render component or page
 */
const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            /** auth is class, with method for autenticate user */
            auth.isAuthenticated() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;