import { Slideshow } from "@mui/icons-material";
import axios from "axios";
import md5 from "blueimp-md5";

import { useEffect, useState } from "react";

//selectors
import { useSelector } from "react-redux";
import { selectSelectedLocationDataPoints } from "../store/locations/selectors";

export default function LocationPictures() {
  const dataPoints = useSelector(selectSelectedLocationDataPoints());

  const [pics, setPics] = useState([]);
  const [index, setIndex] = useState(0);
  const delay = 2500;

  useEffect(() => {
    const getPics = () => {
      let newPics = [];
      dataPoints.forEach(async (dataP) => {
        try {
          //get the img data for the dataPoints
          const response = await axios.get(
            `https://www.wikidata.org/w/api.php?action=wbgetclaims&property=P18&entity=${dataP.wikiId}&format=json&origin=*
                    `
          );

          //get the filename from response and format
          const fileName =
            response.data.claims.P18[0].mainsnak.datavalue.value.replace(
              / /g,
              "_"
            );

          // final img url
          const url = `https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/${fileName}`;

          const newImg = { url, caption: `${dataP.name}` };
          newPics = [...newPics, newImg];

          setPics(newPics);
        } catch (e) {
          console.log(e);
        }
      });
    };

    getPics();
  }, [dataPoints]);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === pics.length - 1
            ? 0
            : pics.length === 1
            ? 0
            : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  const slideShow = {
    margin: "0 auto",
    overflow: "hidden",
    maxWidth: "300px",
  };
  const slide = {
    display: "inline-block",
    // height: "400px",
    minWidth: "300px",
    borderRadius: "40px",
    position: "relative",
  };

  const sliderStyle = {
    whiteSpace: "nowrap",
    transition: "ease 1000ms",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div className="slideshow" style={slideShow}>
      <div
        className="slideshowSlider"
        style={{
          ...sliderStyle,
          transform: `translate3d(${-index * 100}%, 0, 0)`,
        }}
      >
        {pics.map((pic, index) => {
          return (
            <div className="slide" key={index} style={slide}>
              <img src={pic.url} alt={pic.caption} style={{ width: "300px" }} />
              <p style={{ whiteSpace: "normal" }}>{pic.caption}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
