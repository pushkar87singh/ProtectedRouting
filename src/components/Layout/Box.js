import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { spacing, pallete } from "@material-ui/system";
import { Button } from "@material-ui/core";
const Box = styled.div`${spacing}${pallete}`;
const theme = {
  spacing: 4,
  pallete: {
    primary: "#007bff"
  }
};
const BoxTesting = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box color="primary" p={1}>
          4px
        </Box>
        <Box p={2}>8px</Box>
        <Box color="primary" p={-1}>
          -4px
        </Box>
      </ThemeProvider>
    </>
  );
};

export default BoxTesting;
