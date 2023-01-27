import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { contacts } from "../../data/data";
import ContactCard from "../../components/ContactCard/ContactCard";
import BlockTitle from "../../components/BlockTitle/BlockTitle";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "transparent",
        width: "100%",
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
            maxWidth: 700,
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
              fontFamily: "BarcadeBrawlRegular",
              opacity: 0.3,
              fontSize: 8,
              maxWidth: 800,
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
