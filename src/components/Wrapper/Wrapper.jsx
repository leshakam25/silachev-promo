import React from "react";
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
import Header from "../Header/Header";
import Contacts from "../../pages/Contacts/Contacts";
import RetroBG from "../RetroBg/RetroBG";
import "./style.css";
import Order from "../../pages/Order/Order";

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
    <Box
      sx={{
        bgcolor: "transparent",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header />
      {/* <RetroBG /> */}
      <Routes>
        <Route path="/" element={<About />} />{" "}
        <Route
          path="/services"
          element={<Services servicesData={services} />}
        />
        <Route path="/cases" element={<Cases casesData={casesData} />} />
        <Route path="/contacts" element={<Contacts />} />{" "}
        <Route path="/order" element={<Order />} />
      </Routes>
    </Box>
  );
};

export default Wrapper;
