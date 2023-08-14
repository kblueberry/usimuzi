import React from "react";
import UsersList from "./UsersList";
import UsersProvider from "../context/UsersProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UsersProvider>
              <UsersList />
            </UsersProvider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
