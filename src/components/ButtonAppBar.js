import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
          <Typography
            style={{ textAlign: "left" }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            VacaLoca
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
