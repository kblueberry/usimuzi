import React from "react";
import UsersList from "./components/UsersList";
import UsersProvider from "./context/UsersProvider";

export default function Main() {
  return (
    <UsersProvider>
      <UsersList />
    </UsersProvider>
  );
}
