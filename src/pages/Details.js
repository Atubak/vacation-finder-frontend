import { useEffect, useState } from "react";
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

import { useSelector, useDispatch } from "react-redux";
//selectors
import { selectSelectedLocation } from "../store/locations/selectors";
import { selectUser } from "../store/user/selectors";

//actions / thunks
import { postFav } from "../store/locations/thunks";

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
  const dispatch = useDispatch();
  const selectedLocation = useSelector(selectSelectedLocation());
  const profile = useSelector(selectUser());

  const [heart, setHeart] = useState(false);

  useEffect(() => {
    if (!profile) return setHeart(false);
    const locIdArray = profile?.locations.map((loc) => loc.id);

    locIdArray?.every((locId) => locId !== selectedLocation.id)
      ? setHeart(false)
      : setHeart(true);
  }, [selectedLocation, profile?.locations, profile]);

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
                  color: `${heart ? "#ff6992" : "black"}`,
                  cursor: "pointer",
                }}
                onClick={() => dispatch(postFav())}
              >
                {!profile ? (
                  ""
                ) : heart ? (
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
