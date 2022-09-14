import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { geoCodingAPIKey } from "../config/constants";
import { storeSelectedLocation } from "../store/locations/slice";

export default function LocationCard({ result }) {
  const [locationInfo, setLocationInfo] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getLocationInfo = async () => {
      try {
        //if a location already has an id that means its not necessary to call the geocoding api
        if (result.id) {
          return setLocationInfo({
            info: result.info,
            country_code: result.country_code,
          });
        }

        const response = await axios.get(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${result.dataPoints[0].lat}&lon=${result.dataPoints[0].lon}&type=city&apiKey=${geoCodingAPIKey}`
        );

        const { city, state, county, country, country_code, ...rest } =
          response.data.features[0].properties;

        let info = `${city}, ${county}, ${state}, ${country}`.replace(
          /undefined,/g,
          ""
        );
        console.log("useeffect of lcoationcard", result);
        setLocationInfo({ info, country_code });
      } catch (e) {
        console.log(e.message);
      }
    };

    getLocationInfo();
  }, [result.dataPoints]);

  return (
    <div id="LocationCard">
      <Card
        sx={{ maxWidth: 150 }}
        onClick={() => {
          dispatch(
            storeSelectedLocation({
              ...result,
              info: locationInfo.info,
              country_code: locationInfo.country_code,
            })
          );
          navigate(`/details`);
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={`https://countryflagsapi.com/svg/${locationInfo.country_code}`}
            alt={`flag of ${locationInfo.country}`}
          />

          <CardContent>
            <Typography gutterBottom variant="caption" component="div">
              {locationInfo.info}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
