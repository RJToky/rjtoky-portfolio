import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import { LoadingProvider } from "./context/LoadingContext";

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
