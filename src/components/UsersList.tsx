import { useContext } from "react";
import { Divider, List, ListItem } from "@mui/material";
import UserProfile from "./UserProfile";
import { User } from "../dto/User";
import { UsersContext } from "../context/UsersProvider";
import LoadingIndicator from "./LoadingIndicator";
import ErrorSnackBar from "./ErrorSnackBar";

export default function UsersList() {
  const usersState = useContext(UsersContext);

  if (usersState.loading) {
    return <LoadingIndicator />;
  }

  if (!!usersState.error) {
    return <ErrorSnackBar error={usersState.error} />;
  }

  return (
    <div className="flex_column_container">
      <List>
        {usersState.data.map((user: User) => (
          <div key={user.id}>
            <ListItem>
              <UserProfile userInfo={user} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}
