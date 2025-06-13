// app/sitemap.js

export default function sitemap() {
    const baseUrl = 'https://lucassdunnek.com/';
  

    return [
      {
        url: baseUrl,
        lastModified: new Date(), // Setzt das heutige Datum
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${baseUrl}/dishcovery`, // Beispiel für eine Unterseite
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/stopmotionvideos`, // Weiteres Beispiel
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/illustrations`, // Weiteres Beispiel
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/photography`, // Weiteres Beispiel
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ];
  }