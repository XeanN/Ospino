import React from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl } from '../utils/assets';
import './BrandsGrid.css';

const BrandsGrid = () => {
    // DATOS DE EJEMPLO: Mantenemos tus categorías
    const categories = [
        { id: 1, title: "Dulces", image: getAssetUrl('dulces.jpg'), link: "/productos/dulces" },
        { id: 2, title: "Chocolatería", image: getAssetUrl('chocolates.jpg'), link: "/productos/chocolateria" },
        { id: 3, title: "Bebidas", image: getAssetUrl('bebidas.jpg'), link: "/productos/bebidas" },
        { id: 4, title: "Cuidado de hogar", image: getAssetUrl('productos_limpieza.jpg'), link: "/productos/cuidado-de-hogar" }
        //{ id: 5, title: "Enlatados", image: getAssetUrl('durazno.jpg'), link: "/productos/enlatados" },
        //id: 6, title: "Productos de campaña", image: getAssetUrl('navideños.jpg'), link: "/productos/productos-de-campana" }*/}
    ];
        
    return (
        <section className="brands-section">
            <div className="container">
                
                {/* La Cuadrícula Flotante */}
                <div className="grid-container">
                    {categories.map((cat) => (
                        <Link to={cat.link} key={cat.id} className="brand-card">
                            
                            {/* Parte Superior: Foto + Botón Píldora */}
                            <div className="card-image-container">
                                <div className="card-image" style={{ backgroundImage: `url(${cat.image})` }}></div>
                                <span className="view-more-pill">Ver más</span>
                            </div>

                            {/* Parte Inferior: Franja de color sólido con el título */}
                            <div className="card-bottom-bar">
                                <h3>{cat.title}</h3>
                            </div>

                        </Link>
                    ))}
                </div>

                {/* Botón Ver Todos los Productos */}
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