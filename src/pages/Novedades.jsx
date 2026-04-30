    import React from 'react';
    import { Link } from 'react-router-dom';
    import { newsData } from '../data/news';
    import { FaArrowRight } from 'react-icons/fa';
    import './Novedades.css';

    const Noticias = () => {
    return (
        <div className="noticias-page">
        
        <div className="news-hero">
            <div className="container">
            <h1>Novedades</h1>
            <p>Entérate de lo último en Delycorp y nuestras marcas.</p>
            </div>
        </div>

        <div className="container">
            <div className="news-grid">
            {newsData.map((item) => (
                <Link to={`/novedades/${item.id}`} key={item.id} className="news-card">
                <div className="news-card-image">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="news-card-content">
                    <div className="news-meta">
                    <span className="news-category">{item.category}</span>
                    <span>{item.date}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <span className="read-more-btn">Leer más <FaArrowRight /></span>
                </div>
                </Link>
            ))}
            </div>
        </div>

        </div>
    );
    };

    export default Noticias;