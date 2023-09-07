import { Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

function Home() {
  const [titleText, setTitleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(true);
  const [titlesArrayIndex, setTitlesArrayIndex] = useState(0);
  const titlesArray = [
    "Web Developer",
    "Software Engineer",
    "Salesforce Developer",
    "Drexel University Graduate",
  ];
  return (
    <Grid
      container
      component="main"
      maxWidth="xs"
      sx={{ flexGrow: 1 }}
      textAlign={"center"}
      alignItems={"center"}
    >
      <Grid item xs={3}>
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
        <Typography variant="h5" component="div" id="title">
          {titleText}
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <p>short bio</p>
      </Grid>
    </Grid>
  );
}

export default Home;
