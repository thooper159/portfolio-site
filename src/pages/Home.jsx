import { Grid, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function Home() {
  const [titleText, setTitleText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(true);
  const [titlesArrayIndex, setTitlesArrayIndex] = useState(0);

  const titlesArray = ["Web Developer", "Software Engineer", "Drexel Graduate"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setTitleText((prev) => prev.slice(0, -1));
      } else if (titleText.length < titlesArray[titlesArrayIndex].length) {
        setTitleText(
          (prev) => prev + titlesArray[titlesArrayIndex][prev.length]
        );
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
          {showCursor ? (
            <span style={{ color: "lightblue" }}>|</span>
          ) : (
            <span>&nbsp;</span>
          )}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography
          variant="h2"
          component="div"
          sx={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          About me
        </Typography>
        <Typography
          variant="h4"
          component="div"
          sx={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left",
          }}
        >
          My name is Tyler Hooper and I'm a software engineer with a passion for web and cloud development. I
          graduated Magna Cum Laude with a Bachelors of Science in Computer
          Science and an Intermediate Korean Proficiency Certificate. I have
          over 3 years of experience across the IT space:
        </Typography>
        <br/>
        <ul
          style={{
            textAlign: "left",
            marginLeft: "auto",
            marginRight: "auto",
            width: "fit-content",
          }}
        >
          <Typography variant="h4">
            ※ Software Engineering Consultant @ Crew
          </Typography>
          <Typography variant="h4">※ Full-stack Developer @ ECFMG</Typography>
          <Typography variant="h4">※ Project Manager @ ECFMG</Typography>
          <Typography variant="h4">※ QA Analyst @ iPipeline</Typography>
          
        </ul>
      </Grid>
    </Grid>
  );
}

export default Home;
