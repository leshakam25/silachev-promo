import { Container } from "@mui/material";
import CustomCard from "../../components/CustomCard/CustomCard";
import { Box } from "@mui/system";
import BlockTitle from "../../components/BlockTitle/BlockTitle";

const Services = ({ servicesData }) => {
  return (
    <Container
      maxWidth="xl"
      id="services"
      sx={{
        my: 2,
      }}
    >
      <BlockTitle title="Направления" />
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
