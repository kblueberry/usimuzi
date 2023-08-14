import { useEffect, useState } from "react";
import { Divider, List, ListItem } from "@mui/material";
import UserProfile from "./UserProfile";
import { getUsers } from "../constants/Api";
import { User } from "../dto/User";

export default function UsersList() {
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    getUsers().then((result) => setUsers(result.data));
  });

  return (
    <div className="flex_column_container">
      <List>
        {users.map((user: User) => (
          <>
            <ListItem key={user.id}>
              <UserProfile userInfo={user} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );
}
