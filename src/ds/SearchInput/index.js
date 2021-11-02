import { InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { func, string } from "prop-types";
import React from "react";

import useStyles from "./useStyles";

export default function SearchInput({
  value = "",
  onChange = Function.prototype,
}) {
  const classes = useStyles();

  const handleChange = (event) => {
    onChange(event.currentTarget.value);
  };

  return (
    <TextField
      name="searchTerm"
      value={value}
      onChange={handleChange}
      className={classes.root}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
}

SearchInput.propTypes = {
  value: string,
  onChange: func,
};
