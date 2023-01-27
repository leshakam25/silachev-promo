import { Typography } from "@mui/material";
import React from "react";

const BlockTitle = ({ fz, title, textDecoration }) => {
  return (
    <Typography
      fontFamily="BarcadeBrawlRegular"
      fontWeight="700"
      fontSize={fz || { xs: 12, md: 24 }}
      my={2}
      mt={6}
      sx={{
        color: `#778DA9`,
        textDecoration: `${textDecoration}`,
      }}
    >
      {title}
    </Typography>
  );
};

export default BlockTitle;
