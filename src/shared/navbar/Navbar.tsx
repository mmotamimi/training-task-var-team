import React from "react";
import { AppBar, Toolbar, Button, IconButton, TextField } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { IoIosMenu } from "react-icons/io";
import * as s from "./navbar.styles";

interface NavbarProps {
  showSearch?: boolean;
  menuEnabled?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  showSearch = false,
  menuEnabled = true,
}) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Left: nav buttons */}
        <div>
          <Button
            className={s.navButton}
            color="inherit"
            component={Link}
            to="/"
          >
            Home
          </Button>
          <Button
            className={s.navButton}
            color="inherit"
            component={Link}
            to="/weather"
          >
            Weather
          </Button>
          <Button
            className={s.navButton}
            color="inherit"
            component={Link}
            to="/currency"
          >
            Currency
          </Button>
          <Button
            className={s.navButton}
            color="inherit"
            component={Link}
            to="/news"
          >
            News
          </Button>
        </div>

        {/* Center: optional search */}
        <div className={s.grow}>
          {showSearch && (
            <TextField
              className={s.center}
              placeholder="Search city..."
              size="small"
              variant="outlined"
            />
          )}
        </div>

        {/* Right: dropdown icon */}
        <div>
          <IconButton color="inherit" disabled={!menuEnabled} aria-label="menu">
            <IoIosMenu />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
