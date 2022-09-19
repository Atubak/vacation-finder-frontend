import { Card } from "@mui/material";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { selectRecentLocs } from "../store/locations/selectors";
import { getRecentLocs } from "../store/locations/thunks";
import LocationCard from "./LocationCard";



export default function RecentLocations() {
    const dispatch = useDispatch();
    const recentLocs = useSelector(selectRecentLocs());
    console.log(recentLocs);
    

    useEffect(() => {
        dispatch(getRecentLocs());
    }, []);

    return <div id="RecentLocations"  >
        <Card style={{backgroundColor: "#c3cce3", padding: "20px"}}>

        <h3>these are only some of the locations that users before you have favorited</h3>

        <div id="recentLocDiv" style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
        {recentLocs.length < 1 ? "loading..." : recentLocs.map(loc => {
            return <LocationCard key={loc.id} result={loc} />
        })}    
        </div>
        </Card>
    </div>
}