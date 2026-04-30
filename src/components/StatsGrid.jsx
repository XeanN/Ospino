import React from 'react';
import { FaStore, FaGlobe, FaChartLine, FaTruckMoving, FaBuilding, FaClock } from 'react-icons/fa';
import './StatsGrid.css';

const StatsGrid = () => {
    // Datos de Delycorp extraídos del PDF
    const stats = [
        { 
            icon: FaClock, 
            label: "Años de Experiencia", 
            value: "15+", 
            detail: "En el rubro de consumo masivo."
        },
        { 
            icon: FaStore, 
            label: "Puntos de Venta", 
            value: "15.000+", 
            detail: "Puntos de venta a nivel nacional."
        },
        { 
            icon: FaTruckMoving, 
            label: "Aliados Estratégicos", 
            value: "200+", 
            detail: "Mayoristas y Distribuidores."
        },
        { 
            icon: FaGlobe, 
            label: "Cobertura", 
            value: "Nacional", 
            detail: "Distribuimos en todo el Perú."
        },
        { 
            icon: FaBuilding, 
            label: "Soporte Logístico", 
            value: "Almacén Seguro", 
            detail: "Alta capacidad y seguridad."
        },
        { 
            icon: FaChartLine, 
            label: "Portafolio", 
            value: "Best Sellers", 
            detail: "Líneas Deyelli, D'Loe y Monfer."
        }
    ];

    return (
        <section className="key-metrics-section">
            <div className="container">
                {/* --- NUEVA INTRODUCCIÓN (Estilo Colombina) --- */}
                <header className="stats-header-intro">
                    {/*<h2 className="stats-intro-title">Una empresa con la solidez de Delycorp</h2>
                    <p className="stats-intro-text">
                        Contamos con más de 8 años de experiencia en el rubro de consumo masivo, 
                        siendo un aliado estratégico que busca la recompra en tu negocio, 
                        brindando un portafolio de Best Sellers a nivel nacional.
                    </p>*/}
                </header>
                {/* --- FIN NUEVA INTRODUCCIÓN --- */}
                
                <div className="metrics-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item-full">
                            <stat.icon className="stat-icon" />
                            <h3 className="metric-number">{stat.value}</h3>
                            <p className="metric-label">{stat.label}</p>
                            <p className="stat-detail">{stat.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsGrid;