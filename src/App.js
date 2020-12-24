import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Homepage from "./Homepage";
import { GlobalStyle } from "./GlobalStyle";
import Projects from "./Homepage/Projects";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Homepage></Homepage>
        <Projects></Projects>
      </ThemeProvider>
    </div>
  );
}

export default App;
