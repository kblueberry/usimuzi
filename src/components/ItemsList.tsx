import { Divider, List, ListItem, ListSubheader } from "@mui/material";
import UserProfile from "./UserProfile";
import { User } from "../dto/User";
import LoadingIndicator from "./LoadingIndicator";
import ErrorSnackBar from "./ErrorSnackBar";
import { DataFetchState } from "../dto/DataFetchState";
import UserAlbum from "./UserAlbum";
import { Post } from "../dto/Post";
import UserPost from "./Post";
import { Album } from "../dto/Album";

interface CustomListProps {
  title: string;
  state: DataFetchState<User | Post | Album>;
}

export default function ItemsList({ title, state }: CustomListProps) {
  if (state.loading) {
    return <LoadingIndicator />;
  }

  if (!!state.error) {
    return <ErrorSnackBar error={state.error} />;
  }

  const child = (dataItem: User | Post | Album) => {
    {
      if ("username" in dataItem) {
        return <UserProfile userInfo={dataItem as User} />;
      }
      if ("body" in dataItem) {
        return <UserPost text={dataItem.body} title={dataItem.title} />;
      }
      return <UserAlbum title={dataItem.title} />;
    }
  };

  return (
    <div className="flex_column_container">
      <ListSubheader>
        <h1 className="heading_h1">{title}</h1>
      </ListSubheader>
      <List>
        {state.data.map((dataItem: User | Post | Album) => (
          <div key={dataItem.id}>
            <ListItem>{child(dataItem)}</ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}
