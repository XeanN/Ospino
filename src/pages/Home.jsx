    import React from 'react';
    import HeroSlider from '../components/HeroSlider';
    import BrandsGrid from '../components/BrandsGrid';
    import BrandsCarousel from '../components/BrandsCarousel'; // <--- 1. IMPORTAR
    import CorporateSection from '../components/CorporateSection';
    import NewsSection from '../components/NewsSection';
    import CtaSection from '../components/CtaSection';

    const Home = () => {
    return (
        <div className="home-page">
        <HeroSlider />
        <BrandsGrid />
        
        <BrandsCarousel /> {/* <--- 2. COLOCAR AQUÍ (Entre Categorías y Corporativo) */}
        
        <CorporateSection />
        <NewsSection />
        </div>
    );
    };

    export default Home;