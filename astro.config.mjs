import { defineConfig } from 'astro/config';

export default defineConfig({
  // Configuración de seguridad
  security: {
    checkOrigin: true,
  },
  
  // Configuración de compilación segura
  build: {
    assets: '_astro',
    // Minificar y ofuscar código
    minify: true,
    // Remover comentarios de desarrollo
    removeUnusedCSS: true,
  },
  
  // Configuración del servidor de desarrollo
  server: {
    headers: {
      // Headers de seguridad para desarrollo
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    }
  },
  
  // Configuración de vite para seguridad
  vite: {
    build: {
      // Sourcemaps solo en desarrollo
      sourcemap: false,
      // Remover console.log en producción
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    define: {
      // Prevenir exposición de variables sensibles
      __DEV__: false,
    },
  },
});