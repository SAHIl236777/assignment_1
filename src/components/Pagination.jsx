import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Pagination = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 3 }}>
            <IconButton disabled>
                <ArrowBackIosNewIcon />
            </IconButton>
            <Typography variant="body1">Page 2 of 2</Typography>
            <IconButton disabled>
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    );
};

export default Pagination;
