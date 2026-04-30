    import React from 'react';
    import { Link } from 'react-router-dom';
    import { getAssetUrl } from '../utils/assets';
    import './CtaSection.css';

    const CtaSection = () => {
    return (
        <section className="cta-section">
        <div className="container cta-grid">
            
            {/* Lado Izquierdo: Texto y Botón */}
            <div className="cta-content">
            <h2>Toda la variedad de productos en un solo lugar</h2>
            <p>
                Explora nuestro catálogo completo y descubre por qué somos el aliado perfecto para tu negocio.
            </p>
            <Link to="/productos" className="cta-button">
                Explorar Productos
            </Link>
            </div>

            {/* Lado Derecho: Imagen / Logo Grande */}
            <div className="cta-image">
            {/* Aquí podrías poner un logo grande, un icono o una imagen relevante */}
            <img src={getAssetUrl('logo.png')} alt="Delycorp Gran Distribuidor" />
            </div>

        </div>
        </section>
    );
    };

    export default CtaSection;