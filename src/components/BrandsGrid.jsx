import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAssetUrl } from '../utils/assets';
import './BrandsGrid.css';

const MotionLink = motion(Link);

// ─── VARIANTES DE ANIMACIÓN (Aparición inmediata al cargar) ─────────────
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Las tarjetas aparecen una tras otra con 0.15s de diferencia
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 }, // Empiezan invisibles y ligeramente más abajo
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 15 } 
  },
};
// ─────────────────────────────────────────────────────────────────────────

const BrandsGrid = () => {

  // ─── CATEGORÍAS ─────────────────────────────────────────────
  const categories = [
    { id: 1, title: "Dulces",       image: getAssetUrl('categorias/dulces.png'),       link: "/productos/dulces"       },
    { id: 2, title: "Chocolatería", image: getAssetUrl('categorias/chocolateria.png'), link: "/productos/chocolateria" },
    { id: 3, title: "Galletas",     image: getAssetUrl('categorias/galletas.png'),     link: "/productos/galletas"     },
    { id: 6, title: "Abarrotes",    image: getAssetUrl('categorias/abarrotes.png'),    link: "/productos/abarrotes"    },
  ];

  return (
    <section className="brands-section">
      <div className="container">
        {/* Cambiamos el div normal por un motion.div para controlar la entrada de toda la grilla */}
        <motion.div 
          className="grid-container"
          variants={containerVariants}
          initial="hidden"
          animate="show" // "animate" fuerza a que la animación ocurra AL CARGAR, sin esperar scroll
        >
          {categories.map((cat) => (
            <MotionLink
              to={cat.link}
              key={cat.id}
              className="brand-card"
              variants={cardVariants} // Conectamos la tarjeta individual a las variantes
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
        </motion.div>
        
        {/* Podemos animar también el botón para que aparezca suavemente */}
        <motion.div 
          className="view-all-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }} // Aparece un poco después de las tarjetas
        >
          <Link to="/productos" className="btn-view-all">
            Ver todos los productos
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsGrid;