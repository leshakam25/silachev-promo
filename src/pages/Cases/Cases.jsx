import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CustomSwiper from "../../components/CustomSwiper/CustomSwiper";
import BlockTitle from "../../components/BlockTitle/BlockTitle";

const Cases = ({ casesData }) => {
  return (
    <Container maxWidth="xl">
      <BlockTitle title="КЕЙСЫ:" textDecoration="underline" />
      <BlockTitle title="Создание и запуск отдела маркетинга для сети заведений" />
      <CustomSwiper data={casesData.marketingCase} />
      <BlockTitle title="Подготовка компании к созданию  к запуску и продажи франшизы" />
      <CustomSwiper data={casesData.franchiseCase} />
    </Container>
  );
};

export default Cases;
