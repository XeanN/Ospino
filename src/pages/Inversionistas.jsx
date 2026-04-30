    import React from 'react';
    import { Link } from 'react-router-dom';
    import { FaChevronRight, FaChartLine, FaHandshake, FaStore, FaEnvelope } from 'react-icons/fa';
    import './Inversionistas.css';

    const Inversionistas = () => {
    return (
        <div className="inversionistas-page">

        {/* 1. HERO BANNER */}
        <section className="investor-hero">
            <div className="investor-hero-content">
            <h1>Relación con Inversionistas</h1>
            <p>Transparencia, solidez y crecimiento sostenible en el mercado de consumo masivo.</p>
            </div>
        </section>

        {/* Breadcrumb */}
        <div className="breadcrumb-bar container">
            <Link to="/" className="breadcrumb-link">Inicio</Link> <FaChevronRight className="breadcrumb-arrow" /> 
            <span className="breadcrumb-current">Inversionistas</span>
        </div>

        <div className="container">
            
            {/* 2. INTRODUCCIÓN ESTRATÉGICA */}
            <section className="investor-intro">
            <h2>Un Aliado Estratégico Rentable</h2>
            <p>
                En Delycorp, nos enfocamos en generar valor a largo plazo. Nuestro modelo de negocio se basa en ofrecer un portafolio de productos de alta rotación ("Best Sellers") que garantizan la rentabilidad de nuestros socios comerciales.
                <br /><br />
                Nuestra trayectoria de crecimiento sostenido y nuestra sólida infraestructura logística nos posicionan como una oportunidad de inversión segura y confiable en el sector de alimentos importados.
            </p>
            </section>

            {/* 3. CIFRAS CLAVE (Highlights del PDF) */}
            <section className="investor-stats-grid">
                {/* Dato 1: Experiencia */}
                <div className="investor-stat-card">
                    <FaChartLine className="stat-icon-large" />
                    <span className="stat-value-large">+15 Años</span>
                    <span className="stat-label-large">De Experiencia en el Rubro</span>
                </div>

                {/* Dato 2: Cobertura */}
                <div className="investor-stat-card">
                    <FaStore className="stat-icon-large" />
                    <span className="stat-value-large">15,000+</span>
                    <span className="stat-label-large">Puntos de Venta Nacionales</span>
                </div>

                {/* Dato 3: Red Comercial */}
                <div className="investor-stat-card">
                    <FaHandshake className="stat-icon-large" />
                    <span className="stat-value-large">+170</span>
                    <span className="stat-label-large">Distribuidores y Mayoristas</span>
                </div>
            </section>

        </div>

        {/* 4. SECCIÓN DE CONTACTO DIRECTO (BOTÓN) */}
        <section className="investor-contact-section">
            <div className="container contact-box">
                <h3>¿Interesado en invertir o generar alianzas?</h3>
                <p>
                    Póngase en contacto directo con nuestra Gerencia Comercial y Financiera para recibir información detallada sobre oportunidades de negocio y reportes corporativos.
                </p>
                
                {/* Botón de correo directo (mailto) o WhatsApp */}
                <a href="mailto:gerencia@delycorp.pe" className="btn-investor-contact">
                    <FaEnvelope /> Contactar con Relación con Inversionistas
                </a>
            </div>
        </section>

        </div>
    );
    };

    export default Inversionistas;