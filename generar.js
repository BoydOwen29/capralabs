// Arma index.html a partir de index.plantilla.html y del español de js/translations.js.
//
//   node generar.js
//
// El texto vive una sola vez, en translations.js: así el HTML que leen los buscadores
// y el que pone main.js al cambiar de idioma no pueden quedar distintos.
const fs = require('fs')
const path = require('path')
const vm = require('vm')

const dir = __dirname
const ctx = { window: {} }
vm.runInNewContext(fs.readFileSync(path.join(dir, 'js/translations.js'), 'utf8'), ctx)
const t = ctx.window.CAPRA_TRANSLATIONS

// Las dos lenguas tienen que tener las mismas claves.
const faltan = (a, b) => Object.keys(t[a]).filter(k => !(k in t[b]))
for (const [a, b] of [['es', 'en'], ['en', 'es']]) {
  const f = faltan(a, b)
  if (f.length) { console.error(`Claves de "${a}" que faltan en "${b}":`, f); process.exit(1) }
}

const anio = String(new Date().getFullYear())
const plantilla = fs.readFileSync(path.join(dir, 'index.plantilla.html'), 'utf8')
const sinUsar = new Set(Object.keys(t.es))
// La advertencia de la plantilla no va al HTML publicado (y trae un {{...}} de ejemplo).
const salida = plantilla
  .replace(/<!--\s*NO EDITAR[\s\S]*?-->\r?\n/, '<!-- Generado con `node generar.js`: editar index.plantilla.html y js/translations.js -->\n')
  .replace(/\{\{([\w.]+)\}\}/g, (_, clave) => {
    if (!(clave in t.es)) { console.error('Clave inexistente en la plantilla:', clave); process.exit(1) }
    sinUsar.delete(clave)
    return t.es[clave].replace('{year}', anio)
  })

fs.writeFileSync(path.join(dir, 'index.html'), salida)
const ignorar = ['brand', 'nav.open', 'nav.close', 'about.image.alt', 'validation.missing',
  'validation.email', 'form.thanks', 'form.sending', 'form.error']
const restantes = [...sinUsar].filter(k => !ignorar.includes(k))
console.log('index.html generado.' + (restantes.length ? ' Claves sin usar: ' + restantes.join(', ') : ''))
