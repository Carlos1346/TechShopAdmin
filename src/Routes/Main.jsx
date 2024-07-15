import React from "react";
import { Routes, Route } from "react-router-dom";

// Vistas

// Componentes

import Dashboard from "../Pages/Login.jsx";
import SalesStats from "../Components/SalesStats.jsx";

import GeneralStats from "../Components/GeneralStats.jsx";
import MenuVertical from "../Components/menuvertical.jsx";
import ProductStats from "../Components/ProductStats.jsx";
import UserStats from "../Components/UserStats.jsx";
import BrandsSuppliersStats from "../Components/BrandsSuppliersStats.jsx";

import NavbarQueries from "../Components/NavbarQueries.jsx";
import ProductsTable from "../Components/ProductsTable.jsx";
import CategoriesTable from "../Components/CategoriesTable.jsx";
import UsersTable from "../Components/UsersTable.jsx";
import BrandsTable from "../Components/BrandsTable.jsx";
import OrderTable from "../Components/OrderTable.jsx";
import ReviewList from "../Components/ReviewList.jsx";
import LoginForm from "../Components/LoginForm.jsx";
import ProductForm from "../Components/ProductForm.jsx";

function Main() {
  return (
    <>
      <div id="Background">
        <Routes>
          {/* Ruta para la vista inicial "Start" */}
          <Route path="/" element={<LoginForm/>}>
            
          </Route>

          <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Inicio" element={<GeneralStats />} />

            <Route path="Estadisticas" element={<MenuVertical />}>
              <Route path="Generales" element={<GeneralStats />} />
              <Route path="Productos" element={<ProductStats />} />
              <Route path="Usuarios" element={<UserStats />} />
              <Route path="Ventas" element={<SalesStats />} />
              <Route path="Marcas" element={<BrandsSuppliersStats />} />
            </Route>

            <Route path="Altas" element={<NavbarQueries />}>
              <Route path="Productos" element={<ProductsTable />} />
              <Route path="Categorias" element={<CategoriesTable />} />
              <Route path="Usuarios" element={<UsersTable />} />
              <Route path="Marcas" element={<BrandsTable/>} />
              <Route path="Ordenes" element={<OrderTable/>} />
              <Route path="Reseñas" element={<ReviewList/>} />
              <Route path="ProductForm" element={<ProductForm/>} />
              
              
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default Main;
