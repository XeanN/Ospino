    import React from 'react';
    import { Link } from 'react-router-dom';
    import { newsData } from '../data/news'; // 1. Importamos la base de datos real
    import './NewsSection.css';

    const NewsSection = () => {
    // 2. Tomamos solo las 3 primeras noticias para mostrar en el Home
    const latestNews = newsData.slice(0, 3); 

    return (
        <section className="news-section">
        <div className="container">
            
            <div className="section-header">
            <h2 className="section-title">Últimas Novedades</h2>
            <Link to="/novedades" className="view-all-link">Ver todas las novedades &rarr;</Link>
            </div>

            <div className="news-grid">
            {latestNews.map((item) => (
                // Envolvemos toda la tarjeta en un Link para que sea más fácil hacer clic
                <Link to={`/novedades/${item.id}`} key={item.id} className="news-card" style={{textDecoration: 'none', color: 'inherit'}}>
                
                <div className="news-image">
                    <img src={item.image} alt={item.title} />
                    <div className="news-date">{item.date}</div>
                </div>
                
                <div className="news-content">
                    {/* Agregamos la categoría para que se vea más profesional */}
                    <span style={{fontSize:'0.8rem', color:'var(--color-primary)', fontWeight:'bold', textTransform:'uppercase', marginBottom:'5px', display:'block'}}>
                    {item.category}
                    </span>
                    
                    <h3>{item.title}</h3>
                    
                    {/* Usamos 'summary' que es el campo que definimos en data/news.js */}
                    <p>{item.summary}</p>
                    
                    <span className="read-more">Leer más</span>
                </div>
                </Link>
            ))}
            </div>

        </div>
        </section>
    );
    };

    export default NewsSection;