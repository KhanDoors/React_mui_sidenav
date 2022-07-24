import { Box } from "@mui/material";
import React from "react";
import MainPage from "../component/MainPage";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Box sx={{ margin: 2 }}>
        <MainPage />
      </Box>
    </div>
  );
};

export default Home;
