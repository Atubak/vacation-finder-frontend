import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import logoWordGood from "../icons/logocow-color.png";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../store/user/slice";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../store/user/selectors";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const appBarStyle = {
  backgroundColor: "#fcfcfd",
  color: "#5d5957",
  boxShadow: "0px -5px 20px black",
};

const loginBtnStyle = {
  backgroundColor: "#ff6992",
  color: "#ffffff",
  margin: "0 5px",
};

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken());
  const profile = useSelector(selectUser());

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar>
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

          {token ? (
            <Button
              sx={loginBtnStyle}
              variant="outlined"
              onClick={() => navigate(`/user/${profile.id}`)}
            >
              <FavoriteBorderIcon />
            </Button>
          ) : (
            ""
          )}

          {token ? (
            <Button
              sx={loginBtnStyle}
              variant="outlined"
              onClick={() => {
                dispatch(logOut());
                navigate("/");
              }}
            >
              Logout
            </Button>
          ) : (
            <Link to={"/login"}>
              <Button variant="contained" sx={loginBtnStyle}>
                Log In
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
