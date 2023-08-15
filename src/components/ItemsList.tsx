import { Divider, List, ListItem, ListSubheader } from "@mui/material";
import UserProfile from "./UserProfile";
import { User } from "../dto/User";
import LoadingIndicator from "./LoadingIndicator";
import ErrorSnackBar from "./ErrorSnackBar";
import { Post } from "../dto/Post";
import UserPost from "./Post";
import { ListProps } from "../dto/ListProps";

export default function ItemsList({ title, state }: ListProps<User | Post>) {
  if (state.loading) {
    return <LoadingIndicator />;
  }

  if (!!state.error) {
    return <ErrorSnackBar error={state.error} />;
  }

  const child = (dataItem: User | Post) => {
    {
      if ("username" in dataItem) {
        return <UserProfile userInfo={dataItem as User} />;
      }
      if ("body" in dataItem) {
        return <UserPost text={dataItem.body} title={dataItem.title} />;
      }
    }
  };

  return (
    <div className="flex_column_container">
      <ListSubheader>
        <h1 className="heading_h1">{title}</h1>
      </ListSubheader>
      <List>
        {state.data.map((dataItem: User | Post) => (
          <div key={dataItem.id}>
            <ListItem>{child(dataItem)}</ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}
