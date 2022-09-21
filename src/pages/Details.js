import { useEffect, useState } from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

//components
import { LocationPictures, Map, LocationUsers } from "../components";

import { useSelector, useDispatch } from "react-redux";
//selectors
import { selectSelectedLocation } from "../store/locations/selectors";
import { selectUser } from "../store/user/selectors";

//actions / thunks
import { postFav } from "../store/locations/thunks";

const locInfoStyle = {
  margin: "50px",
};

const detailPStyle = {
  width: "80vw",
  margin: "0 auto",
};

export default function Details() {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(selectSelectedLocation());
  const profile = useSelector(selectUser());

  const [heart, setHeart] = useState(false);

  useEffect(() => {
    if (!profile) return setHeart(false);
    const locIdArray = profile?.locations?.map((loc) => loc.id);

    if (!locIdArray) return setHeart(false);

    locIdArray?.every((locId) => locId !== selectedLocation.id)
      ? setHeart(false)
      : setHeart(true);
  }, [selectedLocation, profile?.locations, profile]);

  return (
    <div id="Details" style={detailPStyle}>
      {!selectedLocation.info ? (
        "oops something went wrong!"
      ) : (
        <>
          <div id="locationInfo" style={locInfoStyle}>
            <Card style={{ width: "100%", margin: "0 auto" }}>
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
                    <p
                      style={{
                        color: "#96a7cf",
                        backgroundColor: "#edd273",
                        padding: "5px 0px",
                        borderRadius: "10px",
                        cursor: "default",
                        margin: "0",
                      }}
                    >
                      you need to be logged in to save locations
                    </p>
                  ) : heart ? (
                    <FavoriteIcon sx={{ fontSize: 40 }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ fontSize: 40 }} />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          <div
            id="MapAndLocUsersAndPics"
            style={{
              display: "flex",
              marginBottom: "50px",
              gap: "40px",
              justifyContent: "space-around",
              height: "500px",
            }}
          >
            <Map />

            <div
              id="LocationUsersAndPics"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <LocationPictures />
              <LocationUsers />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
