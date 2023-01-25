import { Box, Button, CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AboutButton from "../../components/AboutButton/AboutButton";
const About = () => {
  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        background: "#7C1A1B",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          minHeight: 762,
          position: "relative",
        }}
      >
        <Box
          variant="outlined"
          sx={{
            position: "absolute",
            bottom: "5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            px: 3,
            py: 1,
            borderRadius: 18,
            color: "white",
            m: "0 auto",
          }}
        >
          <AboutButton />
        </Box>{" "}
      </Container>
    </Box>
  );
};

export default About;
