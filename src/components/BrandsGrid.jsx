import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAssetUrl } from '../utils/assets';
import './BrandsGrid.css';

const MotionLink = motion(Link);

const BrandsGrid = () => {

  // ─── CATEGORÍAS ACTUALIZADAS ─────────────────────────────────────────────
  const categories = [
    { id: 1, title: "Dulces",       image: getAssetUrl('categorias/dulces.png'),       link: "/productos/dulces"       },
    { id: 2, title: "Chocolatería", image: getAssetUrl('categorias/chocolateria.png'), link: "/productos/chocolateria" },
    { id: 3, title: "Galletas",     image: getAssetUrl('categorias/galletas.png'),     link: "/productos/galletas"     },
    { id: 4, title: "Snacks",       image: getAssetUrl('categorias/snacks.jpg'),       link: "/productos/snacks"       },
    { id: 5, title: "Bebidas",      image: getAssetUrl('categorias/bebidas.png'),      link: "/productos/bebidas"      },
    { id: 6, title: "Abarrotes",    image: getAssetUrl('categorias/abarrotes.png'),    link: "/productos/abarrotes"    },
  ];
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <section className="brands-section">
      <div className="container">
        <div className="grid-container">
          {categories.map((cat) => (
            <MotionLink
              to={cat.link}
              key={cat.id}
              className="brand-card"
              whileHover={{ y: -10, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-image-container">
                <div className="card-image" style={{ backgroundImage: `url(${cat.image})` }}></div>
                <span className="view-more-pill">Ver más</span>
              </div>
              <div className="card-bottom-bar">
                <h3>{cat.title}</h3>
              </div>
            </MotionLink>
          ))}
        </div>
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