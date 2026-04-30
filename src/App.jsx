import { HashRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import CtaSection from "./components/CtaSection";
import AnalyticsTracker from "./utils/AnalyticsTracker";

import AppRouter from "./router";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <AnalyticsTracker />
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main className="main-content">
          <AppRouter />
        </main>
        <CtaSection />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
