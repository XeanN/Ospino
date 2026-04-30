    import React, { useEffect, useRef, useState } from 'react';
    import { getAssetUrl } from '../utils/assets'; // 1. Importar
    import { Link } from 'react-router-dom';
    import './BrandsCarousel.css';

    const BrandsCarousel = () => {
    const scrollRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // LISTA DE MARCAS (Basada en tus fotos: Colombina, Amazon, etc.)
    const brands = [
        { name: "Deyelli", logoUrl: getAssetUrl('logos/deyelli.jpg'), link: "/marca/deyelli" },
        { name: "D'loe", logoUrl: getAssetUrl('logos/dloe.jpg'), link: "/marca/dloe" },
        { name: "Monfer", logoUrl: getAssetUrl('logos/monfer.jpg'), link: "/marca/monfer" },
        { name: "Guandy", logoUrl: getAssetUrl('logos/huandy.jpg'), link: "/marca/Guandy" },
        { name: "King", logoUrl: getAssetUrl('logos/king-logo.png'), link: "/marca/king-cookies" },
        { name: "Crash", logoUrl: getAssetUrl('logos/Crash-logo.png'), link: "/marca/crash" },
    ];

    // Duplicamos la lista varias veces para asegurar que sea "infinita" en pantallas grandes
    const infiniteBrands = [...brands, ...brands, ...brands, ...brands];

    // LÓGICA DE AUTO-SCROLL INFINITO
    useEffect(() => {
        let animationFrameId;

        const autoScroll = () => {
        if (!isDown && !isPaused && scrollRef.current) {
            const slider = scrollRef.current;
            slider.scrollLeft += 1; // Velocidad del movimiento (1px por frame)

            // Si llegamos a la mitad (donde se repiten los elementos), reseteamos sin que se note
            // Asumimos que la primera mitad es el set original duplicado
            const maxScroll = slider.scrollWidth / 2; 
            if (slider.scrollLeft >= maxScroll) {
            slider.scrollLeft = 0;
            }
        }
        animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isDown, isPaused]);

    // LÓGICA PARA ARRASTRAR (DRAG)
    const handleMouseDown = (e) => {
        setIsDown(true);
        setIsPaused(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeftState(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
        setIsPaused(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
        setIsPaused(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Velocidad de arrastre
        scrollRef.current.scrollLeft = scrollLeftState - walk;
    };

    return (
        <section className="brands-carousel-section">
        {/* Título dentro del container para alinearse con la web */}
        <div className="container">
            <h2 className="carousel-title">Nuestras marcas</h2>
        </div>
        
        {/* El carrusel está FUERA del container para ser FULL WIDTH */}
        <div 
            className="carousel-full-width-wrapper"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            // Eventos táctiles para celular
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            <div className="carousel-track">
            {infiniteBrands.map((brand, index) => (
                <div key={index} className="brand-item">
                {/* Usamos onDragStart preventDefault para que la imagen no se arrastre "fantasma" */}
                <Link to={brand.link} className="brand-link" onDragStart={(e) => e.preventDefault()}>
                    <div className="brand-circle">
                    <img src={brand.logoUrl} alt={brand.name} draggable="false" />
                    </div>
                </Link>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default BrandsCarousel;