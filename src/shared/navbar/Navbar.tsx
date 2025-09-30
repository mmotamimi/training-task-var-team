import React from "react";
import { AppBar, Toolbar, Button, IconButton, TextField } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { IoIosMenu } from "react-icons/io";
import { createStyles } from "./navbar.styles";

interface NavbarProps {
  showSearch?: boolean;
  menuEnabled?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  showSearch = false,
  menuEnabled = true,
}) => {
  const styles = createStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Left: nav buttons */}
        <div>
          <Button
            className={styles.navButton}
            color="inherit"
            component={Link}
            to="/"
          >
            Home
          </Button>
          <Button
            className={styles.navButton}
            color="inherit"
            component={Link}
            to="/weather"
          >
            Weather
          </Button>
          <Button
            className={styles.navButton}
            color="inherit"
            component={Link}
            to="/currency"
          >
            Currency
          </Button>
          <Button
            className={styles.navButton}
            color="inherit"
            component={Link}
            to="/news"
          >
            News
          </Button>
        </div>

        {/* Center: optional search */}
        <div className={styles.grow}>
          {showSearch && (
            <TextField
              className={styles.center}
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
