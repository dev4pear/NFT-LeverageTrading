import { Icon } from "@iconify/react";
import { InputAdornment, TextField } from "@mui/material";

import "./style.scss";

const SearchBox = () => {
  return (
    <TextField
      variant="standard"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            <Icon
              icon="material-symbols:search"
              width="24"
              height="24"
              color="black"
            />
          </InputAdornment>
        ),
      }}
      placeholder="Search..."
      className="searchbox"
    />
  );
};

export default SearchBox;
