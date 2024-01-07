import { Container, Typography, ImageList, ImageListItem } from "@mui/material";
import { useState } from "react";

function Gallery() {
  const [photos, setPhotos] = useState([]);
  return (
    <>
      <Typography
        variant="h3"
        component="div"
        sx={{
          textAlign: "center",
          margin: "auto",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        Photos I've Taken
      </Typography>
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {/* {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))} */}
      </ImageList>
    </>
  );
}

export default Gallery;
