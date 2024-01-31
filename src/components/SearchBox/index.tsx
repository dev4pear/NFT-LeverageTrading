import { Icon } from "@iconify/react";
import { InputAdornment, TextField } from "@mui/material";

import "./style.scss";

const SearchBox = () => {
  return (
    <div className="searchbox">
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
      />
    </div>
  );
};

export default SearchBox;
