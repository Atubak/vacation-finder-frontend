import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

//components
import { LocationPictures, Map } from "../components";

//selectors
import { useSelector } from "react-redux";
import { selectSelectedLocation } from "../store/locations/selectors";

const locInfoStyle = {
  margin: "50px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
};

const detailPStyle = {
  display: "flex",
};

export default function Details() {
  const selectedLocation = useSelector(selectSelectedLocation());

  const [heart, setHeart] = useState(false);

  return (
    <div id="Details" style={detailPStyle}>
      <div id="locationInfo" style={locInfoStyle}>
        <div id="infoText">
          <Card sx={{ maxWidth: "60vw" }}>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{ fontSize: 24, flex: 3 }}
                color="black"
                gutterBottom
                component="h1"
              >
                {selectedLocation.info}
              </Typography>
              <div
                id="heartIcon"
                style={{
                  flex: "1",
                  color: `${heart ? "hotpink" : "black"}`,
                }}
                onClick={() => setHeart(heart ? false : true)}
              >
                {heart ? (
                  <FavoriteIcon sx={{ fontSize: 40 }} />
                ) : (
                  <FavoriteBorderIcon sx={{ fontSize: 40 }} />
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Map />
      </div>

      <LocationPictures />
    </div>
  );
}
