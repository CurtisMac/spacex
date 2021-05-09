import React, { useReducer, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { initialState, launchesReducer } from "./reducers/launchesReducer";
import api from "./adapters/launchesApi";

//components
import Header from "./components/header";

const App = () => {
  const [state, dispatch] = useReducer(launchesReducer, initialState);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await api.getAllData().catch((err) => {
        setError("Network error");
      });
      dispatch({ type: "load", payload: data });
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
