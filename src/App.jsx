import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import DashboardPage from "./pages/DashboardPage";
import ObatPage from "./pages/ObatPage";
import JenisObatPage from "./pages/JenisObatPage";


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/obat" element={<ObatPage />} />
          <Route path="/jenis-obat" element={<JenisObatPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;