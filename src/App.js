import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Market from "./pages/Market";
import About from "./pages/About";
import Farmers from "./pages/Farmers";
import Merchants from "./pages/Merchants";
import Grain from "./pages/Grain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/markets" element={<Market/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/merchant-login" element={<Merchants/>}/>
          <Route path="/farmer-login" element={<Farmers/>}/>
          <Route path="/grain" element={<Grain/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
