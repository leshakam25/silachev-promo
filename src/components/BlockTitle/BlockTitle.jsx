import { Typography } from "@mui/material";
import React from "react";

const BlockTitle = ({ title }) => {
  return (
    <Typography
      fontFamily="Sofia Sans"
      variant="h3"
      fontWeight="700"
      fontSize={{ xs: 24, md: 32 }}
      my={2}
    >
      {title}
    </Typography>
  );
};

export default BlockTitle;
