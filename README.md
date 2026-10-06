# capralabsdata.com

Sitio de Capra Labs. Estático, publicado con GitHub Pages desde `main` (dominio en `CNAME`).

## Cómo se edita

- **Textos:** `js/translations.js`, en español y en inglés. Es la fuente de verdad.
- **Estructura:** `index.plantilla.html`. Cada `{{clave}}` es un texto de `translations.js`.
- **Estilos:** `css/style.css`.

Después de tocar textos o plantilla:

```bash
node generar.js
```

Eso regenera `index.html` con el español escrito adentro (para buscadores y para quien
no tiene JavaScript) y avisa si falta una clave en alguno de los dos idiomas.
**No editar `index.html` a mano.**

Para verlo local: `python -m http.server 8790` y abrir http://localhost:8790.

El formulario de contacto manda por Web3Forms.
