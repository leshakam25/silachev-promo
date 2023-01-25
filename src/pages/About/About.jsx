import { Box, Button, CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AboutButton from "../../components/AboutButton/AboutButton";
const About = () => {
  return (
    <Box
      id="about"
      sx={{
        mt: -8,
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
        {/* <CardMedia
          component="img"
          src="https://i.postimg.cc/Z5QFFB1x/photo-2023-01-25-14-48-14.jpg"
          sx={{
            position: "absolute",
            maxWidth: "800px",
            maxHeight: "500px",
            top: "50%",
            opacity: "0.8",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        /> */}
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
