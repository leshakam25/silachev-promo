import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Button, CardMedia, Container, Grid, Typography } from "@mui/material";
import { fetchPromo } from "../../store/promoSlice";
import loading from "../../images/statuses/loading.svg";
import Header from "../Header/Header";
import About from "../../pages/About/About";

const Wrapper = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.promo);
  const data = useSelector((state) => state.promo.promo);

  useEffect(() => {
    dispatch(fetchPromo());
  }, []);
  const log = () => {
    console.log("data", data, "status", status, "error", error);
  };
  return (
    <>
      <Header />
      {status === "loading" && (
        <CardMedia
          component="img"
          src={loading}
          sx={{
            m: "0 auto",
            width: "auto",
            height: "500px",
          }}
        />
      )}
      {status === "resolved" && (
        <>
          <About />
        </>
      )}
    </>
  );
};

export default Wrapper;
