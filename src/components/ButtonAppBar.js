import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import logoWordGood from "../icons/logocow-color.png";

import { Link } from "react-router-dom";

const appBarStyle = {
  backgroundColor: "#fcfcfd",
  color: "#5d5957",
};

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <img src={logoWordGood} alt="" height="64px" />
          <Typography
            style={{ textAlign: "left", color: `${appBarStyle.color}` }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link
              to={"/"}
              style={{
                color: `${appBarStyle.color}`,
                textDecoration: `underline overline ${appBarStyle.color}`,
                textUnderlineOffset: "4px",
              }}
            >
              VacaLoca
            </Link>
          </Typography>
          <Typography
            style={{ textAlign: "left" }}
            variant="p"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            The Vacation Locator
          </Typography>
          <Button color="inherit">Log In</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// just trying out, will probably switch to styled components or something else
