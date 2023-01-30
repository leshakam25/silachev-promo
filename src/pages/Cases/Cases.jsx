import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CustomSwiper from "../../components/CustomSwiper/CustomSwiper";
import BlockTitle from "../../components/BlockTitle/BlockTitle";

const Cases = ({ casesData }) => {
  return (
    <Container
      sx={{
        height: "85%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth="xl"
    >
      <Box sx={{ width: "100%" }}>
        <BlockTitle title="КЕЙСЫ:" textDecoration="underline" />
        <BlockTitle title="Создание и запуск отдела маркетинга для сети заведений" />
        <CustomSwiper data={casesData.marketingCase} />
        <BlockTitle title="Подготовка компании к созданию, запуску и продаже франшизы" />
        <CustomSwiper data={casesData.franchiseCase} />
      </Box>
    </Container>
  );
};

export default Cases;
