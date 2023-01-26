import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ContactCard({ title, link, icon }) {
  return (
    <Card
      sx={{
        bgcolor: "#E0E1DD",
        m: 1,
        width: { xs: "100%", sm: 160 },
        boxShadow: 6,
      }}
    >
      <CardActionArea
        href={link}
        target="_blank"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          px: 2,
          py: 1,
          width: "100%",
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
            fontFamily: "Sofia Sans",
            fontSize: 18,
            fontWeight: 800,
            pl: 1,
          }}
        >
          {title}
        </Typography>
      </CardActionArea>
    </Card>
  );
}
