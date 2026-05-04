import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { newsData } from '../data/news';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const NoticiaDetalle = () => {
  const { slug } = useParams();
  const newsItem = newsData.find(n => n.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!newsItem) return (
    <div className="container" style={{ paddingTop: '150px' }}>
      <p>Blog no encontrado.</p>
      <Link to="/blogs">← Volver a Blogs</Link>
    </div>
  );

  const otherNews = newsData.filter(n => n.slug !== slug).slice(0, 3);
  const canonicalUrl = `https://ospino.pe/blogs/${newsItem.slug}`;

  return (
    <div className="noticias-page">

      {/* ✅ react-helmet-async — equivalente a Rank Math en WordPress */}
      <Helmet>
        {/* Title y metas básicas */}
        <title>{newsItem.metaTitle}</title>
        <meta name="description" content={newsItem.metaDescription} />
        <meta name="keywords" content={newsItem.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph — para WhatsApp, Facebook, LinkedIn */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={newsItem.metaTitle} />
        <meta property="og:description" content={newsItem.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={newsItem.ogImage || newsItem.image} />
        <meta property="og:site_name" content="Ospino – Distribuidora de Golosinas" />
        <meta property="og:locale" content="es_PE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={newsItem.metaTitle} />
        <meta name="twitter:description" content={newsItem.metaDescription} />
        <meta name="twitter:image" content={newsItem.ogImage || newsItem.image} />

        {/* Schema.org Article — datos estructurados para Google */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": newsItem.title,
          "description": newsItem.metaDescription,
          "url": canonicalUrl,
          "image": newsItem.ogImage || newsItem.image,
          "datePublished": newsItem.dateISO || newsItem.date,
          "publisher": {
            "@type": "Organization",
            "name": "Ospino",
            "url": "https://ospino.pe",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ospino.pe/logo-oficial.jpeg"
            }
          }
        })}</script>
      </Helmet>

      {/* Banner */}
      <div className="news-hero" style={{ height: '250px', padding: '40px 0' }}>
        <div className="container">
          <Link
            to="/blogs"
            style={{
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              justifyContent: 'center',
              marginBottom: '10px'
            }}
          >
            <FaArrowLeft /> Volver a Blogs
          </Link>
          <h1>Blog Ospino</h1>
        </div>
      </div>

      {/* Contenido del artículo */}
      <div className="container">
        <article className="news-detail-container">

          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="detail-image"
            loading="eager"
            width="800"
            height="450"
          />

          <div className="detail-header">
            <span style={{
              color: 'var(--color-primary)',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}>
              {newsItem.category}
            </span>
            {/* H1 = keyword principal — como Rank Math lo recomienda */}
            <h1>{newsItem.title}</h1>
            <time className="detail-date" dateTime={newsItem.dateISO}>
              {newsItem.date}
            </time>
          </div>

          {/* Contenido HTML: H2, listas, párrafos — estructura SEO correcta */}
          <div className="detail-body" dangerouslySetInnerHTML={{ __html: newsItem.content }} />

        </article>
      </div>

      {/* Blogs relacionados */}
      <div className="related-news-section">
        <div className="container">
          <h2 style={{
            color: 'var(--color-corporate-blue)',
            fontSize: '2rem',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            Otros Blogs de interés
          </h2>
          <div className="news-grid">
            {otherNews.map((item) => (
              <Link to={`/blogs/${item.slug}`} key={item.id} className="news-card">
                <div className="news-card-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="news-card-content">
                  <div className="news-meta">
                    <span className="news-category">{item.category}</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem' }}>{item.title}</h3>
                  <span className="read-more-btn" style={{ fontSize: '0.8rem' }}>
                    Leer <FaArrowRight />
                  </span>
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