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


// Productos
import CatalogPage from '../pages/CatalogPage'; // <--- USAREMOS ESTE (El que tiene marcas y todo)
import ProductDetail from "../pages/ProductDetail";

// Contacto
import Contacto from "../pages/Contacto";

// Noticias
import Blog from "../pages/Blog";       // Antes Noticias
import NovedadDetalle from "../pages/NovedadDetalle";

// Legales
// Legales
import LegalLayout from "../pages/legales/LegalLayout";
import PoliticaPrivacidad from "../pages/legales/PoliticaPrivacidad";
import PoliticaCookies from "../pages/legales/PoliticaCookies";
import TerminosCondiciones from "../pages/legales/TerminosCondiciones";
import AvisoPrivacidad from "../pages/legales/AvisoPrivacidad";


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

      {/* Blogs */}
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<NovedadDetalle />} />

      {/* Legales */}
      <Route path="/legales" element={<LegalLayout />}>
        <Route path="privacidad" element={<PoliticaPrivacidad />} />
        <Route path="cookies" element={<PoliticaCookies />} />
        <Route path="terminos-y-condiciones" element={<TerminosCondiciones />} />
        <Route path="aviso-privacidad" element={<AvisoPrivacidad />} />
      </Route>
    </Routes>
  );
}