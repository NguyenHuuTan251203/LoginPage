import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function AuthMiddleware() {
  const [isAuth, setIsAuth] = useState("rs") || useState(false);
  useEffect(() => {
    setIsAuth(localStorage.getItem("rs") === "true");
  }, []);
  // console.log(isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
