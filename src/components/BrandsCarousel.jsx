import React, { useEffect, useRef, useState } from 'react';
import { getAssetUrl } from '../utils/assets';
import { Link } from 'react-router-dom';
import './BrandsCarousel.css';

const BrandsCarousel = () => {
    const scrollRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // ─── MARCAS ACTUALIZADAS ──────────────────────────────────────────────────
    const brands = [
        { name: "Ambrosoli",      logoUrl: getAssetUrl('logos/ambrosoli.png'),      link: "/marca/ambrosoli"      },
        { name: "Benoti",         logoUrl: getAssetUrl('logos/benoti.png'),          link: "/marca/benoti"         },
        { name: "Bogie",          logoUrl: getAssetUrl('logos/bogie.png'),           link: "/marca/bogie"          },
        { name: "Bon O Bon",      logoUrl: getAssetUrl('logos/bon-o-bon.png'),       link: "/marca/bon-o-bon"      },
        { name: "Casino",         logoUrl: getAssetUrl('logos/casino.png'),          link: "/marca/casino"         },
        { name: "Chips Ahoy",     logoUrl: getAssetUrl('logos/chips-ahoy.png'),      link: "/marca/chips-ahoy"     },
        { name: "Costa",          logoUrl: getAssetUrl('logos/costa.png'),           link: "/marca/costa"          },
        { name: "Ferrero Rocher", logoUrl: getAssetUrl('logos/ferrero-rocher.png'),  link: "/marca/ferrero-rocher" },
        { name: "Field",          logoUrl: getAssetUrl('logos/field.png'),           link: "/marca/field"          },
        { name: "Globo Pop",      logoUrl: getAssetUrl('logos/globo-pop.png'),       link: "/marca/globo-pop"      },
        { name: "Grano de Oro",   logoUrl: getAssetUrl('logos/grano-de-oro.png'),    link: "/marca/grano-de-oro"   },
        { name: "Halls",          logoUrl: getAssetUrl('logos/halls.png'),           link: "/marca/halls"          },
        { name: "Inka Chips",     logoUrl: getAssetUrl('logos/inka-chips.png'),      link: "/marca/inka-chips"     },
        { name: "Monfer",         logoUrl: getAssetUrl('logos/monfer.png'),          link: "/marca/monfer"         },
        { name: "Oreo",           logoUrl: getAssetUrl('logos/oreo.png'),            link: "/marca/oreo"           },
        { name: "Orquídea",       logoUrl: getAssetUrl('logos/orquidea.png'),        link: "/marca/orquidea"       },
        { name: "Ospino",         logoUrl: getAssetUrl('logos/ospino.png'),          link: "/marca/ospino"         },
        { name: "Picaras",        logoUrl: getAssetUrl('logos/picaras.png'),         link: "/marca/picaras"        },
        { name: "Ritz",           logoUrl: getAssetUrl('logos/ritz.png'),            link: "/marca/ritz"           },
        { name: "San Jorge",      logoUrl: getAssetUrl('logos/san-jorge.png'),       link: "/marca/san-jorge"      },
    ];
    // ─────────────────────────────────────────────────────────────────────────

    const infiniteBrands = [...brands, ...brands, ...brands, ...brands];

    useEffect(() => {
        let animationFrameId;
        const autoScroll = () => {
            if (!isDown && !isPaused && scrollRef.current) {
                const slider = scrollRef.current;
                slider.scrollLeft += 1;
                const maxScroll = slider.scrollWidth / 2;
                if (slider.scrollLeft >= maxScroll) slider.scrollLeft = 0;
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        };
        animationFrameId = requestAnimationFrame(autoScroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isDown, isPaused]);

    const handleMouseDown = (e) => {
        setIsDown(true); setIsPaused(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeftState(scrollRef.current.scrollLeft);
    };
    const handleMouseLeave = () => { setIsDown(false); setIsPaused(false); };
    const handleMouseUp    = () => { setIsDown(false); setIsPaused(false); };
    const handleMouseMove  = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeftState - walk;
    };

    return (
        <section className="brands-carousel-section">
            <div className="container">
                <h2 className="carousel-title">Marcas Aliadas</h2>
            </div>
            <div
                className="carousel-full-width-wrapper"
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                <div className="carousel-track">
                    {infiniteBrands.map((brand, index) => (
                        <div key={index} className="brand-item">
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