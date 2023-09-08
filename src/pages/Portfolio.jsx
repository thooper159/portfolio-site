import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Avatar,
} from "@mui/material";

function Portfolio() {
  let portfolioItems = [
    {
      title: "Player 2 (Senior Design Project)",
      year: "2022-2023",
      description: `A social networking and team building application for gamers. I worked alongside other developers from Drexel Unviersity to integrate the mobile application into a web application. We won first place among the Senior Projects in the Corporate Sponsored category.`,
      image: "https://44.209.53.159.nip.io/media/1682455679_8_P2_Banner.png",
      tags: ["TypeScript", "Java", "React", "NextJS"],
      links: [
        {
          label: "Dynasty 11 Studios",
          url: "https://dynasty11.com/",
        },
        {
          label: "Player 2",
          url: "https://player2app.com/",
        },
        {
          label: "Senior Project Site",
          url: "https://senior-project-drexel.web.app/projects/21/",
        },
      ],
    },
  ];
  let TAG_AVATARS = {
    React:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FReact_logo_logotype_emblem.png&f=1&nofb=1&ipt=a54ecd8e2a798e339f7a1406365766caf0d1145da1d3d0378caced78180f28f0&ipo=images",
    JavaScript:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Font_Awesome_5_brands_js.svg/800px-Font_Awesome_5_brands_js.svg.png",
    Java: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dOlD2CRS-B9qC7C1GsZ4XQHaHa%26pid%3DApi&f=1&ipt=b570c8bffd701295c49490331d175a79b738bb91be955b8d45330992090a9f11&ipo=images",
    HTML: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fp7.hiclipart.com%2Fpreview%2F1005%2F511%2F631%2Fweb-development-html-logo-world-wide-web-consortium-create-html-signature.jpg&f=1&nofb=1&ipt=c1bd65495f0dcc909e433e555b4d4c780102db841ca630f1b891fb0950c81d2e&ipo=images",
    CSS: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fcss3-logo-png-transparent.png&f=1&nofb=1&ipt=0cff938e60c5b53f0b0b5680be86aa8114938a4bc2017fb07f5e79ede5404ddf&ipo=images",
    TypeScript:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*mn6bOs7s6Qbao15PMNRyOA.png&f=1&nofb=1&ipt=a4f3255d4a1fae6a66cdd6e07f1fe712d7f026a5f290089b883eadf758663973&ipo=images",
    Python: "https://upload.wikimedia.org/wikipedia/commons/7/79/Ciasur.png",
    C: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    NextJS:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.mFuXoMcAqbvUwjDjwTkFHAHaHa%26pid%3DApi&f=1&ipt=a1d08e7f28ead2be73ffa90aac9133a9c62dbc768f475277b525ae21020b7380&ipo=images",
  };
  return (
    <Grid
      container
      spacing={2}
      rowGap={2}
      sx={{
        display: "flex",
        margin: "auto",
        alignItems: "center",
        width: "80%",
      }}
    >
      {portfolioItems.map((item) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            justifyContent: "center",
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
                </Typography>
              </>

              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
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
  );
}

export default Portfolio;
