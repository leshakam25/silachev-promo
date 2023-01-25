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
              <Card sx={{ maxWidth: 345, boxShadow: "none", my: 2 }}>
                <CardActionArea
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    fontFamily="Sofia Sans"
                  >
                    {el.title}
                  </Typography>
                  <CardMedia
                    component="img"
                    height="140"
                    width="auto"
                    image={el.img}
                    alt="нет изображения("
                  />
                </CardActionArea>
              </Card>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
