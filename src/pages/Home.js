import { Link } from "react-router-dom";

import iconColor from "../icons/logocow-color.png";

//mui
import Fab from "@mui/material/Fab";
import { Card } from "@mui/material";
import { RecentLocations } from "../components";

export default function Home() {
  return (
    <div
      id="Homepage"
      style={{
        padding: "50px 30%",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <div id="bigButton" style={{}}>
        <Link
          to={"/search"}
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <Fab
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "#96a7cf",
              color: "#ffffff",
            }}
          >
            Start Searching
          </Fab>
        </Link>
        <br />
        <small style={{ color: "#5d5957" }}>no account needed to search</small>
      </div>
      <div id="introductoryDiv">
        <Card style={{ backgroundColor: "#c3cce3" }}>
          <h1>Find Your Perfect Vacation Spot Now!</h1>
          <img
            src={iconColor}
            alt="you'll see something exciting here when I decide what it should be"
            height="200px"
          />
          <p>Discover the new vacation spots that you never knew existed.</p>
        </Card>
      </div>
      <RecentLocations />
      <div id="persuasionDiv">
        <Card style={{ backgroundColor: "#96a7cf" }}>
          <h2>Make an account to save your new vacation spots</h2>
        </Card>
      </div>
    </div>
  );
}
