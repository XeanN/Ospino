import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      const page = location.pathname + location.search;

      window.gtag("config", "G-13YT5E8RXN", {
        page_path: page,
      });
    }
  }, [location]);

  return null;
}

export default AnalyticsTracker;