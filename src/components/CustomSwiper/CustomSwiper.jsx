import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper";
import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export default function CustomSwiper({ data }) {
  const checkWidth = () => {
    if (innerWidth > 1440) {
      return 5;
    }
    if (innerWidth > 1024) {
      return 4;
    }
    if (innerWidth > 768) {
      return 3;
    }
    if (innerWidth <= 768 && innerWidth > 425) {
      return 2;
    }
    if (innerWidth <= 425) {
      return 1;
    }
  };
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 8 }}>
      <Swiper
        slidesPerView={checkWidth()}
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
                  my: 2,
                  boxShadow: 6,
                }}
              >
                <CardActionArea
                  href={el.link}
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
                    gutterBottom
                    component="div"
                    fontFamily="Sofia Sans"
                    lineHeight="100%"
                    fontSize={{ xs: 22, sm: 26 }}
                  >
                    {el.title}
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
                      image={el.img}
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
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
}
