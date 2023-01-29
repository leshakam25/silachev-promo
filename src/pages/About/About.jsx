import { Box, Button, CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AboutButton from "../../components/AboutButton/AboutButton";

const About = () => {
  return (
    <Box
      id="about"
      sx={{ width: "100%", height: "88%", background: "transparent" }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          height: "100%",
        }}
      >
        <Box
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <AboutButton />
        </Box>{" "}
      </Container>
    </Box>
  );
};

export default About;
