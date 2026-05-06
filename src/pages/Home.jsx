import React from 'react';
import { motion } from 'framer-motion';

import HeroSlider from '../components/HeroSlider';
import BrandsGrid from '../components/BrandsGrid';
import BrandsCarousel from '../components/BrandsCarousel';
import CorporateSection from '../components/CorporateSection';
import NewsSection from '../components/NewsSection';

import { fadeUp } from '../utils/motionVariants';

const Home = () => {
  return (
    <div className="home-page">

      <HeroSlider />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <BrandsGrid />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <BrandsCarousel />
      </motion.section>

      {/*<CorporateSection />*/}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <CorporateSection />
        <NewsSection />
      </motion.section>

    </div>
  );
};

export default Home;