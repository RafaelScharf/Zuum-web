import React from "react";
import { Router } from "react-router-dom";
import history from "./services/history";
import Routes from "./routes";
import GlobalStyles from "./styles/global";
import Header from "./admin/components/Header";
import Menu from "./admin/components/Menu";

function App() {
    return (
        <Router history={history}>
          <Header/>
          <Menu />
          <Routes />
          <GlobalStyles />
        </Router>
  );
}
export default App;