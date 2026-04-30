    import React from 'react';
    import { Link } from 'react-router-dom';
    import { getAssetUrl } from '../utils/assets';
    import { FaFacebookF, FaTiktok, FaInstagram, FaYoutube  } from 'react-icons/fa';
    import './Footer.css';

    const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            
            {/* GRID DE COLUMNAS (Ahora son 4 para un diseño más limpio) */}
            <div className="footer-grid">
            
            {/* COLUMNA 1: MARCA + DESCRIPCIÓN + SOCIALES */}
            <div className="footer-brand-col">
                <img src={getAssetUrl('LogoDiapositiva.png')} alt="Delycorp" className="footer-logo" />
                {/*<p className="footer-desc">
                Compañía global de alimentos que busca cautivar al consumidor a través de la innovación y el sabor de sus productos. 
                Sustentada en una marca sombrilla fuerte, marcas reconocidas y de alto valor percibido.
                </p>*/}
                
                {/* Iconos sociales */}
                <div className="footer-social-icons">
                <a href="https://www.facebook.com/delycorpdeyelli#" aria-label="Facebook" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                <a href="https://www.tiktok.com/@deyelli.pe" aria-label="TikTok" target="_blank" rel="noreferrer"><FaTiktok /></a>
                <a href="https://www.instagram.com/deyelli.pe/" aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer"><FaYoutube /></a>
                </div>

                {/* --- LIBRO DE RECLAMACIONES (Google Form) --- */}
                <div className="libro-reclamaciones-container" style={{ marginTop: '20px' }}>
                    <a 
                        href="https://forms.gle/g5sRqepC62RfSGUG6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img 
                            src="/libro-reclamaciones.png" 
                            alt="Libro de Reclamaciones" 
                            style={{ width: '150px', transition: 'transform 0.3s' }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </a>
                </div>
            </div>

            {/* COLUMNA 2: NOSOTROS */}
            <div className="footer-link-col">
                <h4>Nosotros</h4>
                <ul>    
                <li><Link to="/nosotros">Quiénes Somos</Link></li>
                <li><Link to="/nosotros/historia">Historia</Link></li>
                <li><Link to="/nosotros/nuestro-equipo">Nuestro Equipo</Link></li>
                </ul>
            </div>  

            {/* COLUMNA 3: ENLACES IMPORTANTES (Aquí movimos Sostenibilidad) */}
            <div className="footer-link-col">
                <h4>Enlaces Rápidos</h4>
                <ul>
                {/* Nuevo enlace directo */}
                <li><Link to="/sostenibilidad">Sostenibilidad</Link></li>
                <li><Link to="/novedades">Novedades</Link></li>
                {/*<li><Link to="/inversionistas">Inversionistas</Link></li>*/}
                <li><Link to="/proveedores">Proveedores</Link></li>
                <li><Link to="/clientes">Clientes</Link></li>
                </ul>
            </div>

            {/* COLUMNA 4: CONTACTO */}
            <div className="footer-link-col">
                <h4>Contacto</h4>
                <ul>
                <li><Link to="/contacto">Contáctanos</Link></li>
                <li><Link to="/trabaja">Trabaja con Nosotros</Link></li>
                </ul>
            </div>

            </div>

            {/* SECCIÓN INFERIOR: COPYRIGHT */}
            <div className="footer-bottom">
            <div className="copyright-text">
                {new Date().getFullYear()} © Delycorp S.A.C. - Todos los derechos reservados - 
                <Link to="/privacidad"> Políticas de Protección de datos personales</Link> | 
                <Link to="/cookies"> Política de Cookies</Link> | 
                <Link to="/terminos"> Términos y Condiciones</Link> | 
                <Link to="/aviso"> Aviso de Privacidad</Link>
            </div>
            </div>

        </div>
        </footer>
    );
    };

    export default Footer;