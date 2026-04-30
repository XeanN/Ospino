      import { getAssetUrl } from '../utils/assets'; // 1. Importar
    export const newsData = [
    {
        id: 1,
        title: "Delycorp celebra más de 15 años de trayectoria en el Perú",
        date: "12 NOV, 2024",
        category: "Corporativo",
        image: getAssetUrl('nov-15años.png'), // Foto corporativa
        summary: "Un recorrido por nuestra historia, desde nuestros inicios hasta convertirnos en referentes de la distribución nacional.",
        content: `
        <p>Delycorp celebra un hito importante: más de 15 años llevando calidad a los hogares peruanos. Lo que comenzó como un emprendimiento visionario en el rubro de consumo masivo, hoy es una red consolidada con más de 15,000 puntos de venta.</p>
        <p>Nuestro éxito se debe a la confianza de nuestros socios estratégicos y al compromiso de nuestro equipo humano. Seguimos innovando para ofrecer las mejores marcas como Deyelli y Monfer.</p>
        `
    },
    {
        id: 2,
        title: "Lanzamiento de Campaña Navideña: Panetones Deyelli",
        date: "05 OCT, 2024",
        category: "Lanzamientos",
        image: getAssetUrl('nov-navideños.jpg'), // Foto Panetón/Navidad
        summary: "Descubre nuestra nueva línea de panetones Delitón y Ricotón, diseñados para compartir en familia.",
        content: `
        <p>La navidad ya llegó a Delycorp. Estamos orgullosos de presentar nuestra línea de panetones bajo la marca Deyelli, disponibles en presentaciones de caja y bolsa.</p>
        <p>Con una receta tradicional y un sabor inigualable, el Panetón Delitón busca convertirse en el favorito de la mesa navideña. Ya disponible en nuestra red de distribuidores autorizados.</p>
        `
    },
    {
        id: 3,
        title: "D'Loe: La bebida refrescante que conquista el mercado",
        date: "28 SEP, 2024",
        category: "Marcas",
        image: getAssetUrl('nov-bebidas.jpg'), // Foto Bebida Aloe
        summary: "Con trozos de pulpa real y sin octógonos, D'Loe se posiciona como la opción saludable favorita.",
        content: `
        <p>Nuestra marca exclusiva D'Loe sigue ganando terreno. Gracias a su composición con aloe vera real y su perfil saludable libre de octógonos, se ha convertido en la opción preferida para quienes buscan refrescarse saludablemente.</p>
        <p>Disponible en presentación de 500ml, D'Loe es el complemento perfecto para un estilo de vida activo.</p>
        `
    },
    {
        id: 4,
        title: "Alianza Estratégica: Ampliamos nuestra red de distribución",
        date: "15 AGO, 2024",
        category: "Logística",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop", // Foto Camiones/Logística
        summary: "Sumamos nuevos socios mayoristas en el norte del país para asegurar el abastecimiento continuo.",
        content: `
        <p>Seguimos creciendo. Delycorp anuncia la incorporación de nuevos socios estratégicos en la región norte, fortaleciendo nuestra capacidad logística.</p>
        <p>Con más de 170 distribuidores actuales, nuestro objetivo es garantizar que productos como Monfer y Deyelli lleguen a cada bodega y kiosco del Perú con la mayor eficiencia posible.</p>
        `
    }
    ];