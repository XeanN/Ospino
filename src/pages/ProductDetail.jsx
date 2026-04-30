import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts, getCategoryName } from '../data/products';
import './ProductCategory.css'; 

const ProductDetail = () => {
    const { id } = useParams();
    const product = allProducts.find(p => p.id === parseInt(id));

    // --- GALERÍA DINÁMICA ---
    const [gallery, setGallery] = useState([]);
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        if (product) {
            const images = [];
            if (product.img_primary) images.push(product.img_primary);
            if (product.img_secondary && product.img_secondary !== product.img_primary) {
                images.push(product.img_secondary);
            }
            if (product.extra_images && Array.isArray(product.extra_images)) {
                images.push(...product.extra_images);
            }
            setGallery(images);
            setCurrentImage(images[0]);
        }
    }, [product]);

    const phoneNumber = "51999022179"; 
    const handleWhatsApp = () => {
        const message = `Hola Delycorp, estoy interesado en el producto: *${product.name}* (Código: ${product.code}). Quisiera saber stock y precios.`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
    
    if (!product) {
        return (
            <div className="detail-container not-found">
                <h2>Producto no encontrado</h2>
                <Link to="/productos" className="btn-reset">Volver al catálogo</Link>
            </div>
        );
    }

    return (
        <div className="detail-page-wrapper">
            <div className="container">
                
                {/* Botón Volver */}
                <Link to={`/productos/${product.category}`} className="back-link">
                    &larr; Volver a {getCategoryName(product.category)}
                </Link>
                
                <div className="detail-grid-layout">
                    
                    {/* === COLUMNA IZQUIERDA: GALERÍA === */}
                    <div className="image-gallery-column">
                        <div className="main-image-box">
                            <img src={currentImage} alt={product.name} />
                        </div>

                        {/* Tira de Miniaturas */}
                        {gallery.length > 1 && (
                            <div className="thumbnails-row">
                                {gallery.map((imgSrc, index) => (
                                    <div 
                                        key={index}
                                        className={`thumb-item ${currentImage === imgSrc ? 'active' : ''}`}
                                        onClick={() => setCurrentImage(imgSrc)}
                                    >
                                        <img src={imgSrc} alt={`Vista ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* === COLUMNA DERECHA: INFO === */}
                    <div className="product-info-column">
                        <span className="product-brand">
                            {product.brand} - {product.subcategory}
                        </span>
                        <h1 className="product-title">{product.name}</h1>
                        
                        <div className="presentation-box">
                            <h3>Detalles de Presentación</h3>
                            <p><strong>Presentación:</strong> {product.presentation}</p>
                            <p><strong>Peso Unitario:</strong> {product.unit_weight}</p>
                            <p><strong>Código Delycorp:</strong> {product.code}</p>
                        </div>

                        <p className="product-description">
                            {product.description ? product.description : "Este producto está diseñado para generar el efecto ¡Wow! en tus clientes gracias a su calidad y precio."}
                        </p>
                        
                        <button onClick={handleWhatsApp} className="whatsapp-cta-btn">
                            Consultar Stock y Precios
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetail;