import "./Footer.css";

export default function Footer() {
  return (
    <div
      id="Footer"
      style={{
        backgroundColor: "#c3cce3",
        borderTop: "1px solid",
        height: "50px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        padding: "0 10%",
      }}
    >
      <a
        target="_blank"
        href="https://github.com/chrisveness/geodesy/tree/v1.1.3#latlon-vincentyjs-distances--bearings-on-geodesics"
        rel="noreferrer"
      >
        geodesy
      </a>
      <a target="_blank" href="https://mui.com/" rel="noreferrer">
        mui
      </a>
      <a
        target="_blank"
        href="https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react"
        rel="noreferrer"
      >
        slideshow
      </a>
      <a target="_blank" href="https://leafletjs.com" rel="noreferrer">
        Leaflet
      </a>
      <a
        target="_blank"
        href="https://wweb.dev/resources/animated-css-background-generator/"
        rel="noreferrer"
      >
        Background by Louis Hoebregts
      </a>
      <a target="_blank" href="https://www.geoapify.com/" rel="noreferrer">
        geoapify
      </a>
      <a
        target="_blank"
        href="https://www.countryflagsapi.com"
        rel="noreferrer"
      >
        countryflagsapi
      </a>
      <a
        target="_blank"
        href="https://www.wikidata.org/wiki/Wikidata:Main_Page"
        rel="noreferrer"
      >
        Powered by Wikidata
      </a>
    </div>
  );
}
