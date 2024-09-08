import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeProvider";
import RouteApp from "./routes/RouteApp";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
