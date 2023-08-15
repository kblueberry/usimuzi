import { Divider, List, ListItem, ListSubheader } from "@mui/material";
import UserProfile from "./UserProfile";
import { User } from "../dto/User";
import LoadingIndicator from "./LoadingIndicator";
import ErrorSnackBar from "./ErrorSnackBar";
import { DataFetchState } from "../dto/DataFetchState";
import { Post } from "../dto/Post";
import UserPost from "./Post";

interface CustomListProps {
  title: string;
  state: DataFetchState<User | Post>;
}

export default function ItemsList({ title, state }: CustomListProps) {
  if (state.loading) {
    return <LoadingIndicator />;
  }

  if (!!state.error) {
    return <ErrorSnackBar error={state.error} />;
  }

  return (
    <div className="flex_column_container">
      <ListSubheader>
        <h1 className="heading_h1">{title}</h1>
      </ListSubheader>
      <List>
        {state.data.map((dataItem: User | Post) => (
          <div key={dataItem.id}>
            <ListItem>
              {"username" in dataItem ? (
                <UserProfile userInfo={dataItem as User} />
              ) : (
                <UserPost text={dataItem.body} title={dataItem.title} />
              )}
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}