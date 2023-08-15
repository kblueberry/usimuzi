import { Grid, ListSubheader } from "@mui/material";
import UserAlbum from "./UserAlbum";
import { DataFetchState } from "../dto/DataFetchState";
import { Album } from "../dto/Album";

interface CustomListProps {
  title: string;
  state: DataFetchState<Album>;
}

export default function GalleryList({ title, state }: CustomListProps) {
  return (
    <>
      <ListSubheader>
        <h1 className="heading_h1">{title}</h1>
      </ListSubheader>
      <Grid container spacing={2}>
        {state.data.map((dataItem) => (
          <Grid item xs={4}>
            <UserAlbum title={dataItem.title} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
