import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {UserContext} from '../../App'
const PrivateRoute = ({children}) => {
    const [loggedUser] = useContext(UserContext)
    let location = useLocation();
    const authU = loggedUser?.name;
    return authU ? children : <Navigate to={'/login'} state={{ from: location }} replace  />

};

export default PrivateRoute;