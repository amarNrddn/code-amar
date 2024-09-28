import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeProvider";
import RouteApp from "./routes/RouteApp";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <RouteApp />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
