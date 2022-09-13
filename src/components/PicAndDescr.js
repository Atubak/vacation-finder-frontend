import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selectors";

//mui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Modal, Box } from "@mui/material";

//thunks/actions
import { postDescr, postPic } from "../store/user/thunks";

export default function PicAndDescr({ userPage }) {
  const profile = useSelector(selectUser());
  const dispatch = useDispatch();

  //state
  const [descrPopUp, setDescrPopUp] = useState(false);
  const [descr, setDescr] = useState(userPage?.description || "");

  const submit = (e) => {
    e.preventDefault();
    setDescrPopUp(false);
    dispatch(postDescr(descr));
    setDescr("");
  };

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
        {profile.id === userPage.id ? (
          <input
            type="file"
            onChange={uploadImage}
            style={{ position: "absolute", bottom: "-20px" }}
          />
        ) : (
          ""
        )}

        <img
          src={
            userPage?.imgUrl ||
            "https://i.pinimg.com/originals/6a/7b/0b/6a7b0b15659ff7b51efa21ab9d5f49da.jpg"
          }
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
              justifyContent: "left",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Typography variant="body2">{userPage?.description}</Typography>
          </CardContent>
          <CardActions
            style={{ display: "flex", justifyContent: "flex-end", flex: "1" }}
          >
            {profile.id === userPage.id ? (
              <Button onClick={() => setDescrPopUp(true)} size="small">
                Edit
              </Button>
            ) : (
              ""
            )}
          </CardActions>
        </Card>
      </div>

      <Modal
        open={descrPopUp}
        onClose={() => setDescrPopUp(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // width: 200,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <form onSubmit={submit}>
            <textarea
              name="descr"
              id="descr"
              cols="30"
              rows="10"
              placeholder="write down whatever you want here"
              onChange={(e) => setDescr(e.target.value)}
              value={descr}
            ></textarea>
            <br />
            <Button type="submit">Submit</Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}
