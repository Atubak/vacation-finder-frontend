import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useSelector } from "react-redux";
import { selectSelectedLocation } from "../store/locations/selectors";

export default function Details() {
  const selectedLocation = useSelector(selectSelectedLocation());

  const [heart, setHeart] = useState(false);

  return (
    <div id="Details">
      <div id="locationInfo">
        <div id="infoText">
          <Card sx={{ maxWidth: 575 }}>
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
                  color: `${heart ? "pink" : "black"}`,
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
        <div id="locationMap">
          {/* show a map with all location points on it and info on click/hover, perhaps leaflet  https://portfolio-utils.netlify.app/leaflet */}
        </div>
        <div id="booking">
          <h3>Check out some accomodations on booking.com here</h3>
          {/* can show a booking.com api insert here, have to create an affiliate link */}
        </div>
      </div>
    </div>
  );
}
