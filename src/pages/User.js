import { useDispatch, useSelector } from "react-redux";
import {
  selectUserFavs,
  selectUserPage,
  selectUser,
} from "../store/user/selectors";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

//mui
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";

//components
import { LocationCard, PicAndDescr, Friends } from "../components";
import { addFollow, getUserPage } from "../store/user/thunks";
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

  const profile = useSelector(selectUser());
  const userPage = useSelector(selectUserPage());

  const [addIcon, setAddIcon] = useState(true);

  useEffect(() => {
    dispatch(getUserPage(id));
  }, [dispatch, id]);

  useEffect(() => {
    //if the user doesnt follow any user yet, skip this useEffect
    if (profile.followedUser.length < 1) return setAddIcon(true);

    //if the user is already being followed, make the btn show a remove icon
    if (!profile.followedUser.every((el) => el.id !== userPage?.id))
      return setAddIcon(false);
  }, [profile.followedUser, userPage?.id]);

  return !userPage ? (
    "loading"
  ) : (
    <div id="User" style={gridContainer}>
      <PicAndDescr userPage={userPage} />

      <Friends userPage={userPage} />

      {addIcon ? (
        <PersonAddAlt1Icon
          style={{
            gridColumnStart: "2",
            gridColumnEnd: "3",
            gridRowStart: "2",
            gridRowEnd: "3",
            cursor: "pointer",
            zIndex: "2",
            margin: "10px",
          }}
          onClick={() => dispatch(addFollow(userPage.id))}
        />
      ) : (
        <PersonRemoveAlt1Icon
          style={{
            gridColumnStart: "2",
            gridColumnEnd: "3",
            gridRowStart: "2",
            gridRowEnd: "3",
            cursor: "pointer",
            zIndex: "2",
            margin: "10px",
          }}
          onClick={() => dispatch(addFollow(userPage.id))}
        />
      )}

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
