//mui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Friends() {
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
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Typography variant="body2">
            list of people this user follows
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
