    import React, { useEffect, useRef, useState } from 'react';
    import { getAssetUrl } from '../utils/assets'; 
    import './RetailCarousel.css';

    const RetailCarousel = () => {
    const scrollRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // LISTA DE CLIENTES RETAIL
    const clients = [
        { name: "Tottus", logoUrl: getAssetUrl('logos/tottus.png') },
        { name: "Vivanda", logoUrl: getAssetUrl('logos/vivanda.png') },
        { name: "Dollar City", logoUrl: getAssetUrl('logos/dollarcity.png') },
        { name: "Metro", logoUrl: getAssetUrl('logos/metro.png') },
        { name: "Wong", logoUrl: getAssetUrl('logos/wong.png') },
        { name: "Plaza Vea", logoUrl: getAssetUrl('logos/plazavea.png') },
    ];

    // Duplicamos la lista para efecto infinito (x4 para asegurar fluidez en pantallas grandes)
    const infiniteClients = [...clients, ...clients, ...clients, ...clients];

    // --- LÓGICA DE AUTO-SCROLL (Igual a tu carrusel anterior) ---
    useEffect(() => {
        let animationFrameId;

        const autoScroll = () => {
        if (!isDown && !isPaused && scrollRef.current) {
            const slider = scrollRef.current;
            slider.scrollLeft += 1; // Velocidad de desplazamiento

            // Reset invisible para loop infinito
            // Calculamos la mitad del contenido total
            const maxScroll = slider.scrollWidth / 2; 
            if (slider.scrollLeft >= maxScroll) {
            // Ajuste fino: Restamos para volver al inicio del set duplicado sin salto visual
            // (A veces scrollLeft = 0 es brusco si el cálculo no es exacto, pero suele funcionar)
            slider.scrollLeft = slider.scrollLeft - maxScroll; 
            }
        }
        animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isDown, isPaused]);

    // --- LÓGICA DRAG & DROP ---
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
        const walk = (x - startX) * 2; 
        scrollRef.current.scrollLeft = scrollLeftState - walk;
    };

    return (
        <section className="retail-carousel-section">
        <div className="container">
            <h2 className="retail-title">Aliados Retail</h2>
            <p className="retail-subtitle">Las cadenas más importantes confían en nosotros</p>
        </div>
        
        <div 
            className="retail-carousel-wrapper"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            <div className="retail-track">
            {infiniteClients.map((client, index) => (
                <div key={index} className="retail-item">
                <div className="retail-card">
                    <img 
                        src={client.logoUrl} 
                        alt={client.name} 
                        draggable="false" 
                        title={client.name}
                    />
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default RetailCarousel;