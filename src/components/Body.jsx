import React from "react";
import { Box, Typography } from "@mui/material";

export const Body = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#E7ECFF",
        minHeight: "calc(100vh - 48px)",
        "&:hover": {
          backgroundColor: "#FDEED9",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Typography sx={{ m: "auto" }} variant="h1">
        Body
      </Typography>
    </Box>
  );
};
