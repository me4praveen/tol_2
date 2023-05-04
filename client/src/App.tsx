import React from "react";
import { ThemeProvider, StyledEngineProvider, CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import theme from "./theme";
import Headers from "./pages/header/Headers";
import router from "./Router";
import { Provider } from "react-redux";
import { store } from "./store";


function App() {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Headers />
          <RouterProvider router={router} />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>

  );
}

export default App;