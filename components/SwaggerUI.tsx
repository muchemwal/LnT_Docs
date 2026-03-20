import { useEffect, useRef } from 'react';

export default function SwaggerUI() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Swagger UI CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/swagger-ui-dist@5/swagger-ui.css';
    document.head.appendChild(link);

    // Load Swagger UI JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js';
    script.onload = () => {
      if (containerRef.current && (window as any).SwaggerUIBundle) {
        const basePath =
          process.env.NODE_ENV === 'production' ? '/LnT_Docs' : '';
        (window as any).SwaggerUIBundle({
          url: `${basePath}/openapi.yaml`,
          domNode: containerRef.current,
          deepLinking: true,
          presets: [
            (window as any).SwaggerUIBundle.presets.apis,
            (window as any).SwaggerUIBundle.SwaggerUIStandalonePreset,
          ],
          layout: 'BaseLayout',
          defaultModelsExpandDepth: 1,
          defaultModelExpandDepth: 1,
          docExpansion: 'list',
          filter: true,
          showExtensions: true,
          tryItOutEnabled: false,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ marginTop: '1rem' }}
      className="swagger-container"
    />
  );
}
