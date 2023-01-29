import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Pagination, Navigation } from "swiper";
import { Container } from "@mui/material";
import SwiperCard from "./SwiperCard";

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
            style={{
              backgroundColor: "inherit",
            }}
            key={el.id}
          >
            <SwiperCard
              title={el.title}
              img={el.img}
              link={el.link}
              text={el.text}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
