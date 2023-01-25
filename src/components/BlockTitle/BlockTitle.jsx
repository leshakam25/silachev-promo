import { Typography } from "@mui/material";
import React from "react";

const BlockTitle = ({ fz, title }) => {
  return (
    <Typography
      fontFamily="Sofia Sans"
      variant="h3"
      fontWeight="700"
      fontSize={fz || { xs: 24, md: 32 }}
      my={2}
      sx={{
        textDecoration: "underline",
      }}
    >
      {title}
    </Typography>
  );
};

export default BlockTitle;
