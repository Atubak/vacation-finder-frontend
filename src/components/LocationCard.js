import axios from "axios";
import { useEffect, useState } from "react";

//mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { geoCodingAPIKey } from "../config/constants";

export default function LocationCard({ result }) {
  const [locationInfo, setLocationInfo] = useState({});
  console.log("usestate:", locationInfo);

  useEffect(() => {
    const getLocationInfo = async () => {
      try {
        const response = await axios.get(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${result.dataPoints[0].lat}&lon=${result.dataPoints[0].lon}&type=city&apiKey=${geoCodingAPIKey}`
        );
        console.log(response.data.features[0].properties);

        const { city, state, county, country } =
          response.data.features[0].properties;

        setLocationInfo({ city, state, county, country });
      } catch (e) {
        console.log(e.message);
      }
    };

    getLocationInfo();
  }, [result.dataPoints]);

  return (
    <div id="LocationCard">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          {/* <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${locationInfo.city}, ${
                locationInfo.state || locationInfo.county
              }, ${locationInfo.country}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
