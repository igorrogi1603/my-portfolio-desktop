import { BrowserRouter as Router } from "react-router-dom";
import { CustomThemeProvider } from "./hooks/theme";
import GlobalStyle from "./shared/styles/globalStyle";
import RouteApp from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <CustomThemeProvider>
        <GlobalStyle />
        <RouteApp />
      </CustomThemeProvider>
    </Router>
  );
}

export default App;
