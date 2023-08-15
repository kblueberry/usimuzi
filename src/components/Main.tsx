import React from "react";
import UsersProvider from "../context/UsersProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersList from "./users/UsersList";
import Posts from "./posts/Posts";
import UserPostsProvider from "../context/UserPostsProvider";
import UserAlbumsProvider from "../context/UserAlbumsProvider";
import Albums from "./albums/Albums";
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
        <Route
          path="users/:id/albums/:albumId"
          element={
            <div>
              <p>Here are photos</p>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
