import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import CollectionsIcon from '@mui/icons-material/Collections';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Navbar() {

  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Box>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={() => navigate("/")}
            >
              <HomeIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={() => navigate("/portfolio")}
            >
              <FolderSpecialIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={() => navigate("/gallery")}
            >
              <CollectionsIcon />
            </IconButton>
            
          </Box>
          {/* Centered Typography */}
          <Box flexGrow={1} textAlign="center">
            <Typography variant="h5" component="div">
              tylers.works
            </Typography>
          </Box>
          <Box>
            <IconButton
              color="inherit"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/tyler-hooper/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="GitHub"
              href="https://github.com/thooper159"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="GitHub"
              href="mailto:tylerhoopr@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
