import React, { Suspense } from "react";
import { ThemeProvider, StyledEngineProvider, CssBaseline, Box } from "@mui/material";
import { HashRouter as Router} from "react-router-dom";
import theme from "./theme";
import Headers from "./pages/header/Headers";
import { Provider } from "react-redux";
import { store } from "./store";
import RouterComp from "./components/Router";


function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Box>Loading...</Box>}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
          <Headers />
          <RouterComp />
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
      </Suspense>
      
    </Provider>

  );
}

export default App;