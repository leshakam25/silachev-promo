import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const pages = [
  { id: 0, title: "О себе", link: "/" },
  { id: 1, title: "Услуги", link: "services" },
  { id: 2, title: "Кейсы", link: "cases" },
  { id: 3, title: "Контакты", link: "contacts" },
];
const companyName = "IGOR SILACHEV";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
      position="sticky"
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          disableGutters
        >
          {/* LOGO */}{" "}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "BarcadeBrawlRegular",
              color: "#0a0a0a",
              textDecoration: "none",
              fontSize: 32,
              opacity: 0.7,
            }}
          >
            {companyName}
          </Typography>
          {/* burger menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{ color: "#1B263B" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                opacity: 0.8,
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.id}
                  sx={{
                    color: "#0a0a0a",
                    fontFamily: "BarcadeBrawlRegular",
                    display: "block",
                    fontSize: 10,
                    margin: "10px 8px",
                  }}
                >
                  <NavLink
                    style={{
                      color: "inherit",
                    }}
                    onClick={handleCloseNavMenu}
                    to={page.link}
                  >
                    {page.title}
                  </NavLink>
                </Button>
              ))}
            </Menu>
          </Box>
          {/* mobile logo */}
          <Typography
            variant="h5"
            noWrap
            href="#"
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "BarcadeBrawlRegular",
              fontWeight: 700,
              fontSize: 16,
              color: "#0a0a0a",
              textDecoration: "none",
            }}
          >
            {companyName}
          </Typography>
          {/* desktop menu */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                style={{
                  color: "inherit",
                }}
                key={page.id}
                to={page.link}
              >
                <Button
                  sx={{
                    color: "#0a0a0a",
                    display: "block",
                    fontFamily: "BarcadeBrawlRegular",
                    opacity: "0.6",
                    borderRadius: "4px",
                    margin: "0 10px",
                    padding: "10px",
                    border: "4px dotted #0a0a0a",
                    ":hover": { border: "4px dotted white", color: "white" },
                  }}
                >
                  {page.title}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
