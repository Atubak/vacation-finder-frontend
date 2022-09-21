import { useNavigate } from "react-router-dom";

//mui
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function Friends({ userPage }) {
  const navigate = useNavigate();

  return (
    <div
      id="Friends"
      style={{
        gridColumnStart: "2",
        gridColumnEnd: "3",
        gridRowStart: "4",
        gridRowEnd: "5",
      }}
    >
      {/* insert a list of friends here, needs a db req */}
      {/* each friend is ideally clickable */}

      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent
          style={{
            flex: "4",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {userPage.followedUser.length < 1
            ? "here you will see followed users"
            : userPage.followedUser.map((user) => {
                return (
                  <div
                    className="followedUser"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      width: "100%",
                      padding: "5px",
                      borderBottom: "1px solid #edd273",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`/user/${user.id}`)}
                    key={user.id}
                  >
                    <img src={user.imgUrl} alt="" style={{ width: "30px" }} />
                    <Typography
                      style={{ fontWeight: "bolder" }}
                      variant="body2"
                    >
                      {user.name}
                    </Typography>
                  </div>
                );
              })}
        </CardContent>
      </Card>
    </div>
  );
}
