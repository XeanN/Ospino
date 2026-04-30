import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAssetUrl } from '../utils/assets'; // 1. Importar
import { FaChevronRight } from 'react-icons/fa';
import './NosotrosShared.css'; 
import StatsGrid from '../components/StatsGrid'; 
import ValuesAttributes from '../components/ValuesAttributes';

const QuienesSomos = () => {
    // Definición de enlaces internos
    const internalLinks = [
        { name: "Quiénes Somos", slug: "quienes-somos" },
        { name: "Historia", slug: "historia" },
        { name: "Nuestro Equipo", slug: "nuestro-equipo" },
        { name: "Valores Corporativos", slug: "valores-corporativos" },
    ];
    
    const location = useLocation();

    return (
        <div className="nosotros-subpage quienes-somos-page">
            
            {/* 1. Breadcrumb (Centrado por su propio container) */}
            <div className="breadcrumb-bar container">
                <Link to="/" className="breadcrumb-link">Inicio</Link> <FaChevronRight className="breadcrumb-arrow" /> 
                <span className="breadcrumb-current">Quiénes Somos</span>
            </div>
            
            {/* --- Bloque de Contenido (Texto/Imagen) - Debe estar limitado --- */}
            <div className="container content-section-wrapper"> 
                <main className="main-page-content quienes-somos-content-wrapper">
                    
                    <div className="quienes-somos-content">
                        
                        <div className="content-left-text">
                            <p className="sub-title">DELYCORP</p>
                            <h1 className="page-main-title">Quiénes Somos</h1>
                            
                            <p className="intro-paragraph">
                                Impulsamos tu negocio como aliado estratégico, enfocados en maximizar tus ventas y fidelizar
                                a tus clientes con la variedad y calidad característicos de nuestro portafolio de productos como
                                Golosinas interactivas Deyelli, Bebidas D'Loe y Bombones Monfer, Así mismo, estamos comprometidos
                                en brindar un soporte post-venta profesional.
                            </p>
                            
                            {/*<hr className="title-divider" />*/}

                            {/*<p className="secondary-info">
                                La rentabilidad es nuestra meta. Contamos con más de 15 años de experiencia y somos referentes a nivel nacional.
                            </p>*/}
                            
                            {/*<div className="internal-links-footer">
                                <Link to="/nosotros/historia" className="internal-link-anchor">Historia</Link>
                                <Link to="/nosotros/nuestro-equipo" className="internal-link-anchor">Nuestro Equipo</Link>
                            </div>*/}
                        </div>
                        
                        <div className="content-right-image">
                            <img 
                                src={getAssetUrl('quienes somos.jpg')}
                                alt="Equipo Delycorp" 
                            />
                        </div>
                    </div>
                </main>
            </div>

            {/* --- SECCIÓN 2: CUADRÍCULA DE ESTADÍSTICAS --- */}
            {/* Mantenemos el StatsGrid aquí */}
            <StatsGrid /> 
            
            {/* --- SECCIÓN 3: VALORES CORPORATIVOS (FULL WIDTH) --- */}
            {/* ¡ESTE ES EL SECRETO! Este componente está FUERA del div.container que limita el ancho */}
            <ValuesAttributes /> 
            
        </div>
    );
};

export default QuienesSomos;