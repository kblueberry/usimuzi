import { Grid } from "@mui/material";
import UserAlbum from "./UserAlbum";
import { Album } from "../../dto/Album";
import { ListProps } from "../../dto/ListProps";
import LoadingIndicator from "../common/LoadingIndicator";
import ErrorSnackBar from "../common/ErrorSnackBar";

export default function GalleryList({ state }: ListProps<Album>) {
  if (state.loading) {
    return <LoadingIndicator />;
  }

  if (!!state.error) {
    return <ErrorSnackBar error={state.error} />;
  }

  return (
    <>
      {/*<ListSubheader>*/}
      {/*  <h1 className="heading_h1">{title}</h1>*/}
      {/*</ListSubheader>*/}
      <Grid container spacing={2}>
        {state.data.map((dataItem) => (
          <Grid item xs={4}>
            <UserAlbum album={dataItem} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
