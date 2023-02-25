import React from "react";
import { AppBar, Toolbar, Typography, Switch } from "@mui/material";
import { Navigation } from "./Navigation";

const label = { inputProps: { "aria-label": "Switch demo" } };

export const Header = ({ toggleTheme, isCustomTheme }) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Navigation />

        <Typography sx={{ m: "auto" }} variant="h4" component="div">
          Header
        </Typography>
        <Switch
          color="warning"
          checked={isCustomTheme}
          onChange={toggleTheme}
        />
      </Toolbar>
    </AppBar>
  );
};
