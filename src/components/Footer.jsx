import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/assets';
import { FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

// ─── Número de WhatsApp (solo dígitos, con código de país) ───────────────────
const WHATSAPP_NUMBER = '51999999999'; // ← Cambia este número
const WHATSAPP_MESSAGE = '¡Hola! Me gustaría obtener más información.';
// ─────────────────────────────────────────────────────────────────────────────

const Footer = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    return (
        <>
        {/* ═══════════════════════════════════════════
            FOOTER
        ═══════════════════════════════════════════ */}
        <footer className="footer">
            <div className="container">

                {/* GRID PRINCIPAL */}
                <div className="footer-grid">

                    {/* COL 1 — MARCA */}
                    <div className="footer-brand-col">
                        <Link to="/">
                            <img
                                src={getAssetUrl('logo_sinfondo_ospino.png')}
                                alt="Ospino"
                                className="footer-logo"
                            />
                        </Link>
                        <p className="footer-tagline">
                            Tu mejor aliado en golosinas y distribución a nivel nacional.
                        </p>
                        <div className="footer-social-icons">
                            <a href="https://web.facebook.com/profile.php?id=61573849888646"
                               aria-label="Facebook" target="_blank" rel="noreferrer">
                                <FaFacebookF />
                            </a>
                            <b href="https://www.tiktok.com/@0ospino"
                               aria-label="TikTok" target="_blank" rel="noreferrer">
                                <FaTiktok />
                            </b>
                        </div>
                        
                    </div>

                    {/* COL 2 — PRODUCTOS (espejo del header) */}
                    <div className="footer-link-col">
                        <h4>Productos</h4>
                        <ul>
                            <li><Link to="/productos/dulces">Dulces</Link></li>
                            <li><Link to="/productos/chocolateria">Chocolatería</Link></li>
                            <li><Link to="/productos/galletas">Galletas</Link></li>
                            <li><Link to="/productos/snacks">Snacks</Link></li>
                            <li><Link to="/productos/bebidas">Bebidas</Link></li>
                            <li><Link to="/productos/abarrotes">Abarrotes</Link></li>
                            <li><Link to="/promociones">Promociones</Link></li>
                        </ul>
                    </div>

                    {/* COL 3 — NAVEGACIÓN (espejo del header) */}
                    <div className="footer-link-col">
                        <h4>Navegación</h4>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/nosotros">Nosotros</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="/trabaja">Trabaja con Nosotros</Link></li>
                            {/*<li><Link to="/proveedores">Proveedores</Link></li>*/}
                            <li><Link to="/clientes">Clientes</Link></li>
                        </ul>
                    </div>

                    {/* COL 4 — CONTACTO */}
                    <div className="footer-link-col">
                        <h4>Contacto</h4>
                        <ul>
                            <li><Link to="/contacto">Contáctanos</Link></li>
                        </ul>
                        
                        <a href={"https://api.whatsapp.com/send?phone=51988477170&text=%C2%A1Hola!%F0%9F%98%8A%20Quiero%20hacer%20un(os)%20pedido(s)%0A"} className="footer-whatsapp-btn"
                           target="_blank" rel="noreferrer">
                            <FaWhatsapp /> Escríbenos
                        </a>

                        
                    </div>

                </div>

                {/* BARRA INFERIOR */}
                <div className="footer-bottom">
                    <p className="copyright-text">
                        {new Date().getFullYear()} © Ospino S.A.C. — Todos los derechos reservados
                    </p>
                    <div className="footer-legal-links">
                        <Link to="/legales/privacidad">Protección de datos</Link>
                        <Link to="/legales/cookies">Cookies</Link>
                        <Link to="/legales/terminos-y-condiciones">Términos y Condiciones</Link>
                        <Link to="/legales/aviso-privacidad">Aviso de Privacidad</Link>
                    </div>
                </div>

            </div>
        </footer>

        {/* ═══════════════════════════════════════════
            BOTÓN FLOTANTE WHATSAPP
        ═══════════════════════════════════════════ */}
        <a
            href={"https://api.whatsapp.com/send?phone=51988477170&text=%C2%A1Hola!%F0%9F%98%8A%20Quiero%20hacer%20un(os)%20pedido(s)%0A"}
            className="whatsapp-float"
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp />
            <span className="whatsapp-tooltip">¿Necesitas ayuda?</span>
        </a>
        </>
    );
};

export default Footer;