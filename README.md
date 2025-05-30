# ODS 2 - Sitio Web Informativo

Este proyecto es un sitio web informativo dedicado al ODS 2 "Hambre Cero". El objetivo es proporcionar información relevante sobre el tema, recursos útiles, un currículum vitae del autor y un formulario de contacto para consultas.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **src/**: Contiene todos los archivos fuente del proyecto.
  - **components/**: Componentes reutilizables del sitio web.
    - `Header.astro`: Encabezado del sitio web.
    - `Footer.astro`: Pie de página del sitio web.
    - `Navigation.astro`: Navegación entre las diferentes páginas.
    - `AccessibilityBar.astro`: Controles de accesibilidad.
    - `ContactForm.astro`: Formulario de contacto.
    - `Welcome.astro`: Mensaje de bienvenida.
  - **layouts/**: Estructura básica del sitio.
    - `Layout.astro`: Define la estructura del sitio web.
  - **pages/**: Páginas del sitio web.
    - `index.astro`: Página de inicio.
    - `informacion.astro`: Información sobre el ODS 2.
    - `recursos.astro`: Recursos adicionales.
    - `cv.astro`: Currículum vitae del autor.
    - `contacto.astro`: Página de contacto.
  - **styles/**: Archivos de estilo.
    - `global.css`: Estilos globales.
    - `accessibility.css`: Estilos de accesibilidad.
  - **scripts/**: Scripts de JavaScript.
    - `accessibility.js`: Lógica de accesibilidad.
  - **assets/**: Recursos estáticos como imágenes.

- **public/**: Archivos públicos accesibles desde la web.
  - `favicon.svg`: Ícono del sitio.
  - `robots.txt`: Configuración para motores de búsqueda.

- **package.json**: Configuración del proyecto y dependencias.
- **astro.config.mjs**: Configuración específica de Astro.
- **tsconfig.json**: Configuración de TypeScript.
- **README.md**: Documentación del proyecto.

## Características de Accesibilidad

El sitio incluye varias características de accesibilidad para mejorar la experiencia del usuario:

- Aumento y disminución del tamaño de la fuente.
- Cambio de fuente.
- Modo oscuro y alto contraste.
- Adaptaciones para personas con daltonismo.
- Cambios en el cursor.
- Opciones para ocultar imágenes y enlaces.

## Instalación y Ejecución

1. Clona el repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Instala las dependencias con `npm install`.
4. Ejecuta el servidor de desarrollo con `npm run dev`.
5. Abre tu navegador y visita `http://localhost:3000` para ver el sitio en acción.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, por favor abre un issue o un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.