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
        boxShadow: "none",
        bgcolor: "#E0E1DD",
        my: { xs: 1, sm: 3 },
        mx: { xs: 0, sm: 3 },
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
                height: 80,
                width: 80,
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
              fontFamily="Sofia Sans"
              fontSize={{ xs: 16, sm: 20 }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="#415A77"
              fontFamily="Sofia Sans"
              fontSize={{ xs: 14, sm: 18 }}
            >
              {text}
            </Typography>
          </Grid>
        </Grid>{" "}
      </CardActionArea>
    </Card>
  );
}