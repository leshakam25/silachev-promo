import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

export default function ServicesCard({ image, title, text }) {
  return (
    <Card
      sx={{
        bgcolor: "#E0E1DD",
        opacity: 0.7,
        my: { xs: 1, sm: 1 },
        mx: { xs: 0, sm: 1 },
        width: { xs: "100%", md: "600px" },
        boxShadow: 6,
      }}
    >
      <CardActionArea
        sx={{
          py: 1,
          height: "100%",
          width: "100%",
        }}
      >
        <Grid
          container
          display="flex"
          flexDirection="row"
          flexWrap="nowrap"
          alignItems="center"
        >
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="center"
            item
            xs={12}
            md={4}
          >
            <CardMedia
              sx={{
                height: 60,
                width: 60,
              }}
              component="img"
              image={image}
              alt="green iguana"
            />
          </Grid>{" "}
          <Grid
            item
            xs={12}
            md={8}
            p={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#1B263B"
              fontFamily="BarcadeBrawlRegular"
              fontSize={{ xs: 10, sm: 14 }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="#415A77"
              fontFamily="BarcadeBrawlRegular"
              fontSize={{ xs: 6, sm: 10 }}
            >
              {text}
            </Typography>
          </Grid>
        </Grid>{" "}
      </CardActionArea>
    </Card>
  );
}
