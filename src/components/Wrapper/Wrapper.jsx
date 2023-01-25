import React from "react"; // , { useEffect }
// import { useDispatch, useSelector } from "react-redux";
// import { Box } from "@mui/system";
// import { Button, CardMedia, Container, Grid, Typography } from "@mui/material";
// import { fetchPromo, fetchServices } from "../../store/promoSlice";
// import loading from "../../images/statuses/loading.svg";
import Header from "../Header/Header";
import About from "../../pages/About/About";
import Services from "../../pages/Services/Services";
import { services } from "../../data/data";
import Cases from "../../pages/Cases/Cases";

const Wrapper = () => {
  // const dispatch = useDispatch();
  // const { status, error } = useSelector((state) => state.promo);
  // const promoData = useSelector((state) => state.promo.promo);
  // const servicesData = useSelector((state) => state.promo.services);

  // useEffect(() => {
  //   dispatch(fetchPromo());
  //   console.log(promoData);
  // }, []);

  return (
    <>
      <Header />
      {/* {status === "loading" && (
        <CardMedia
          component="img"
          src={loading}
          sx={{
            m: "0 auto",
            width: "auto",
            height: "500px",
          }}
        />
      )} */}
      {/* {status === "resolved" && ( */}
      <>
        <About />
        <Services servicesData={services} />
        <Cases />
      </>
      {/* )} */}
    </>
  );
};

export default Wrapper;
