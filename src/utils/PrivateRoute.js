import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/reusable/Loading";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { email, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
