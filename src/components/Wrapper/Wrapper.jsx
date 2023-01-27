import React from "react"; // , { useEffect }
// import { useDispatch, useSelector } from "react-redux";
// import { Box } from "@mui/system";
// import { Button, CardMedia, Container, Grid, Typography } from "@mui/material";
// import { fetchPromo, fetchServices } from "../../store/promoSlice";
// import loading from "../../images/statuses/loading.svg";
import About from "../../pages/About/About";
import Services from "../../pages/Services/Services";
import { casesData, services } from "../../data/data";
import Cases from "../../pages/Cases/Cases";

import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import AnimatedBg from "react-animated-bg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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
    <AnimatedBg
      colors={[
        "#212529",
        "#343A40",
        "#495057",
        "#6C757D",
        "#495057",
        "#343A40",
        "#212529",
      ]}
      duration={1}
      timingFunction="linear"
    >
      <Header />{" "}
      <Routes>
        <Route path="/" element={<About />} />{" "}
        <Route
          path="/services"
          element={<Services servicesData={services} />}
        />
        <Route path="/cases" element={<Cases casesData={casesData} />} />
        <Route path="/contact" element={<About />} />
      </Routes>
      <Footer />
      {/* )} */}
    </AnimatedBg>
  );
};

export default Wrapper;
