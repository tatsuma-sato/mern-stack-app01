import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useStatus";
import Spinner from "./Spinner";

const PrivateRoute = () => {
  const { loggedin, checkingStatus } = useAuthStatus();

  if (checkingStatus) return <Spinner />;

  return loggedin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
