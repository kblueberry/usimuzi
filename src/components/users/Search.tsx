import { Button, TextField } from "@mui/material";
import { CONSTANTS } from "../../constants/Constants";
import "../users/Search.scss";
import { useState } from "react";

export default function Search({ handleChange }: { handleChange: Function }) {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="search_container">
      <TextField
        id="standard-basic"
        label={CONSTANTS.placeholders.search}
        variant="standard"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <Button
        className="search_button"
        variant="contained"
        onClick={() => handleChange(searchText)}
      >
        {CONSTANTS.actions.search}
      </Button>
    </div>
  );
}
