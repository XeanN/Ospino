    import React, { useEffect } from 'react';
    import { useParams, Link } from 'react-router-dom';
    import { newsData } from '../data/news';
    import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
    import './Novedades.css'; // Reusa el CSS

    const NoticiaDetalle = () => {
    const { id } = useParams();
    const newsItem = newsData.find(n => n.id === parseInt(id));

    // Scroll al inicio al cargar
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!newsItem) return <div className="container" style={{paddingTop:'150px'}}>Noticia no encontrada</div>;

    // Filtrar otras noticias para la sección "Ver más" (excluyendo la actual)
    const otherNews = newsData.filter(n => n.id !== parseInt(id)).slice(0, 3);

    return (
        <div className="noticias-page">
        
        {/* Banner Simple */}
        <div className="news-hero" style={{height:'250px', padding:'40px 0'}}>
            <div className="container">
            <Link to="/novedades" style={{color:'white', textDecoration:'none', display:'flex', alignItems:'center', gap:'10px', justifyContent:'center', marginBottom:'10px'}}>
                <FaArrowLeft /> Volver a Novedades
            </Link>
            <h1>Actualidad Delycorp</h1>
            </div>
        </div>

        {/* Contenido Detalle */}
        <div className="container">
            <article className="news-detail-container">
            <img src={newsItem.image} alt={newsItem.title} className="detail-image" />
            
            <div className="detail-header">
                <span style={{color:'var(--color-primary)', fontWeight:'bold', textTransform:'uppercase'}}>{newsItem.category}</span>
                <h1>{newsItem.title}</h1>
                <span className="detail-date">{newsItem.date}</span>
            </div>

            {/* Renderizar HTML seguro para los párrafos */}
            <div className="detail-body" dangerouslySetInnerHTML={{ __html: newsItem.content }} />
            </article>
        </div>

        {/* Sección: Otras Noticias de Interés */}
        <div className="related-news-section">
            <div className="container">
            <h3 style={{color:'var(--color-corporate-blue)', fontSize:'2rem', marginBottom:'30px', textAlign:'center'}}>
                Otras novedades de interés
            </h3>
            <div className="news-grid">
                {otherNews.map((item) => (
                <Link to={`/novedades/${item.id}`} key={item.id} className="news-card">
                    <div className="news-card-image">
                    <img src={item.image} alt={item.title} />
                    </div>
                    <div className="news-card-content">
                    <div className="news-meta">
                        <span className="news-category">{item.category}</span>
                    </div>
                    <h3 style={{fontSize:'1.1rem'}}>{item.title}</h3>
                    <span className="read-more-btn" style={{fontSize:'0.8rem'}}>Leer <FaArrowRight /></span>
                    </div>
                </Link>
                ))}
            </div>
            </div>
        </div>

        </div>
    );
    };

    export default NoticiaDetalle;