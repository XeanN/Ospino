    import React from 'react';
    import { Link } from 'react-router-dom';
    import { FaRecycle, FaLeaf, FaBoxOpen, FaGlobeAmericas, FaChevronRight, FaHandHoldingHeart, FaWhatsapp } from 'react-icons/fa';
    import './Sostenibilidad.css';

    const Sostenibilidad = () => {
    return (
        <div className="sostenibilidad-page">
        
        {/* 1. HERO BANNER */}
        <section className="sust-hero">
            <div className="sust-hero-overlay"></div>
            <div className="sust-hero-content container">
            <span className="sust-tag">Compromiso Delycorp</span>
            <h1>Sembrando un Futuro Sostenible</h1>
            <p>
                Integramos la responsabilidad ambiental en cada paso de nuestra cadena logística, 
                asegurando que el crecimiento de hoy no comprometa el bienestar del mañana.
            </p>
            </div>
        </section>

        {/* Breadcrumb */}
        <div className="breadcrumb-bar container">
            <Link to="/" className="breadcrumb-link">Inicio</Link> 
            <FaChevronRight className="breadcrumb-arrow" /> 
            <span className="breadcrumb-current">Sostenibilidad</span>
        </div>

        {/* 2. INTRODUCCIÓN */}
        <section className="sust-intro container">
            <div className="sust-intro-text">
            <h2>Nuestra Visión Verde</h2>
            <p>
                En Delycorp, entendemos que ser líderes en distribución conlleva una gran responsabilidad. 
                No solo transportamos productos; transportamos confianza. Por eso, hemos implementado 
                un sistema de <strong>Gestión Ambiental</strong> enfocado en la economía circular y la reducción 
                de nuestra huella de carbono.
            </p>
            </div>
        </section>

        {/* 3. SECCIÓN PRINCIPAL: RECICLAJE */}
        <section className="recycling-section">
            <div className="container recycling-grid">
            
            {/* Imagen de Reciclaje */}
            <div className="recycling-image">
                <img 
                src="reciclaje.jpg" 
                alt="Gestión de residuos y reciclaje" 
                />
                <div className="floating-badge">
                <FaRecycle /> <span>Economía Circular</span>
                </div>
            </div>

            {/* Texto de Reciclaje */}
            <div className="recycling-content">
                <h3 className="section-label">PROGRAMA DE RECICLAJE</h3>
                <h2>Dando nueva vida a nuestros residuos</h2>
                <p>
                Como centro logístico, generamos volúmenes importantes de embalaje. Nuestro compromiso 
                es asegurar que estos materiales no terminen en vertederos, sino que se reintegren a la cadena productiva.
                </p>
                
                <ul className="recycling-points">
                <li>
                    <div className="icon-box"><FaBoxOpen /></div>
                    <div>
                    <h4>Cartón y Papel</h4>
                    <p>Recolectamos y compactamos el 100% de las cajas de cartón de nuestros almacenes para su re-procesamiento.</p>
                    </div>
                </li>
                <li>
                    <div className="icon-box"><FaLeaf /></div>
                    <div>
                    <h4>Plástico Stretch Film</h4>
                    <p>Segregamos los plásticos de embalaje para transformarlos en materia prima para nuevos productos.</p>
                    </div>
                </li>
                <li>
                    <div className="icon-box"><FaHandHoldingHeart /></div>
                    <div>
                    <h4>Alianzas Estratégicas</h4>
                    <p>Trabajamos con empresas certificadas de gestión de residuos para garantizar la trazabilidad del reciclaje.</p>
                    </div>
                </li>
                </ul>
            </div>

            </div>
        </section>

        {/* 4. PILARES / ESTADÍSTICAS */}
        <section className="sust-pillars">
            <div className="container">
            <h2 className="pillars-title">Nuestros Pilares de Acción</h2>
            <div className="pillars-grid">
                
                <div className="pillar-card">
                <FaGlobeAmericas className="pillar-icon" />
                <h3>Eficiencia Energética</h3>
                <p>Optimizamos nuestras rutas de distribución y utilizamos iluminación LED en nuestros almacenes para reducir el consumo.</p>
                </div>

                <div className="pillar-card">
                <FaRecycle className="pillar-icon" />
                <h3>Gestión de Residuos</h3>
                <p>Política de "Cero Desperdicio" fomentando la reutilización de pallets y materiales de oficina.</p>
                </div>

                <div className="pillar-card">
                <FaLeaf className="pillar-icon" />
                <h3>Cultura Ambiental</h3>
                <p>Capacitamos constantemente a nuestros colaboradores en prácticas sostenibles dentro y fuera de la empresa.</p>
                </div>

            </div>
            </div>
        </section>

        {/* 5. CTA FINAL CON WHATSAPP */}
        <section className="sust-cta">
            <div className="container">
            <h2>¿Tienes iniciativas sostenibles?</h2>
            <p>Estamos abiertos a colaborar con proveedores y socios que compartan nuestro respeto por el medio ambiente.</p>
            
            <a 
                href="https://wa.me/51999022179?text=Hola%20Delycorp,%20me%20gustar%C3%ADa%20presentar%20una%20iniciativa%20de%20sostenibilidad." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-sust-contact"
            >
                <FaWhatsapp size={22} style={{marginRight: '10px'}} /> Contactar al Comité
            </a>
            </div>
        </section>

        </div>
    );
    };

    export default Sostenibilidad;