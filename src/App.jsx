import React, { useState } from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Header, Body } from "./components";

const violetTheme = createTheme({
  palette: {
    primary: {
      main: "#7e57c2",
      contrastText: "#000",
    },
  },
});

const peachTheme = createTheme({
  palette: {
    primary: {
      main: "#ff8a65",
      contrastText: "#fff",
    },
  },
});

function App() {
  const [isCustomTheme, setIsCustomTheme] = useState(false);

  return (
    <ThemeProvider theme={isCustomTheme ? violetTheme : peachTheme}>
      <Box>
        <Header
          toggleTheme={() => {
            setIsCustomTheme(!isCustomTheme);
          }}
          isCustomTheme={isCustomTheme}
        />

        <Body />
      </Box>
    </ThemeProvider>
  );
}

export default App;
