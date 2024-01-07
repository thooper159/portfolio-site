import React, { Component } from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Avatar,
  Button,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import portfolioItems from "../portfolio.json";

function Portfolio() {
  let TAG_AVATARS = {
    React:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FReact_logo_logotype_emblem.png&f=1&nofb=1&ipt=a54ecd8e2a798e339f7a1406365766caf0d1145da1d3d0378caced78180f28f0&ipo=images",
    JavaScript:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Font_Awesome_5_brands_js.svg/800px-Font_Awesome_5_brands_js.svg.png",
    Java:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dOlD2CRS-B9qC7C1GsZ4XQHaHa%26pid%3DApi&f=1&ipt=b570c8bffd701295c49490331d175a79b738bb91be955b8d45330992090a9f11&ipo=images",
    HTML:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fp7.hiclipart.com%2Fpreview%2F1005%2F511%2F631%2Fweb-development-html-logo-world-wide-web-consortium-create-html-signature.jpg&f=1&nofb=1&ipt=c1bd65495f0dcc909e433e555b4d4c780102db841ca630f1b891fb0950c81d2e&ipo=images",
    CSS:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fcss3-logo-png-transparent.png&f=1&nofb=1&ipt=0cff938e60c5b53f0b0b5680be86aa8114938a4bc2017fb07f5e79ede5404ddf&ipo=images",
    TypeScript:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*mn6bOs7s6Qbao15PMNRyOA.png&f=1&nofb=1&ipt=a4f3255d4a1fae6a66cdd6e07f1fe712d7f026a5f290089b883eadf758663973&ipo=images",
    Python: "https://upload.wikimedia.org/wikipedia/commons/7/79/Ciasur.png",
    C: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    NextJS:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.mFuXoMcAqbvUwjDjwTkFHAHaHa%26pid%3DApi&f=1&ipt=a1d08e7f28ead2be73ffa90aac9133a9c62dbc768f475277b525ae21020b7380&ipo=images",
    MongoDB:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.l_5RrXvfEAXihZJw0ynvcQHaIk%26pid%3DApi&f=1&ipt=a94863bf43aaeb6204decd0111ff8ea15ed6bb2661b92b3b833bce9f3c668109&ipo=images",
    "Material UI":
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*5J2noO7t-nMhJNmqvq4wYg.png&f=1&nofb=1&ipt=ccc8ee0e2bd97fdb06ec2d085ffa42748e7f6326a0c8caee74e33cbbbacc23ee&ipo=images",
    SQLite:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fozgurozkok.com%2Fwp-content%2Fuploads%2F2016%2F06%2Fsqlite.jpeg&f=1&nofb=1&ipt=74d4148d570770deeb1e570d86fb267eb25b842d76fc9951c740c9ddb8bfe5d8&ipo=images",
  };
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
        Projects I've Worked On
      </Typography>
      <Grid
        container
        spacing={2}
        rowGap={2}
        sx={{
          display: "flex",
          margin: "auto",
          alignItems: "stretch",
          width: "80%",
        }}
      >
        {portfolioItems.map((item) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={4}
            sx={{
              display: "flex",
            }}
          >
            <Card
              sx={{
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                minWidth: "auto",
              }}
            >
              <CardMedia
                sx={{
                  height: "300px",
                  width: "auto",
                  margin: "auto",
                }}
                image={item.image}
                title={item.title}
              ></CardMedia>
              <CardContent>
                <>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                    <Typography variant="body2" color="text.secondary">
                      {item.year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.links &&
                        item.links.map((link) => (
                          <Button
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<OpenInNewIcon />}
                            size={"small"}
                          >
                            {link.label}
                          </Button>
                        ))}
                    </Typography>
                  </Typography>
                </>

                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <br></br>
                <Typography variant="body2" color="text.secondary">
                  {item.tags &&
                    item.tags.map((tag) => (
                      <Chip
                        avatar={<Avatar src={TAG_AVATARS[tag]} alt={tag} />}
                        label={tag}
                      />
                    ))}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Portfolio;
