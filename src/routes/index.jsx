import React from "react";
import { Route, Routes } from "react-router";
import Login from "../pages/Login/Login";
import AuthMiddleware from "../middleware/AuthMiddleware";
import Home from "../pages/Home/Home";
export default function RootRouter() {
  return (
    <Routes>
      <Route path="/">
        <Route element={<AuthMiddleware />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
}
