import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageLogin } from "./pages/PageLogin";
import { PageRegisterCompany } from "./pages/PageRegisterCompany";
import { PageRegisterEmpresa } from "./pages/PageRegisterEmpresa";
import { PageRegisterProducts } from "./pages/PageRegisterProducts";
import "./index.css";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageLogin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<PageLogin />} />
      <Route path="/company" element={<PageRegisterCompany />} />
      <Route path="/empresa" element={<PageRegisterEmpresa />} />
      <Route path="/produtos" element={<PageRegisterProducts />} />
    </Routes>
  );
}
