// src/router/index.jsx
import { Routes, Route } from "react-router-dom";

// Páginas principales
import Home from "../pages/Home";

// Nosotros
import QuienesSomos from "../pages/QuienesSomos";
import Historia from "../pages/Historia";
import NuestroEquipo from "../pages/NuestroEquipo";

// Servicios / Trabajo / Relaciones
import TrabajaConNosotros from "../pages/TrabajaConNosotros";
import Inversionistas from "../pages/Inversionistas";
import Proveedores from "../pages/Proveedores";
import Clientes from "../pages/Clientes";

// Sostenibilidad
import Sostenibilidad from "../pages/Sostenibilidad"; 

// Productos
import CatalogPage from '../pages/CatalogPage'; // <--- USAREMOS ESTE (El que tiene marcas y todo)
import ProductDetail from "../pages/ProductDetail";

// Contacto
import Contacto from "../pages/Contacto";

// Noticias
import Novedades from "../pages/Novedades";       // Antes Noticias
import NovedadDetalle from "../pages/NovedadDetalle";


export default function AppRouter() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Nosotros */}
      <Route path="/nosotros" element={<QuienesSomos />} />
      <Route path="/nosotros/quienes-somos" element={<QuienesSomos />} />
      <Route path="/nosotros/historia" element={<Historia />} />
      <Route path="/nosotros/nuestro-equipo" element={<NuestroEquipo />} />

      {/* Sostenibilidad */}
      <Route path="/sostenibilidad" element={<Sostenibilidad />} />

      {/* --- CORRECCIÓN DE PRODUCTOS --- */}
      
      {/* 1. Catálogo General (Ver todo) */}
      <Route path="/productos" element={<CatalogPage />} />
      
      {/* 2. Por Categoría (CLAVE: Usar :categorySlug para que CatalogPage lo entienda) */}
      <Route path="/productos/:categorySlug" element={<CatalogPage />} />
      
      {/* 3. Por Marca (CLAVE: Usar :brandSlug) */}
      <Route path="/marca/:brandSlug" element={<CatalogPage />} />

      {/* 4. Detalle individual */}
      <Route path="/producto/:id" element={<ProductDetail />} />


      {/* Páginas adicionales */}
      <Route path="/trabaja" element={<TrabajaConNosotros />} />
      <Route path="/inversionistas" element={<Inversionistas />} />
      <Route path="/proveedores" element={<Proveedores />} />
      <Route path="/clientes" element={<Clientes />} />

      {/* Contacto */}
      <Route path="/contacto" element={<Contacto />} />

      {/* Novedades */}
      <Route path="/novedades" element={<Novedades />} />
      <Route path="/novedades/:id" element={<NovedadDetalle />} />
    </Routes>
  );
}