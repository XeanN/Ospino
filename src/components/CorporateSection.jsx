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
            <span className="subtitle">SOSTENIBILIDAD Y COMPROMISO</span>
            <h2>Generamos valor para el Perú</h2>
            <p>
                Nuestro compromiso en Delycorp trasciende lo comercial: promovemos el desarrollo sostenible,
                apoyamos activamente a nuestras comunidades y garantizamos la excelencia en cada paso de nuestra
                cadena de valor, contribuyendo a un país más próspero y responsable
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
                src={getAssetUrl('sostenibilidad.jpg')} 
                alt="Delycorp Equipo" 
            />
            {/* Elemento decorativo (cuadro rojo) */}
            <div className="deco-box"></div>
            </div>

        </div>
        </section>
    );
    };

    export default CorporateSection;