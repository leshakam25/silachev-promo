import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

const SwiperCard = ({ title, img, link }) => {
  return (
    <Card
      sx={{
        bgcolor: "transparent",
        opacity: 0.8,
      }}
    >
      <CardActionArea
        href={link}
        target="_blank"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          p: 2,
        }}
      >
        <Typography
          component="div"
          lineHeight="100%"
          fontFamily="BarcadeBrawlRegular"
          fontSize={{ xs: 10, sm: 12 }}
          gutterBottom
        >
          {title}
        </Typography>
        <Box
          sx={{
            borderRadius: "4px",
            height: "200px",
            width: "auto",
            bgcolor: "white",
          }}
        >
          <CardMedia
            component="img"
            image={img}
            alt="На это месте должна быть картинка :)"
            sx={{
              borderRadius: "4px",
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default SwiperCard;
