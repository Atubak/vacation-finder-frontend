import { useSelector } from "react-redux";
import {
  // selectQueryCategories,
  selectQueryResults,
} from "../store/locations/selectors";

//components
import { LocationCard } from "../components";

//selectors

//thunks/actions

import SelectedCategories from "../components/SelectedCategories";

export default function Results() {
  const queryResults = useSelector(selectQueryResults());
  // const chosenCategories = useSelector(selectQueryCategories());

  return (
    <div
      id="Resultspage"
      style={{
        display: "flex",
        justifyContent: "space-around",
        height: `calc(100vh - 64px - 20px)`,
      }}
    >
      <div
        id="resultsDiv"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          maxWidth: "650px",
          justifyContent: "center",
          padding: "50px 0px",
        }}
      >
        {/* consist of a list of cards with each location and some basic info */}
        {/* locations should have a like button on them, might be good to make it a component so that details page can also use it */}
        {typeof queryResults === "string" ? (
          <p>{queryResults}, try removing it</p>
        ) : (
          queryResults.map((result, index) => {
            return (
              <div className="result" key={index} style={{ margin: "20px 0" }}>
                <LocationCard result={result} />
              </div>
            );
          })
        )}
      </div>

      <SelectedCategories style={{ flex: 2 }} />
    </div>
  );
}
