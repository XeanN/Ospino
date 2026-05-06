    import React from 'react';
    import { Link } from 'react-router-dom';
    import { getAssetUrl } from '../utils/assets';
    import './CorporateSection.css';

    const CorporateSection = () => {
    return (
        <section className="corporate-section">
        <div className="container corporate-grid">
            
            {/* COLUMNA IZQUIERDA: TEXTO */}
            <div className="corporate-content">
            <span className="subtitle">DISTRIBUCIÓN Y CONFIANZA</span>
            <h2>Impulsamos negocios con las mejores marcas</h2>
            <p>
                En Ospino trabajamos día a día para abastecer negocios, bodegas y distribuidores con productos de calidad y las mejores marcas del mercado. Nuestro compromiso es brindar atención rápida, confianza comercial y una cadena de distribución eficiente que impulse el crecimiento de nuestros clientes.
            </p>
            
            <div className="stats-row">
                <div className="stat-item">
                <span className="number">+15</span>
                <span className="label">Años de Experiencia</span>
                </div>
                <div className="stat-item">
                <span className="number">100%</span>
                <span className="label">Cobertura Nacional</span>
                </div>
            </div>

            <Link to="/sostenibilidad" className="corporate-btn">
                Conoce nuestro impacto
            </Link>
            </div>

            {/* COLUMNA DERECHA: IMAGEN */}
            <div className="corporate-image">
            {/* Imagen de ejemplo: almacén o equipo trabajando */}
            <img    
                src={getAssetUrl('sostenibilidad.png')} 
                alt="Ospino Equipo" 
            />
            {/* Elemento decorativo (cuadro rojo) */}
            <div className="deco-box"></div>
            </div>

        </div>
        </section>
    );
    };

    export default CorporateSection;