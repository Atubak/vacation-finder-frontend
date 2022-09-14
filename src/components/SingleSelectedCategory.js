import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";

import { useDispatch } from "react-redux";
import { removeQueryCategory } from "../store/locations/slice";
import { useState } from "react";

export default function SingleSelectedCategory({ cat }) {
  const dispatch = useDispatch();

  const [clearBtn, setClearBtn] = useState(false);

  return (
    <div
      className="SingleSelectedCategory"
      style={{ width: "100%", margin: "10px auto" }}
    >
      <Button
        style={{ color: "#6c85bd", backgroundColor: "#fcfcfd" }}
        variant="contained"
        onMouseEnter={() => setClearBtn(true)}
        onMouseLeave={() => setClearBtn(false)}
        onClick={() => dispatch(removeQueryCategory(cat))}
      >
        {cat}
        {clearBtn ? <ClearIcon /> : ""}
      </Button>
    </div>
  );
}
