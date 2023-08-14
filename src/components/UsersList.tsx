import React from "react";
import { Divider, List, ListItem } from "@mui/material";
import UserProfile from "./UserProfile";

export default function UsersList() {
  return (
    <List>
      <ListItem>
        <UserProfile />
      </ListItem>
      <Divider />
    </List>
  );
}
