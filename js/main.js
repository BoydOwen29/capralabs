(function() {
  // El diccionario vive en js/translations.js (cargado antes que este archivo).
  const translations = window.CAPRA_TRANSLATIONS;


  function applyLang(lang){
    const map = translations[lang] || translations.es
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n')
      if(!key) return
      const value = map[key]
      if(!value) return
      // If element is an input/textarea, set placeholder; otherwise set innerHTML (allowing simple tags)
      const tag = el.tagName.toLowerCase()
      if(tag === 'input' || tag === 'textarea'){
        el.placeholder = value
      } else {
        // allow placeholder interpolation for year in footer
        if(key === 'footer.copy'){
          el.innerHTML = value.replace('{year}', new Date().getFullYear())
        } else {
          el.innerHTML = value
        }
      }
    })
    // update nav lang button pressed state
    document.querySelectorAll('.lang-btn').forEach(b=>b.setAttribute('aria-pressed', b.getAttribute('data-lang')===lang))
    localStorage.setItem('crux-lang', lang)
    // set document title, html lang and brand aria/alt
    const title = map['meta.title'] || document.title
    document.title = title
    try { document.documentElement.lang = lang } catch(e){}
    const brand = document.querySelector('.brand')
    if(brand) brand.setAttribute('aria-label', map['brand'] || 'Capra Labs')
    const img = document.querySelector('.brand img')
    if(img) img.setAttribute('alt', map['brand'] || 'Capra Labs')
    // set about image alt and aria-label for accessibility
    const aboutImg = document.querySelector('.about-media img')
    const aboutMedia = document.querySelector('.about-media')
    if(aboutImg && map['about.image.alt']) aboutImg.setAttribute('alt', map['about.image.alt'])
    if(aboutMedia && map['about.image.alt']) aboutMedia.setAttribute('aria-label', map['about.image.alt'])
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    const initial = localStorage.getItem('crux-lang') || 'es'
    applyLang(initial)

    // defensive: ensure mobile panel is closed on load
    const _mainNav = document.querySelector('.main-nav')
    const _overlay = document.querySelector('.nav-overlay')
    const _toggle = document.querySelector('.menu-toggle')
    if(_mainNav && _mainNav.classList.contains('open')) _mainNav.classList.remove('open')
    if(_overlay && _overlay.classList.contains('active')) _overlay.classList.remove('active')
    if(_toggle) { _toggle.setAttribute('aria-expanded','false'); _toggle.textContent = '☰' }

    // Language switcher with proper event handling
    const langButtons = document.querySelectorAll('.lang-btn')
    langButtons.forEach(btn => {
      btn.addEventListener('click', function(e){
        e.preventDefault()
        e.stopPropagation()
        const lang = this.getAttribute('data-lang')
        if(lang) {
          applyLang(lang)
        }
      })
    })

    // Panel lateral movil + overlay
    const menuToggle = document.querySelector('.menu-toggle')
    const mainNav = document.querySelector('.main-nav')
    const overlay = document.querySelector('.nav-overlay')
    if(menuToggle && mainNav && overlay){
      overlay.setAttribute('aria-hidden', 'true')
      const label = k => (window.CAPRA_TRANSLATIONS[document.documentElement.lang] || window.CAPRA_TRANSLATIONS.es)[k]

      const openPanel = ()=>{
        mainNav.classList.add('open')
        overlay.classList.add('active')
        overlay.setAttribute('aria-hidden', 'false')
        menuToggle.setAttribute('aria-expanded', 'true')
        menuToggle.setAttribute('aria-label', label('nav.close') || 'Cerrar menú')
        menuToggle.textContent = '✕'
        document.body.style.overflow = 'hidden'
        const firstLink = mainNav.querySelector('a')
        if(firstLink) firstLink.focus()
      }
      // restoreFocus solo cuando el cierre no viene de navegar a una seccion,
      // asi no le robamos el foco al destino del ancla.
      const closePanel = (restoreFocus)=>{
        if(!mainNav.classList.contains('open')) return
        mainNav.classList.remove('open')
        overlay.classList.remove('active')
        overlay.setAttribute('aria-hidden', 'true')
        menuToggle.setAttribute('aria-expanded', 'false')
        menuToggle.setAttribute('aria-label', label('nav.open') || 'Abrir menú')
        menuToggle.textContent = '☰'
        document.body.style.overflow = ''
        if(restoreFocus) menuToggle.focus()
      }
      window.__capraClosePanel = closePanel

      menuToggle.addEventListener('click', ()=>{
        if(mainNav.classList.contains('open')) closePanel(true); else openPanel()
      })
      overlay.addEventListener('click', ()=>closePanel(true))
      document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closePanel(true) })
      window.addEventListener('resize', ()=>{ if(window.innerWidth > 900) closePanel(false) })
    }

    // form
    const form = document.getElementById('contactForm')
    const statusEl = document.getElementById('formStatus')
    const submitBtn = form && form.querySelector('button[type="submit"]')
    const fields = form ? ['name','email','message'].map(n=>form.elements[n]) : []

    function setStatus(text, kind){
      if(!statusEl) return
      statusEl.hidden = false
      statusEl.textContent = text
      statusEl.classList.toggle('is-error', kind === 'error')
      statusEl.classList.toggle('is-ok', kind === 'ok')
    }
    function markInvalid(el, invalid){
      if(el) el.setAttribute('aria-invalid', invalid ? 'true' : 'false')
    }
    // limpiar el estado de error en cuanto el usuario corrige
    fields.forEach(el=>el && el.addEventListener('input', ()=>markInvalid(el, false)))

    form && form.addEventListener('submit', async (e)=>{
      e.preventDefault()
      if(submitBtn && submitBtn.disabled) return   // evita doble envio

      const name = form.name.value.trim()
      const email = form.email.value.trim()
      const message = form.message.value.trim()
      const lang = localStorage.getItem('crux-lang') || 'es'
      const map = translations[lang] || translations.es

      markInvalid(form.name, !name)
      markInvalid(form.email, !email)
      markInvalid(form.message, !message)
      if(!name || !email || !message){
        setStatus(map['validation.missing'], 'error')
        const firstEmpty = fields.find(el=>el && !el.value.trim())
        if(firstEmpty) firstEmpty.focus()
        return
      }
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
        markInvalid(form.email, true)
        setStatus(map['validation.email'], 'error')
        form.email.focus()
        return
      }

      const formData = new FormData(form)
      setStatus(map['form.sending'])
      if(submitBtn){ submitBtn.disabled = true }
      try{
        const resp = await fetch('https://api.web3forms.com/submit', { method:'POST', body: formData })
        const json = await resp.json()
        if(json.success){
          setStatus(map['form.thanks'], 'ok')
          form.reset()
          fields.forEach(el=>markInvalid(el, false))
        } else {
          setStatus(json.message || map['form.error'], 'error')
        }
      }catch(err){
        setStatus(map['form.error'], 'error')
      }finally{
        if(submitBtn){ submitBtn.disabled = false }
      }
    })

    // Navegacion por anclas.
    // El CSS ya resuelve el desplazamiento: `scroll-behavior:smooth` en html y
    // `scroll-margin-top` en section[id] compensan el header fijo. Aca solo
    // actualizamos la URL y cerramos el panel movil si esta abierto.
    document.addEventListener('click', (ev)=>{
      const a = ev.target.closest && ev.target.closest('a[href^="#"]')
      if(!a) return
      const href = a.getAttribute('href')
      if(!href || href === '#') return
      const target = document.getElementById(href.slice(1))
      if(!target) return

      ev.preventDefault()
      if(window.__capraClosePanel) window.__capraClosePanel(false)
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // mover el foco para que el teclado y los lectores de pantalla sigan el salto
      target.setAttribute('tabindex','-1')
      target.focus({ preventScroll: true })
      try{ history.pushState(null, '', href) }catch(e){}
    })
  })
})();
