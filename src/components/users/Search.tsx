import { Button, TextField } from "@mui/material";
import { CONSTANTS } from "../../constants/Constants";

export default function Search() {
  return (
    <>
      <TextField
        id="standard-basic"
        label={CONSTANTS.placeholders.search}
        variant="standard"
      />
      <Button variant="contained">{CONSTANTS.actions.search}</Button>
    </>
  );
}
