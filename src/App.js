import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Market from "./pages/Market";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/markets" element={<Market/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
