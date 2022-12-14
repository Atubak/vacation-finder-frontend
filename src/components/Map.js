import { useEffect, useState } from "react";
import axios from "axios";

//leaflet
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

//selectors
import { useSelector } from "react-redux";
import { selectSelectedLocation } from "../store/locations/selectors";

export default function Map() {
  const selectedLocation = useSelector(selectSelectedLocation());

  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (selectedLocation?.dataPoints) return setShowMap(true);
  }, [selectedLocation]);

  return (
    <div id="Map">
      {!showMap ? (
        "loading..."
      ) : (
        <MapContainer
          style={{
            border: "2px solid",
            borderRadius: "10px",
            height: "500px",
            width: "500px",
            // maxWidth: "1000px",
            // maxHeight: "500px",
            // margin: "0px 19.5%",
          }}
          center={[
            selectedLocation.dataPoints[0].lat,
            selectedLocation.dataPoints[0].lon,
          ]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {selectedLocation.dataPoints.map((dataP) => (
            // the marker is every pointer you see on the map
            <Marker key={dataP.wikiId} position={[dataP.lat, dataP.lon]}>
              {/* when we click on the marker, we see the popup */}
              <Popup>
                <p>
                  {dataP.name}, {dataP.cat}
                </p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
}
