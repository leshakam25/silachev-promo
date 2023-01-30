import { Typography } from "@mui/material";
import React from "react";

const BlockTitle = ({ fz, title, textDecoration }) => {
  return (
    <Typography
      fontFamily="BarcadeBrawlRegular"
      fontWeight="700"
      fontSize={fz || { xs: 12, md: 24 }}
      sx={{
        color: `#0a0a0a`,
        textDecoration: `${textDecoration}`,
        opacity: 0.6,
      }}
    >
      {title}
    </Typography>
  );
};

export default BlockTitle;
