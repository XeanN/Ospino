import React, { useState, useEffect } from 'react';
import './HeroSlider.css';
import { getAssetUrl } from '../utils/assets'; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // <--- 1. IMPORTANTE: Importamos Link

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // 2. AGREGAMOS LA PROPIEDAD "link" A CADA SLIDE
    const slides = [
        {
            id: 1,
            image: getAssetUrl("s_Distribución.jpg"),
            title: "Excelencia en Distribución",
            subtitle: "Llevamos calidad a cada rincón del Perú.",
            link: "/nosotros", // <--- Este botón llevará a "Nosotros"
            buttonText: "Conocer Más"
        },
        {
            id: 2,
            image: getAssetUrl("s_Marcas.jpg"),
            title: "Nuestras Marcas",
            subtitle: "Representamos a las mejores marcas del mercado.",
            link: "/productos", // <--- Este botón llevará a "Productos"
            buttonText: "Ver Catálogo"
        },
        {
            id: 3,
            image: getAssetUrl("s_Compromiso.jpg"),
            title: "Compromiso y Pasión",
            subtitle: "Un equipo dedicado a servirte mejor.",
            link: "/trabaja", // <--- Este botón llevará a "Trabaja con Nosotros"
            buttonText: "Únete al Equipo"
        }
    ];

    // Cambio automático cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <div className="hero-slider">
            {slides.map((slide, index) => (
                <div 
                    key={slide.id} 
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="container slide-content">
                        <h2>{slide.title}</h2>
                        <p>{slide.subtitle}</p>
                        
                        {/* 3. REEMPLAZAMOS EL BUTTON POR UN LINK */}
                        {/* Mantenemos la clase "cta-button" para que se vea igual, pero ahora funciona como enlace */}
                        <Link to={slide.link} className="cta-button">
                            {slide.buttonText}
                        </Link>

                    </div>
                </div>
            ))}

            {/* Flechas de navegación */}
            <button className="slider-arrow left" onClick={prevSlide}><FaChevronLeft /></button>
            <button className="slider-arrow right" onClick={nextSlide}><FaChevronRight /></button>

            {/* Puntos indicadores (Dots) */}
            <div className="slider-dots">
                {slides.map((_, index) => (
                    <div 
                        key={index} 
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;