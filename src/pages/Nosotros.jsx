    import React from 'react';
    import './Nosotros.css';
    import { FaHandshake, FaLightbulb, FaUserTie, FaBuilding, FaWarehouse, FaTruck } from 'react-icons/fa';

    const Nosotros = () => {
    return (
        <div className="nosotros-page">
        
        {/* 1. INTRODUCCIÓN Y ¿QUIÉNES SOMOS? (Estilo Imagen 4bb06a.png) */}
        <section id="quienes-somos" className="intro-section container">
            <div className="intro-text">
            <p className="subtitle">DELYCORP</p>
            <h1 className="main-title">Quiénes Somos</h1>
            <p className="summary-text">
                Somos un aliado estratégico cuyo objetivo es que tu cliente busque la recompra en tu negocio, 
                brindándote un portafolio variado con nuestras líneas Best Seller de golosinas Deyelli, 
                [cite_start]Bebida Refrescante D'Loe y Bombones Monfer, además de la rentabilidad que necesita tu negocio. [cite: 149, 140, 136]
            </p>
            <div className="stats-row-nosotros">
                <div className="stat-box">
                <span className="stat-number">15+</span>
                [cite_start]<span className="stat-label">Años de Experiencia en el rubro [cite: 143]</span>
                </div>
                <div className="stat-box">
                <span className="stat-number">15.000+</span>
                [cite_start]<span className="stat-label">Puntos de Venta a Nivel Nacional [cite: 133]</span>
                </div>
            </div>
            </div>
            <div className="intro-image-container">
            <img 
                src="https://images.unsplash.com/photo-1606857500127-14227918a56c?q=80&w=1000&auto=format&fit=crop" // Placeholder logístico/equipo
                alt="Delycorp Equipo" 
            />
            </div>
        </section>

        {/* 2. HISTORIA (Estilo Imagen 4bb126.png) */}
        <section id="historia" className="history-section">
            <div className="container">
            <h2 className="section-header-blue">Nuestra Historia: +15 años de experiencia</h2>
            <div className="history-grid">
                <div className="history-timeline">
                <div className="timeline-item">
                    <span className="timeline-year">INICIOS</span>
                    [cite_start]<p>Nuestro fundador inicia esta aventura con una experiencia previa en el rubro de consumo masivo por más de 15 años. [cite: 143]</p>
                </div>
                <div className="timeline-item">
                    <span className="timeline-year">2016</span>
                    [cite_start]<p>Se decide ingresar al rubro de golosinas importadas, comercializando productos que despiertan el efecto "¡Wow!" por su innovación, calidad y precio. [cite: 144, 145]</p>
                </div>
                <div className="timeline-item">
                    <span className="timeline-year">HOY</span>
                    [cite_start]<p>Gracias a nuestro equipo y clientes, destacamos como una empresa referente en golosinas importadas a nivel nacional. [cite: 146]</p>
                </div>
                </div>
                
                <div className="history-image-right">
                    <img 
                        src="https://images.unsplash.com/photo-1542844510-18e95085d386?q=80&w=400&auto=format&fit=crop" 
                        alt="Fundador" 
                    />
                </div>
            </div>
            </div>
        </section>

        {/* 3. VALORES CORPORATIVOS (Estilo Imagen 4bb08d.png - Fondo Oscuro) */}
        <section id="valores" className="values-corporate-section">
            <div className="container">
            <h2 className="section-header-white">Valores Corporativos</h2>
            <p className="values-intro">
                Promovemos y nos comprometemos con la aplicación de los siguientes valores, que caracterizan nuestras actuaciones, en procura de la excelencia.
            </p>
            <div className="values-grid-corporate">
                
                <div className="value-item-corporate">
                <div className="icon-corporate"><FaHandshake /></div>
                <h3>Integridad</h3>
                [cite_start]<p>Actuamos con transparencia y ética en cada decisión y proceso. [cite: 159]</p>
                </div>
                
                <div className="value-item-corporate">
                <div className="icon-corporate"><FaLightbulb /></div>
                <h3>Innovación</h3>
                [cite_start]<p>Buscamos productos que despiertan el efecto "¡Wow!" [cite: 144] [cite_start]y perfeccionamos nuestras habilidades diariamente. [cite: 153, 160]</p>
                </div>
                
                <div className="value-item-corporate">
                <div className="icon-corporate"><FaBuilding /></div>
                <h3>Compromiso</h3>
                [cite_start]<p>Generamos relaciones redituales a largo plazo con nuestros aliados y clientes. [cite: 153, 161]</p>
                </div>

            </div>
            </div>
        </section>

        {/* 4. EQUIPO Y LOGÍSTICA */}
        <section id="equipo" className="team-logistics-section container">
            <h2 className="section-header-blue">Nuestro Equipo y Logística</h2>
            <div className="logistics-grid">
            <div className="logistics-info">
                <h3>Capital Humano</h3>
                <p>Nuestro equipo de colaboradores es el recurso más valioso de nuestra compañía. [cite_start]Estamos convencidos de que si se sienten felices y siguen perfeccionando sus habilidades, podemos crear relaciones duraderas. [cite: 152, 153]</p>
                <h3>Cobertura</h3>
                [cite_start]<p>Contamos con más de 15,000 puntos de venta a nivel nacional y más de 200 mayoristas y distribuidores. [cite: 165, 166, 167, 168]</p>
            </div>
            <div className="logistics-viz">
                [cite_start]<div className="viz-item"><FaWarehouse /><p>Almacenes de alta capacidad [cite: 243]</p></div>
                [cite_start]<div className="viz-item"><FaTruck /><p>Logística y Distribución [cite: 164]</p></div>
                [cite_start]<div className="viz-item"><FaUserTie /><p>Oficinas Modernas [cite: 250]</p></div>
            </div>
            </div>
        </section>
        
        </div>
    );
    };

    export default Nosotros;