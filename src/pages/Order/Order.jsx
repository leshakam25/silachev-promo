import { Box, Container } from "@mui/system";
import React from "react";

const Order = () => {
  return (
    <Box
      sx={{
        bgcolor: "transparent",
        height: "88%",
      }}
    >
      {" "}
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "BarcadeBrawlRegular",
        }}
      >
        Здесь будет форма заказа услуг
      </Container>
    </Box>
  );
};

export default Order;
