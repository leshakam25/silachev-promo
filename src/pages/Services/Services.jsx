import { Container, Typography } from "@mui/material";
import CustomCard from "../../components/CustomCard/CustomCard";
import { useEffect } from "react";
import { Box } from "@mui/system";

const Services = ({ servicesData }) => {
  return (
    <Container
      maxWidth="xl"
      id="services"
      sx={{
        my: 2,
      }}
    >
      <Typography fontFamily="Sofia Sans" variant="h3" fontWeight="700">
        Направления
      </Typography>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {servicesData &&
          servicesData.map((el) => (
            <CustomCard
              key={el.id}
              image={el.image}
              title={el.title}
              text={el.text}
            />
          ))}
      </Box>
    </Container>
  );
};

export default Services;
