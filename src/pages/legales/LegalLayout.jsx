import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./LegalLayout.css";

const LegalLayout = () => {
  return (
    <main className="legal-wrapper">
      <aside className="legal-sidebar">
        <NavLink to="/legales/terminos-y-condiciones">
          Términos y Condiciones
        </NavLink>

        <NavLink to="/legales/privacidad">
          Política de Privacidad
        </NavLink>

        <NavLink to="/legales/cookies">
          Política de Cookies
        </NavLink>

        <NavLink to="/legales/aviso-privacidad">
          Aviso de Privacidad
        </NavLink>
      </aside>

      <section className="legal-document-box">
        <Outlet />
      </section>
    </main>
  );
};

export default LegalLayout;