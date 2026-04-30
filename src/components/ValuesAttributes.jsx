import React from 'react';
import { FaHandshake, FaLightbulb, FaBuilding } from 'react-icons/fa';
import './ValuesAttributes.css';

const ValuesAttributes = () => {
    const corporateValues = [
        { 
            icon: FaHandshake, 
            title: 'INTEGRIDAD', 
            description: 'Actuamos con transparencia y ética en cada decisión y proceso.'
        },
        { 
            icon: FaLightbulb, 
            title: 'INNOVACIÓN', 
            description: 'Buscamos productos que despiertan el efecto "¡Wow!" y perfeccionamos nuestras habilidades.'
        },
        { 
            icon: FaBuilding, 
            title: 'COMPROMISO', 
            description: 'Generamos relaciones redituales y a largo plazo con nuestros aliados y clientes.'
        },
    ];

    return (
        <section className="values-attributes-section">
            {/* AQUÍ ESTÁ EL CAMBIO: No hay div.container, solo una clase de centrado */}
            <div className="content-centered-wrapper"> 
                <h2 className="section-title-white">Nuestros Valores</h2>
                <div className="values-grid-corporate-page">
                    {corporateValues.map((value, index) => (
                        <div key={index} className="value-item-corporate-page">
                            <value.icon className="value-icon" />
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesAttributes;