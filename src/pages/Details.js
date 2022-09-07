export default function Details() {
  return (
    <div id="Details">
      <div id="locationInfo">
        <div id="townName">
          {/* <h1>THIS SHOULD BE THE NAME OF THE CLOSEST TOWN, MIGHT NEED GOOGLE MAPS API</h1> */}
          <button>Like Button</button>
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
