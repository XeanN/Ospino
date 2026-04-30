    import React from 'react';
    import { Link } from 'react-router-dom';
    import { getAssetUrl } from '../utils/assets'; // 1. Importar
    import './BrandsGrid.css';

    const BrandsGrid = () => {
    // DATOS DE EJEMPLO: Reemplaza con tus categorías reales
    const categories = [
        {
        id: 1,
        title: "Dulces",
        image: getAssetUrl('dulces.jpg'),
        link: "/productos/dulces"
        },
        {   
        id: 2,
        title: "Chocolatería",
        image: getAssetUrl('chocolates.jpg'),
        link: "/productos/chocolateria"
        },
        {
        id: 3,
        title: "Bebidas",
        image: getAssetUrl('bebidas.jpg'),
        link: "/productos/bebidas"
        },
        {
        id: 4,
        title: "Cuidado de hogar",
        image: getAssetUrl('productos_limpieza.jpg'),
        link: "/productos/cuidado-de-hogar"
        },
        {
        id: 5,  
        title: "Enlatados",
        image: getAssetUrl('durazno.jpg'),
        link: "/productos/enlatados"
        },
        {
        id: 6,
        title: "Productos de campaña",
        image: getAssetUrl('navideños.jpg'),
        link: "/productos/productos-de-campana"
        }
    ];

        return (
        <section className="brands-section">
        <div className="container">
            <div className="section-header">
            <h2 className="section-title">Nuestras Categorías</h2>
            <p className="section-subtitle">Descubre la variedad de productos de calidad que distribuimos.</p>
            </div>

            {/* La Cuadrícula */}
            <div className="grid-container">
            {categories.map((cat) => (
                <Link to={cat.link} key={cat.id} className="brand-card">
                <div className="card-image" style={{ backgroundImage: `url(${cat.image})` }}></div>
                <div className="card-overlay">
                    <h3>{cat.title}</h3>
                    <span className="view-more">Ver Productos</span>
                </div>
                </Link>
            ))}
            </div>

            {/* --- NUEVO: BOTÓN VER TODOS LOS PRODUCTOS --- */}
            <div className="view-all-container">
            <Link to="/productos" className="btn-view-all">
                Ver todos los productos
            </Link>
            </div>

        </div>
        </section>
    );
    };

    export default BrandsGrid;