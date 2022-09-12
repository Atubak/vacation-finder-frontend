import { useSelector } from "react-redux";
import { selectUserFavs } from "../store/user/selectors";

//components
import { LocationCard, PicAndDescr, Friends } from "../components";

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
  const userFavs = useSelector(selectUserFavs());

  console.log(userFavs);
  return (
    <div id="User" style={gridContainer}>
      <PicAndDescr />

      <Friends />

      <div id="favList" style={favStyle}>
        {/* list all your fav locations here with the same cards as on the results page, also stored in db, need all locations of user including all datapoints */}

        {userFavs.length < 1 ? (
          <p style={{ color: "#ff6992" }}>
            do a search to see your favorite locations here!
          </p>
        ) : (
          userFavs.map((result, index) => {
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
