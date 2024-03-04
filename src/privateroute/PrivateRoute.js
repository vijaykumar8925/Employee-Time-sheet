import React from "react";
import { Navigate } from "react-router-dom";
import * as PropTypes from "prop-types";
const PrivateRoute = ({ isSignedIn, children }) => {
  //
  // if (!localStorage.getItem('token')) {
  //     // return <Navigate to="/" replace />
  //     }
  return children;
};
PrivateRoute.propTypes = {
  isSignedIn: PropTypes.bool,
  children: PropTypes.bool,
};
export default PrivateRoute;
