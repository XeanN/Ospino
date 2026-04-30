    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { 
    FaChevronRight, FaTruckLoading, FaMapMarkedAlt, FaHandshake, 
    FaFileDownload, FaTimes, FaCheckCircle, FaFileExcel, FaWhatsapp // <--- AGREGADO
    } from 'react-icons/fa';
    import './Proveedores.css';

    const Proveedores = () => {
    const [showModal, setShowModal] = useState(false);

    // --- DATOS DEL EXCEL (Cargados para el Modal) ---
    const requirementsData = [
        { doc: "Ficha RUC", fab: "SI", dist: "SI", com: "SI", obs: "Habido y Activo" },
        { doc: "DNI del Representante Legal", fab: "SI", dist: "SI", com: "SI", obs: "Vigente" },
        { doc: "Vigencia de Poder", fab: "SI", dist: "SI", com: "SI", obs: "Antigüedad no mayor a 30 días" },
        { doc: "Licencia de funcionamiento", fab: "SI", dist: "SI", com: "SI", obs: "Vigente" },
        { doc: "Certificado de Inspección Técnica", fab: "SI", dist: "SI", com: "SI", obs: "Vigente" },
        { doc: "Certificado de Calidad / Protocolo", fab: "SI", dist: "NO", com: "NO", obs: "Por lote entregado" },
        { doc: "Registro Sanitario / Notificación", fab: "SI", dist: "SI", com: "SI", obs: "Vigente por producto" },
        { doc: "Validación técnica oficial del plan HACCP", fab: "SI", dist: "NO", com: "NO", obs: "Vigente" },
    ];

    const handleButtonClick = (type) => {
        if (type === 'requirements') {
        setShowModal(true);
        }
    };

    return (
        <div className="proveedores-page">
        
        {/* 1. HERO BANNER */}
        <section className="providers-hero">
            <div className="providers-hero-content">
            <h1>Gestión de Proveedores</h1>
            <p>Construimos relaciones sólidas para llevar calidad a todo el Perú.</p>
            </div>
        </section>

        {/* Breadcrumb */}
        <div className="breadcrumb-bar container">
            <Link to="/" className="breadcrumb-link">Inicio</Link> 
            <FaChevronRight className="breadcrumb-arrow" /> 
            <span className="breadcrumb-current">Proveedores</span>
        </div>

        {/* 2. SECCIÓN "CREZCAMOS JUNTOS" (Texto Centrado) */}
        <section className="intro-text-section">
            <div className="container">
            <div className="intro-content-centered">
                <h2>Crezcamos Juntos</h2>
                <p>
                En Delycorp buscamos socios estratégicos que compartan nuestra visión de excelencia. 
                Nuestro objetivo es potenciar las marcas que representamos, garantizando que lleguen 
                a cada rincón del país a través de nuestra robusta red de distribución.
                </p>
                <p>
                Trabajamos de la mano para asegurar el crecimiento mutuo y la satisfacción del cliente final.
                </p>
            </div>
            </div>
        </section>

        {/* 3. SECCIÓN DE ACCIÓN (Texto y WhatsApp) */}
        <section className="provider-actions-section">
            <div className="container actions-grid-layout">
            
            {/* Columna Izquierda: Texto Corporativo (Estilo Colombina) */}
            <div className="actions-info">
                <h2 className="actions-title">¿Quieres ser proveedor?</h2>
                <ul className="requirements-list">
                <li>
                    Asegúrate de cumplir los requisitos que se indican en el documento <strong>"Requisitos Documentarios de Proveedores"</strong>.
                </li>
                <li>
                    Descarga el formato Excel adjunto para validar la documentación obligatoria según tu rubro (Fabricante, Distribuidor o Comercializador).
                </li>
                <li>
                    Tu información quedará registrada y será revisada por el <strong>Área de Abastecimiento</strong>. Te contactaremos cuando tengamos una solicitud en la que apliquen tus servicios.
                </li>
                <li>
                    Si ya eres nuestro proveedor y quieres actualizar tu oferta de productos, contáctanos directamente a nuestro canal oficial.
                </li>
                </ul>
            </div>

            {/* Columna Derecha: Pila de Botones */}
            <div className="actions-buttons-stack">
                
                {/* Botón 1: Abre el MODAL */}
                <button 
                onClick={() => handleButtonClick('requirements')}
                className="action-btn-pill"
                >
                VER REQUISITOS EN LÍNEA
                </button>

                {/* Botón 2: DESCARGAR EXCEL (Verde) */}
                <a 
                href="/BPA-ANX-02. REQUISITOS DOCUMENTARIOS DE PROVEEDORES.xlsx" 
                download="Requisitos_Proveedores_Delycorp.xlsx"
                className="action-btn-pill excel-btn"
                >
                <FaFileExcel size={18} style={{marginRight: '10px'}}/> DESCARGAR FORMATO EXCEL
                </a>

                {/* Botón 3: DESCARGAR EXCEL Ingles */}
                <a 
                href="/BPA-ANX-02. SUPPLIER DOCUMENTATION REQUIREMENTS - English.xlsx" 
                download="Supplier_Requirements_Delycorp.xlsx"
                className="action-btn-pill excel-btn"
                >
                <FaFileExcel size={18} style={{marginRight: '10px'}}/> DOWNLOAD EXCEL FORMAT
                </a>

                {/* Botón 4: WHATSAPP (NUEVO) */}
                <a 
                href="https://wa.me/51999022179?text=Hola%20Delycorp,%20estoy%20interesado%20en%20ser%20proveedor." 
                target="_blank" 
                rel="noopener noreferrer"
                className="action-btn-pill contact"
                >
                <FaWhatsapp size={20} style={{marginRight: '10px'}}/> CONTACTAR AL ÁREA DE COMPRAS
                </a>

            </div>
            </div>
        </section>

        {/* 4. BENEFICIOS */}
        <section className="providers-benefits">
            <div className="container">
            <h3 className="section-title" style={{textAlign:'center', marginBottom: '40px'}}>
                ¿Por qué ser socio estratégico?
            </h3>
            <div className="benefits-grid">
                <div className="benefit-card">
                <FaMapMarkedAlt className="benefit-icon" />
                <h3>Cobertura Masiva</h3>
                <p>Más de 15,000 puntos de venta.</p>
                </div>
                <div className="benefit-card">
                <FaHandshake className="benefit-icon" />
                <h3>Red Comercial</h3>
                <p>Más de 170 distribuidores aliados.</p>
                </div>
                <div className="benefit-card">
                <FaTruckLoading className="benefit-icon" />
                <h3>Logística</h3>
                <p>Almacenamiento seguro y eficiente.</p>
                </div>
            </div>
            </div>
        </section>

        {/* --- COMPONENTE MODAL (Ventana Emergente) --- */}
        {showModal && (
            <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={() => setShowModal(false)}>
                <FaTimes />
                </button>
                
                <h3 className="modal-title">Requisitos Documentarios (BPA-ANX-02)</h3>
                <p className="modal-subtitle">Lista de documentos según tipo de proveedor</p>
                
                <div className="table-responsive">
                <table className="requirements-table">
                    <thead>
                    <tr>
                        <th>DOCUMENTO</th>
                        <th>Fabricante</th>
                        <th>Distribuidor</th>
                        <th>Comercializador</th>
                        <th>Observación</th>
                    </tr>
                    </thead>
                    <tbody>
                    {requirementsData.map((row, index) => (
                        <tr key={index}>
                        <td className="doc-name">{row.doc}</td>
                        <td className={row.fab === 'SI' ? 'text-center yes' : 'text-center'}>{row.fab}</td>
                        <td className={row.dist === 'SI' ? 'text-center yes' : 'text-center'}>{row.dist}</td>
                        <td className={row.com === 'SI' ? 'text-center yes' : 'text-center'}>{row.com}</td>
                        <td className="obs-text">{row.obs}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        )}

        </div>
    );
    };

    export default Proveedores;