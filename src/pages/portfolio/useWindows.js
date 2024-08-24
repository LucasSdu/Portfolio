import { useEffect, useState } from 'react';

export default function useWindow() {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    // Prüfen, ob 'window' definiert ist (nur im Browser)
    if (typeof window !== 'undefined') {
      const resize = () => {
        setDimension({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      // Initiale Größe setzen
      resize();

      // Event Listener hinzufügen
      window.addEventListener('resize', resize);

      // Cleanup des Event Listeners
      return () => window.removeEventListener('resize', resize);
    }
  }, []);

  return { dimension };
}
