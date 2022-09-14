import { useSelector } from "react-redux";
import {
  // selectQueryCategories,
  selectQueryResults,
  selectResultsAmt,
} from "../store/locations/selectors";

//components
import { LocationCard } from "../components";

//selectors

//thunks/actions

import SelectedCategories from "../components/SelectedCategories";

export default function Results() {
  const queryResults = useSelector(selectQueryResults());
  const resultsAmt = useSelector(selectResultsAmt());
  // const chosenCategories = useSelector(selectQueryCategories());

  return (
    <div id="Resultspage">
      <div id="resultsAmount">
        <h2>
          Found {resultsAmt ?? 0} location{resultsAmt < 1 ? "" : "s"}
        </h2>
        {resultsAmt > 5 ? (
          <p>click "generate search" again if you want a new selection</p>
        ) : (
          ""
        )}
      </div>

      <div
        id="resultsAndCats"
        style={{
          display: "flex",
          justifyContent: "space-around",
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
                <div
                  className="result"
                  key={index}
                  style={{ margin: "20px 0" }}
                >
                  <LocationCard result={result} />
                </div>
              );
            })
          )}
        </div>

        <SelectedCategories style={{ flex: 2 }} />
      </div>
    </div>
  );
}
