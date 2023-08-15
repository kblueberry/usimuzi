import { Button, TextField } from "@mui/material";
import { CONSTANTS } from "../../constants/Constants";
import "../users/Search.scss";

export default function Search() {
  return (
    <div className="search_container">
      <TextField
        id="standard-basic"
        label={CONSTANTS.placeholders.search}
        variant="standard"
      />
      <Button className="search_button" variant="contained">
        {CONSTANTS.actions.search}
      </Button>
    </div>
  );
}
