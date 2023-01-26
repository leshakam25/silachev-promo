import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { contacts } from "../../data/data";
import ContactCard from "../../components/ContactCard/ContactCard";
import BlockTitle from "../../components/BlockTitle/BlockTitle";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0D1B2A",
        pt: 1,
        mt: 2,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            py: 2,
            maxWidth: 500,
            width: "100%",
            m: "0 auto",
          }}
        >
          {contacts &&
            contacts.map((el) => (
              <ContactCard
                key={el.id}
                link={el.link}
                title={el.title}
                icon={el.icon}
              />
            ))}{" "}
          <Typography
            component="div"
            color="white"
            sx={{
              fontFamily: "Sofia Sans",
              opacity: 0.3,
              fontSize: 12,
              maxWidth: 350,
            }}
          >
            *В России деятельность принадлежащих Meta Platforms (признана
            экстремистской организацией) запрещена.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
