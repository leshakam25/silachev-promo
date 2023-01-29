import { Container } from "@mui/material";
import CustomCard from "../../components/ServicesCard/ServicesCard";
import { Box } from "@mui/system";
import BlockTitle from "../../components/BlockTitle/BlockTitle";

const Services = ({ servicesData }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
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
      </Box>
    </Container>
  );
};

export default Services;
