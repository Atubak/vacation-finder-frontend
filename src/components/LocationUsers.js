import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSelectedLocation } from "../store/locations/selectors";
import { getLocationUsers } from "../store/locations/thunks";

export default function LocationUsers() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedLocation = useSelector(selectSelectedLocation());
  const [showUsers, setShowUsers] = useState(false);

  useEffect(() => {
    if (selectedLocation.locationUsers) return setShowUsers(true);
    dispatch(getLocationUsers(selectedLocation.id));
  }, [dispatch, selectedLocation]);

  return (
    <div id="LocationUsers">
      <Card style={{ padding: "20px" }}>
        <h3>Users that like this Location</h3>
        {!showUsers
          ? "you're the first to discover this location!"
          : selectedLocation?.locationUsers.map((user) => (
              <div
                className="followedUser"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%",
                  minWidth: "200px",
                  padding: "5px",

                  borderBottom: "1px solid #edd273",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/user/${user.user.id}`)}
                key={user.user.id}
              >
                <img src={user.user.imgUrl} alt="" style={{ width: "30px" }} />
                <span style={{ fontWeight: "bolder" }} variant="body2">
                  {user.user.name}
                </span>
              </div>
            ))}
      </Card>
    </div>
  );
}
