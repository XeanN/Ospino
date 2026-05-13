import React, { useState, useEffect } from 'react';
import './HeroSlider.css';
import { getAssetUrl } from '../utils/assets'; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: getAssetUrl("s_AliadoGolosinas.png"),
            title: "Tu mejor aliado en Golosinas",
            subtitle: "Llevamos calidad a cada rincón del Perú.",
            link: "/nosotros",
            buttonText: "Conocer Más"
        },
        {
            id: 2,
            image: getAssetUrl("s_Compromiso.png"),
            title: "Relaciones que generan crecimiento",
            subtitle: "Conectamos con clientes y proveedores para crecer juntos.",
            link: "/productos",
            buttonText: "Ver Catálogo"
        },
        {
            id: 3,
            image: getAssetUrl("s_Confianza.png"),
            title: "Impulsamos tu negocio",
            subtitle: "Ofrecemos productos de calidad y un servicio confiable para tu éxito.",
            link: "/trabaja",
            buttonText: "Únete al Equipo"
        }
    ];

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
                >
                    {/* Imagen completa sin recortes */}
                    <img src={slide.image} alt={slide.title} className="slide-img" />

                    {/* Contenido de texto — solo UNA vez */}
                    <div className="container slide-content">
                        <h2>{slide.title}</h2>
                        <p>{slide.subtitle}</p>
                        <Link to={slide.link} className="cta-button">
                            {slide.buttonText}
                        </Link>
                    </div>
                </div>
            ))}

            {/* Flechas de navegación
            <button className="slider-arrow left" onClick={prevSlide}><FaChevronLeft /></button>
            <button className="slider-arrow right" onClick={nextSlide}><FaChevronRight /></button> */}

            {/* Puntos indicadores
            <div className="slider-dots">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></div>
                ))}
            </div> */}
        </div>
    );
};

export default HeroSlider;