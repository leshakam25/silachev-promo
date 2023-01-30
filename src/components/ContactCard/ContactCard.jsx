import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";

export default function ContactCard({ title, link, icon }) {
  return (
    <Card
      sx={{
        bgcolor: "#E0E1DD",
        my: 1,
        mx: { xs: 0, sm: 1 },
        width: { xs: "100%", md: 300 },
        boxShadow: 6,
        opacity: 0.7,
      }}
    >
      <CardActionArea
        href={link}
        target="_blank"
        sx={{
          px: 2,
          py: 1,
          m: "0 auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "300px", md: "100%" },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            m: "0 auto",
          }}
        >
          <CardMedia
            component="img"
            image={icon}
            alt="green iguana"
            sx={{
              width: 32,
              height: 32,
            }}
          />
          <Typography
            sx={{
              fontFamily: "BarcadeBrawlRegular",
              fontSize: 18,
              fontWeight: 500,
              pl: 1,
            }}
          >
            {title}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
