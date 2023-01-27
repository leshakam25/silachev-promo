import { Box, Button, CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AboutButton from "../../components/AboutButton/AboutButton";
const About = () => {
  return (
    <Box
      id="about"
      sx={{ width: "100%", minHeight: 670, background: "transparent" }}
    >
      <Container
        maxWidth="xl"
        sx={{
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
            top: 400,
            left: "50%",
            transform: "translate(-50%, -50%)",
            px: 3,
            py: 1,
            borderRadius: 18,
            color: "white",
            m: "0 auto",
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
