import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CustomSwiper from "../../components/CustomSwiper/CustomSwiper";
import BlockTitle from "../../components/BlockTitle/BlockTitle";
import { casesData } from "../../data/data";

const Cases = () => {
  return (
    <Box id="cases">
      <Container maxWidth="xl">
        <BlockTitle title="Создание и запуск отдела маркетинга для сети заведений" />
        <CustomSwiper data={casesData.marketingCase} rows={3} />{" "}
        <BlockTitle title="Подготовка компании к созданию  к запуску и продажи франшизы" />
        <CustomSwiper data={casesData.franchiseCase} rows={2} />
      </Container>
    </Box>
  );
};

export default Cases;
