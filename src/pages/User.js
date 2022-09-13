import { useDispatch, useSelector } from "react-redux";
import { selectUserFavs, selectUserPage } from "../store/user/selectors";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

//components
import { LocationCard, PicAndDescr, Friends } from "../components";
import { getUserPage } from "../store/user/thunks";
import { useState } from "react";

const favStyle = {
  display: "flex",
  gap: "30px",
  flexWrap: "wrap",
  gridColumnStart: "4",
  gridColumnEnd: "7",
  gridRowStart: "4",
  gridRowEnd: "5",
  minHeight: "400px",
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "1fr 5fr 2fr 5fr 5fr 5fr 1fr",
  gridTemplateRows: "1fr 5fr 2fr auto 1fr",
};

export default function User() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const userPage = useSelector(selectUserPage());

  useEffect(() => {
    dispatch(getUserPage(id));
  }, [dispatch, id]);

  return !userPage ? (
    "loading"
  ) : (
    <div id="User" style={gridContainer}>
      <PicAndDescr userPage={userPage} />

      <Friends userPage={userPage} />

      <div id="favList" style={favStyle}>
        {userPage.locations.length < 1 ? (
          <p style={{ color: "#ff6992" }}>
            do a search to see your favorite locations here!
          </p>
        ) : (
          userPage.locations.map((result, index) => {
            return (
              <div className="result" key={index} style={{ margin: "20px 0" }}>
                <LocationCard result={result} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
