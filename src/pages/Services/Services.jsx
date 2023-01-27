import { Container } from "@mui/material";
import CustomCard from "../../components/ServicesCard/ServicesCard";
import { Box } from "@mui/system";
import BlockTitle from "../../components/BlockTitle/BlockTitle";

const Services = ({ servicesData }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: 660,
      }}
    >
      <BlockTitle title="Направления:" textDecoration="underline" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
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
