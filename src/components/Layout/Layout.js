import { Box } from "@mui/material";
import React from "react";
import Header from "../Header";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Subscribe />
      <Footer />
    </Box>
  );
};

export default Layout;
