import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

//material ui
import { Modal, Box, CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";

//selectors
import {
  selectQueryCategories,
  selectQueryResults,
} from "../store/locations/selectors";

//thunks/actions
import { getResults } from "../store/locations/thunks";
import { useNavigate } from "react-router-dom";
import { clearResults } from "../store/locations/slice";

//components
import SingleSelectedCategory from "./SingleSelectedCategory";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function SelectedCategories() {
  const chosenCategories = useSelector(selectQueryCategories());
  const queryResults = useSelector(selectQueryResults());

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //state
  const [open, setOpen] = useState(false);
  const [allowNavigation, setAllowNavigation] = useState(false);

  useEffect(() => {
    //only when the search button is clicked, and results are filled, navigate to results page
    if (allowNavigation && queryResults.length > 0) {
      setOpen(false);
      navigate("/results");
    }
  }, [dispatch, navigate, allowNavigation, queryResults]);

  return (
    <div id="selectedCategories">
      <h4>Categories selected: </h4>
      {/* insert here a list of all clicked cats, same as above */}
      {/* should be possible to remove them */}
      {chosenCategories.map((cat, index) => {
        return <SingleSelectedCategory key={index} cat={cat} />;
      })}
      <Button
        style={{ color: "#5d5957", borderColor: "#6c85bd" }}
        variant="outlined"
        disabled={chosenCategories < 1 ? true : false}
        onClick={() => {
          setOpen(true);
          setAllowNavigation(true);
          dispatch(clearResults());
          dispatch(getResults());
        }}
      >
        GENERATE SEARCH
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CircularProgress />
        </Box>
      </Modal>
    </div>
  );
}
