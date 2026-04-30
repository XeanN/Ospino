    import React from 'react';
    import { Link } from 'react-router-dom';
    import { FaChevronRight, FaChartLine, FaHandHoldingHeart, FaBoxOpen, FaStar, FaStore, FaBoxes, FaMapMarkedAlt } from 'react-icons/fa';
    import './Clientes.css';
    import RetailCarousel from '../components/RetailCarousel';

    const Clientes = () => {

        const clientesFelices = [
        { id: 1,  img: "Cliente_1.jpg" },
        { id: 2,  img: "Cliente_2.jpg" },

    ];
    return (
        <div className="clientes-page">
        

        {/* 1. HERO BANNER */}
        <section className="clients-hero">
            <div className="clients-hero-content">
            <h1>Clientes</h1>
            <p>Aliados estratégicos para el crecimiento de tu negocio.</p>
            </div>
        </section>

        {/* Breadcrumb */}
        <div className="breadcrumb-bar container">
            <Link to="/" className="breadcrumb-link">Inicio</Link> <FaChevronRight className="breadcrumb-arrow" /> 
            <span className="breadcrumb-current">Clientes</span>
        </div>

        {/* 2. CÓMO TRABAJAMOS (INTRODUCCIÓN) */}
        <div className="container">
            <section className="clients-intro-section">
            <h2>¿Cómo trabajamos?</h2>
            <div className="intro-box">
                <p>
                En Delycorp no somos solo proveedores, somos un <strong>aliado estratégico</strong>. 
                Nuestro principal objetivo es que tu cliente final busque la recompra en tu negocio. 
                Para lograrlo, te brindamos un portafolio variado con nuestras líneas <em>Best Seller</em> 
                de golosinas Deyelli, bebidas D'Loe y bombones Monfer.
                </p>
                <p>
                Nos enfocamos en asegurar la <strong>rentabilidad que necesita tu negocio</strong> para seguir creciendo, 
                acompañada de un soporte post-venta constante y cercano.
                </p>
            </div>
            </section>
        </div>

        {/* 3. PILARES DE VALOR (GRID) */}
        <section className="value-pillar-section">
            <div className="container">
                <h3 style={{textAlign:'center', color: '#003B71', fontSize:'2rem', fontWeight:'800', marginBottom:'40px'}}>
                    Nuestra Propuesta de Valor
                </h3>
                
                <div className="pillar-grid">
                    {/* Pilar 1 */}
                    <div className="pilla-card">
                        <FaChartLine className="pilla-icon" />
                        <h3>Rentabilidad Garantizada</h3>
                        <p>
                            Ofrecemos productos de alta rotación e innovación, diseñados para generar márgenes atractivos 
                            y despertar el efecto "¡Wow!" en tus clientes.
                        </p>
                    </div>

                    {/* Pilar 2 */}
                    <div className="pilla-card">
                        <FaBoxOpen className="pilla-icon" />
                        <h3>Portafolio Variado</h3>
                        <p>
                            Contamos con un catálogo amplio que incluye chocolates, gomas, caramelos líquidos y juguetes interactivos, 
                            cubriendo todas las necesidades de tu punto de venta.
                        </p>
                    </div>

                    {/* Pilar 3 */}
                    <div className="pilla-card">
                        <FaHandHoldingHeart className="pilla-icon" />
                        <h3>Soporte Integral</h3>
                        <p>
                            Brindamos acompañamiento post-venta para asegurar la correcta exhibición y rotación de los productos, 
                            construyendo relaciones redituales a largo plazo.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. CANALES Y COBERTURA (DISEÑO SÓLIDO +) */}
        <section className="channels-section">
            <div className="container">
                
                {/* Título alineado a la izquierda con el signo + */}
                <div className="channels-header-left">
                    <h3>Nuestros Aliados {/*<span className="plus-symbol">+</span>*/}</h3>
                    <p>
                        Nuestros aliados estratégicos persiguen un crecimiento sostenido, así mismo convierten cada 
                        oportunidad de negocio que ofrecemos en buenos resultados que consolidan el éxito de su empresa.
                    </p>
                </div>

                <div className="channels-grid">
                    
                    {/* TARJETA 1 */}
                    <div className="channel-card">
                        <div className="icon-box-solid">
                            <FaStore />
                        </div>
                        <h4>Mayoristas</h4>
                        <p>
                            Son más de <strong>4,470 clientes</strong> ubicados en los principales mercados de abastos del país que confían en nuestro portafolio de productos.
                        </p>
                    </div>

                    {/* TARJETA 2 */}
                    <div className="channel-card">
                        <div className="icon-box-solid">
                            <FaBoxes />
                        </div>
                        <h4>Distribuidores</h4>
                        <p>
                            Hemos establecido una alianza estratégica basada en el "win to win" con más de <strong>130 distribuidores</strong> a nivel nacional.
                        </p>
                    </div>

                    {/* TARJETA 3 */}
                    <div className="channel-card">
                        <div className="icon-box-solid">
                            <FaMapMarkedAlt />
                        </div>
                        <h4>Cobertura Nacional</h4>
                        <p>
                            Presencia garantizada en <strong>130,000 bodegas</strong> y markets en las 3 regiones del País.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        <RetailCarousel />

        {/* --- 5. GALERÍA DE CLIENTES FELICES --- */}
            <section className="happy-clients-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Clientes felices</h2>
                        <p>Negocios que crecen día a día junto a nosotros.</p>
                    </div>

                    <div className="gallery-grid">
                        {clientesFelices.map((cliente) => (
                            <div key={cliente.id} className="gallery-item">
                                <img src={cliente.img} alt={`Cliente feliz ${cliente.nombre}`} />
                                <div className="gallery-overlay">
                                    <span>{cliente.nombre}</span>
                                    <div className="stars">
                                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
    };

    export default Clientes;