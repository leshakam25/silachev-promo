import ReactW from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper";
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";

export default function CustomSwiper({ data, rows }) {
  return (
    <>
      <Swiper
        slidesPerView={rows}
        spaceBetween={30}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data &&
          data.map((el) => (
            <SwiperSlide key={el.id}>
              <Card
                sx={{
                  boxShadow: "none",
                  bgcolor: "#E0E1DD",
                  height: "100%",
                  my: 2,
                }}
              >
                <CardActionArea
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
                    gutterBottom
                    variant="h4"
                    component="div"
                    fontFamily="Sofia Sans"
                    lineHeight="100%"
                  >
                    {el.title}
                  </Typography>
                  <CardMedia
                    component="img"
                    image={el.img}
                    alt="нет изображения("
                    sx={{ borderRadius: "4px" }}
                  />
                </CardActionArea>
              </Card>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
