import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageLogin } from "./pages/PageLogin";
import { PageRegisterCompany } from "./pages/PageRegisterCompany";
import { PageRegisterRepr } from "./pages/PageRegisterRepr";
import { PageRegisterProducts } from "./pages/PageRegisterProducts";
import { PageCompanyList } from "./pages/PageCompanyList";
import "./index.css";
import { PageSalesList } from "./pages/PageSalesList";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageLogin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<PageLogin />} />
      <Route path="/representante" element={<PageRegisterRepr />} />
      <Route path="/empresa" element={<PageRegisterCompany />} />
      <Route path="/produtos" element={<PageRegisterProducts />} />
      <Route path="/listagem-empresas" element={<PageCompanyList />} />
      <Route path="/listagem-vendas" element={<PageSalesList />} />
    </Routes>
  );
}
