import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";

//selectors
import {
  selectAllCategories,
  selectQueryCategories,
} from "../store/locations/selectors";

//actions/thunks
import { getAllCategories } from "../store/locations/thunks";
import { storeQueryCategories } from "../store/locations/slice";
import SelectedCategories from "../components/SelectedCategories";

//style
const btnStyle = {
  backgroundColor: "#6c85bd",
};

export default function Search() {
  const dispatch = useDispatch();

  const allCategories = useSelector(selectAllCategories());
  const chosenCategories = useSelector(selectQueryCategories());

  useEffect(() => {
    //this should stay when removing stuff for selectedCategories
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div
      id="Searchpage"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <div id="categorySelection">
        <h3>Click on the categories you want at your ~VacaLoca~</h3>
        {/* should get a list of all cats from redux on pageload and then map over it to render them on page, might need to be a different component*/}
        <div
          id="allCategories"
          style={{
            height: "700px",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          {allCategories.map((cat, index) => {
            return (
              <div
                className="searchCategory"
                key={index}
                style={{
                  margin: "10px 0",
                }}
              >
                <Button
                  style={btnStyle}
                  variant="contained"
                  onClick={(e) => {
                    dispatch(storeQueryCategories(cat));
                  }}
                  disabled={chosenCategories.includes(cat)}
                >
                  {cat}
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      <SelectedCategories />
    </div>
  );
}
