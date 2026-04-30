    import React from 'react';
    import { Link } from 'react-router-dom';
    import { FaChevronRight, FaCloudUploadAlt } from 'react-icons/fa';
    import './TrabajaConNosotros.css';

    const TrabajaConNosotros = () => {
    return (
        <div className="trabaja-page">

        {/* 1. HERO BANNER */}
        <section className="work-hero">
            <div className="work-hero-content">
            <h1>Sé parte de nuestra familia</h1>
            <p>Buscamos talento apasionado que quiera crecer con nosotros.</p>
            </div>
        </section>

        {/* Breadcrumb */}
        <div className="breadcrumb-bar container">
            <Link to="/" className="breadcrumb-link">Inicio</Link> <FaChevronRight className="breadcrumb-arrow" /> 
            <span className="breadcrumb-current">Trabaja con Nosotros</span>
        </div>

        <div className="container">
            
            {/* 2. TEXTO DE CULTURA (Datos del PDF) */}
            <section className="culture-section">
            <h2 className="culture-title">El talento humano es nuestra prioridad</h2>
            <p className="culture-text">
                Nuestro equipo de colaboradores es el recurso más valioso de nuestra compañía. 
                Estamos convencidos de que si nuestro capital humano se siente feliz y sigue perfeccionando sus habilidades, 
                podemos crear relaciones redituales y a largo plazo.
                {/*<br /><br />
                Nos esforzamos diariamente en brindar un ámbito de trabajo adecuado, agradable y seguro.*/}
            </p>
            
            </section>
            <p className="secondary-info">
                Nuestra Cultura Organizacional: Un buen ambiente laboral contribuye a una mayor productividad y compromiso de los colaboradores. Por ello, nos esforzamos diariamente en brindar un ámbito de trabajo adecuado, agradable y seguro.
            </p>

            {/* 3. FORMULARIO DE POSTULACIÓN */}
            <section className="application-container">
                <h3 className="form-title">Envíanos tu CV</h3>

                <p className="culture-text" style={{ textAlign: "center", marginBottom: "20px" }}>
                    Completa nuestro formulario oficial o envíanos tu CV directamente por WhatsApp.
                </p>

                <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>

                    {/* Botón Google Form */}
                    <a 
                    href="https://forms.gle/qUUU5sFffE9UHfDe8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-submit"
                    style={{
                        textDecoration: "none",
                        padding: "15px 30px",
                        fontSize: "18px",
                        display: "inline-block",
                        backgroundColor: "#e50046",
                        color: "white",
                        borderRadius: "8px",
                        transition: "0.3s"
                    }}
                    >
                    Ir al Formulario
                    </a>

                    {/* Botón WhatsApp */}
                    <a 
                    href="https://wa.me/51999022179?text=Hola%20Delycorp,%20deseo%20postular%20y%20adjunto%20mi%20CV."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-cv"
                    >
                    Enviar CV por WhatsApp
                    </a>

                </div>
            </section>


        </div>
        </div>
    );
    };

    export default TrabajaConNosotros;