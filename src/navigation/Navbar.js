import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import baseTheme from "../styles/BaseTheme";
import { theme1 } from "../styles/DarkTheme";
import { theme2 } from "../styles/RedTheme";
import { deepmerge } from "@mui/utils";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Box,
  ThemeProvider,
  createTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";

export default function Navbar() {
  const [theme, setTheme] = useState(baseTheme);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSwitch = (whichTheme) => {
    // const newTheme = deepmerge(theme, whichTheme);
    setTheme(createTheme(whichTheme));
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              color="secondary"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Khandoor
            </Typography>
            <Button
              color="inherit"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              startIcon={<PaletteIcon color="secondary" />}
            >
              Themes
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleSwitch(baseTheme)}>
                Base Theme
              </MenuItem>
              <MenuItem onClick={() => handleSwitch(theme1)}>
                Dark Theme
              </MenuItem>
              <MenuItem onClick={() => handleSwitch(theme2)}>
                Red Theme
              </MenuItem>
            </Menu>
            <Button
              color="inherit"
              startIcon={<LockIcon />}
              onClick={() => navigate("/sidenav")}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
