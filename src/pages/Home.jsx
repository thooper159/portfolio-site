import { Grid, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function Home() {
  const [titleText, setTitleText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(true);
  const [titlesArrayIndex, setTitlesArrayIndex] = useState(0);
  const titlesArray = ["Web Developer", "Software Engineer", "Drexel Graduate"];
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
          Who am I?
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left",
          }}
        >
          I'm a software engineer with a passion for web development. I
          graduated Magna Cum Laude with a Bachelors of Science in Computer
          Science and an Intermediate Korean Proficiency Certificate. I have
          over 2 years of experience across the IT space:
        </Typography>
        <ul
          style={{
            textAlign: "left",
            marginLeft: "auto",
            marginRight: "auto",
            width: "fit-content",
          }}
        >
          <li>Full-stack Developer @ ECFMG</li>
          <li>Project Manager @ ECFMG</li>
          <li>QA Analyst @ iPipeline</li>
          <li>Software Engineering Consultant @ Crew</li>
        </ul>

        {/* having worked at <a href="www.ecfmg.org">ECFMG</a> as a Full-stack
          Developer and previously as a Project Manager, at{" "}
          <a href="https://www.ipipeline.com/">iPipeline</a> as a QA Analyst,and
          currently at
          <Button
            href="https://www.turnberrysolutions.com/crew/"
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNewIcon />}
            textTransform="none"
          >
            Crew
          </Button>
          as a Software Engineering Consultant */}
      </Grid>
    </Grid>
  );
}

export default Home;
