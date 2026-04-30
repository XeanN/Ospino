import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAssetUrl } from '../utils/assets';
import { FaChevronRight } from 'react-icons/fa';
import './NosotrosShared.css'; 

const NuestroEquipo = () => {
    
    // El Breadcrumb y la estructura del layout son correctos.
    const internalLinks = [
        { name: "Quiénes Somos", slug: "quienes-somos" },
        { name: "Historia", slug: "historia" },
        { name: "Nuestro Equipo", slug: "nuestro-equipo" },
        { name: "Valores Corporativos", slug: "valores-corporativos" },
    ];
    
    const location = useLocation();

    return (
        <div className="nosotros-subpage equipo-page">
            
            {/* Breadcrumb: Inicio > Quiénes Somos > Nuestro Equipo */}
            <div className="breadcrumb-bar container">
                <Link to="/" className="breadcrumb-link">Inicio</Link> <FaChevronRight className="breadcrumb-arrow" /> 
                <Link to="/nosotros/quienes-somos" className="breadcrumb-link">Quiénes Somos</Link> <FaChevronRight className="breadcrumb-arrow" /> 
                <span className="breadcrumb-current">Nuestro Equipo</span>
            </div>
            
            <div className="container subpage-content-grid single-column"> 
                
                <main className="main-page-content quienes-somos-content-wrapper">
                    
                    {/* BLOQUE DE CONTENIDO: La clase 'reverse-on-desktop' aplica la inversión */}
                    <div className="quienes-somos-content"> 
                        
                        {/* Bloque Texto (Se moverá a la derecha) */}
                        <div className="content-left-text">
                            <p className="sub-title">CAPITAL HUMANO Y LOGÍSTICA</p>
                            <h1 className="page-main-title">Nuestro Equipo</h1>
                            
                            <p className="intro-paragraph">
                                Nuestro equipo de colaboradores es el recurso más valioso de nuestra compañía. 
                                Estamos convencidos de que si nuestro capital humano se siente feliz y sigue perfeccionando sus habilidades, 
                                podemos crear relaciones redituales y a largo plazo con nuestros aliados.
                            </p>
                            
                            <hr className="title-divider" />

                            {/*<p className="secondary-info">
                                Nuestra Cultura Organizacional: Un buen ambiente laboral contribuye a una mayor productividad y compromiso de los colaboradores. Por ello, nos esforzamos diariamente en brindar un ámbito de trabajo adecuado, agradable y seguro.
                            </p>*/}
                            
                            <div className="internal-links-footer">
                                <Link to="/nosotros/quienes-somos" className="internal-link-anchor">Quiénes Somos</Link>
                                <Link to="/nosotros/historia" className="internal-link-anchor">Historia</Link>
                            </div>
                        </div>
                        
                        {/* Bloque Imagen (Se moverá a la izquierda) */}
                        <div className="content-right-image">
                            <img 
                                src={getAssetUrl('Nuestro equipo.jpg')}
                                alt="Nuestro equipo" 
                            />
                        </div>
                        
                    </div>
                    
                </main>
            </div>
        </div>
    );
};

export default NuestroEquipo;