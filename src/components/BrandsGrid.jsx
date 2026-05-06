import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAssetUrl } from '../utils/assets';
import './BrandsGrid.css';

const MotionLink = motion(Link);

const BrandsGrid = () => {
  const categories = [
    { id: 1, title: "Dulces", image: getAssetUrl('dulces.jpg'), link: "/productos/dulces" },
    { id: 2, title: "Chocolatería", image: getAssetUrl('chocolates.jpg'), link: "/productos/chocolateria" },
    { id: 3, title: "Bebidas", image: getAssetUrl('bebidas.jpg'), link: "/productos/bebidas" },
    { id: 4, title: "Cuidado de hogar", image: getAssetUrl('productos_limpieza.jpg'), link: "/productos/cuidado-de-hogar" }
  ];

  return (
    <section className="brands-section">
      <div className="container">
         {/* La Cuadrícula Flotante */}
        <div className="grid-container">
          {categories.map((cat) => (
            <MotionLink
              to={cat.link}
              key={cat.id}
              className="brand-card"
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Parte Superior: Foto + Botón Píldora */}
              <div className="card-image-container">
                <div className="card-image" style={{ backgroundImage: `url(${cat.image})` }}></div>
                <span className="view-more-pill">Ver más</span>
              </div>
              {/* Parte Inferior: Franja de color sólido con el título */}
              <div className="card-bottom-bar">
                <h3>{cat.title}</h3>
              </div>
            </MotionLink>
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