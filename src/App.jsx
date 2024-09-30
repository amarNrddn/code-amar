import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeProvider";
import React from "react";

const RouteApp = React.lazy(() => import('./routes/RouteApp'))

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
