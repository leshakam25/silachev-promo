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
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data &&
          data.map((el) => (
            <SwiperSlide
              key={el.id}
              style={{
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <Card
                sx={{
                  bgcolor: "transparent",
                  opacity: 0.8,
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
                    component="div"
                    lineHeight="100%"
                    fontFamily="BarcadeBrawlRegular"
                    fontSize={{ xs: 10, sm: 12 }}
                    gutterBottom
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
