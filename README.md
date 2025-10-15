# Crux Consulting — minimal SPA

Se creó una versión mínima de la landing en la raíz. Está pensada para trabajarse y publicarse desde el root.

Estructura creada:

- `index.html` — single-page app (es/ en toggle)
- `css/style.css` — estilos
- `js/main.js` — i18n + form handling
- `assets/images/` — carpetas reservadas para imágenes (actualmente vacías)
- `assets/icons/` — carpeta para iconos

Cómo probar rápidamente (Windows PowerShell):

```powershell
# abrir en Live Server o lanzar un servidor simple con Python si lo tienes:
python -m http.server 8000
# luego abrir http://localhost:8000/
```

Notas:
- La versión base está en español por defecto (persistida en localStorage).
- El formulario es de ejemplo; necesita integrarlo con Formspree/Netlify/etc. para recibir mensajes.
