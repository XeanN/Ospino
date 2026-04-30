    import { useEffect } from 'react';
    import { useLocation } from 'react-router-dom';

    const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Esto manda la ventana a la coordenada 0,0 (arriba a la izquierda)
        window.scrollTo(0, 0);
    }, [pathname]); // Se ejecuta cada vez que cambia la ruta (pathname)

    return null; // No dibuja nada, es invisible
    };

    export default ScrollToTop;