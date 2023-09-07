import { Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

function Home() {
  const [titleText, setTitleText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(true);
  const [titlesArrayIndex, setTitlesArrayIndex] = useState(0);
  const titlesArray = [
    "Web Developer",
    "Software Engineer",
    "Drexel Graduate",
  ];
  //I want to change the title text every 3 seconds.
  // the phases should go as follows:
  // phase 1: typing out the title
  // phase 2: after the title is typed out, wait 3 seconds
  // phase 3: backspace the title
  // repeat
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setTitleText((prev) => prev.slice(0, -1));
      } else if (titleText.length < titlesArray[titlesArrayIndex].length) {
        setTitleText((prev) => prev + titlesArray[titlesArrayIndex][prev.length]);
      }
    }, 50);
    return () => clearTimeout(timeout);
  }, [titleText, isDeleting, titlesArrayIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (titleText.length === 0) {
          setIsDeleting(false);
          setTitlesArrayIndex((prev) => (prev + 1) % titlesArray.length);
        }
      } else {
        if (titleText.length === titlesArray[titlesArrayIndex].length) {
          setIsDeleting(true);
        }
      }
    }, 2000);
    return () => clearTimeout(timeout);
  }, [titleText, isDeleting, titlesArrayIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout);
  }, [showCursor]);

  return (
    <Grid
      container
      component="main"
      maxWidth="xs"
      sx={{ flexGrow: 1 }}
      textAlign={"center"}
      alignItems={"center"}
    >
      <Grid item xs={4}>
        <img
          src="https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg"
          alt="Tyler Hooper"
          style={{
            width: "75%",
            borderRadius: "5%",
            border: "4px solid white",
          }}
        />
        <Typography variant="h3" component="div">
          Tyler Hooper
        </Typography>
        <Typography
          variant="h5"
          component="div"
          id="title"
          minHeight={36}
          minWidth={300}
        >
          {titleText}
          {showCursor ? <span style={{color: "lightblue"}}>|</span> : <span>&nbsp;</span>}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h2" component="div">
        Hello there!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Home;
