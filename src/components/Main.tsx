import React from "react";
import UsersProvider from "../context/UsersProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersList from "./UsersList";
import Posts from "./Posts";
import UserPostsProvider from "../context/UserPostsProvider";
import UserAlbumsProvider from "../context/UserAlbumsProvider";
import Albums from "./Albums";
import "../assets/stylesheets/app.scss";

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
        <Route
          path="users/:id/posts"
          element={
            <UserPostsProvider>
              <Posts />
            </UserPostsProvider>
          }
        ></Route>
        <Route
          path="users/:id/albums"
          element={
            <UserAlbumsProvider>
              <Albums />
            </UserAlbumsProvider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
