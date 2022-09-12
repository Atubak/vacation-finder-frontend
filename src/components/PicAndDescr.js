import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selectors";

//mui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { postPic } from "../store/user/thunks";

export default function PicAndDescr() {
  const profile = useSelector(selectUser());
  const dispatch = useDispatch();

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    //first parameter is always upload_preset, second is the name of the preset
    data.append("upload_preset", "ymwc2xyb");

    //post request to Cloudinary, remember to change to your own link
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/djsz833wc/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    console.log("file", file); //check if you are getting the url back
    dispatch(postPic(file.url));
    //setImage(file.url) //put the url in local state, next step you can send it to the backend
  };

  return (
    <>
      {/* when clicking on either the image or the description, might be nice to be able to change the info */}
      <div
        id="userImg"
        style={{
          gridColumnStart: "2",
          gridColumnEnd: "3",
          gridRowStart: "2",
          gridRowEnd: "3",
          position: "relative",
          cursor: "pointer",
        }}
        onClick={() => console.log("hellooo")}
      >
        <input
          type="file"
          onChange={uploadImage}
          style={{ position: "absolute", bottom: "-20px" }}
        />

        <img
          src={profile.imgUrl}
          alt="your nice face"
          style={{
            border: "4px solid #edd273",
            borderRadius: "15px",
            maxHeight: "250px",
            minHeight: "250px",
            maxWidth: "350px",
          }}
        />
      </div>
      <div
        id="userDescription"
        style={{
          gridColumnStart: "4",
          gridColumnEnd: "7",
          gridRowStart: "2",
          gridRowEnd: "3",
        }}
      >
        <Card
          sx={{
            minWidth: "400px",
            minHeight: "200px",
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
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
            <h2
              style={{
                color: "red",
                position: "absolute",
                top: "30%",
                transform: "rotate(340deg)",
              }}
            >
              COMING SOON
            </h2>
          </CardContent>
          <CardActions
            style={{ display: "flex", justifyContent: "flex-end", flex: "1" }}
          >
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
