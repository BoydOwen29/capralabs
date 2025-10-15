// Minimal SPA JS: i18n toggle (ES/EN), simple form validation, small helpers
(function(){
  const translations = {
    es: {
      brand: 'Capra Labs', 'meta.title':'Capra Labs — Consultoría aplicada','nav.approach':'Cómo trabajamos','nav.services':'Que hacemos','nav.about':'Nosotros','nav.contact':'Contacto',

      'hero.kicker':'Recupera tu tiempo, desbloquea tu negocio',
      'hero.title':'Creamos soluciones estratégicas que permiten a tu empresa enfocarse en lo que realmente importa: vender, gestionar y crecer.',
      'hero.lead':'Creamos soluciones estratégicas que permiten a tu empresa enfocarse en lo que realmente importa: vender, gestionar y crecer.',
      'hero.cta':'Contáctanos',

      'approach.title':'Cómo trabajamos',
  'approach.lead':'En escalada, el <em>crux</em> es el movimiento más difícil: el punto que decide si llegás a la cima. En tu negocio, es ese obstáculo crítico que frena el crecimiento. En CapraLabs lo abordamos con soluciones prácticas —diseñadas e implementadas para que vos y tu equipo puedan concentrarse en lo que mejor saben hacer.',
      'approach.detect.title':'Detectamos el crux',
      'approach.detect.sub':'Foco en lo que más impacto genera',
      'approach.detect.detail1':'Diagnóstico',
      'approach.detect.detail2':'Reuniones con equipos',
      'approach.detect.detail3':'Entendimiento en profundidad',
      'approach.solve.title':'Lo resolvemos',
      'approach.solve.sub':'Entregables operativos y rápidos',
      'approach.solve.detail1':'Armado de solución a medida',
      'approach.solve.detail2':'Adaptada al contexto y situación particular',
      'approach.transfer.title':'Transferimos',
      'approach.transfer.sub':'Formamos al equipo para mantener el avance',
      'approach.transfer.detail1':'Empoderamos con know‑how',
      'approach.transfer.detail2':'Documentación y prácticas operativas',
      'approach.transfer.detail3':'Acompañamiento para que construyan sobre nuestro aporte',

      'services.title':'Nuestras soluciones',
      'services.lead':'No solo hacemos productos. Creamos soluciones que liberan tu tiempo y optimizan tu negocio.',
      'services.process.title':'Optimización de procesos',
      'services.process.lead':'Identificamos cuellos de botella y diseñamos flujos más eficientes.',
      'services.process.b1':'Ahorra tiempo','services.process.b2':'Reduce errores','services.process.b3':'Incrementa productividad',
      'services.automation.title':'Automatización & Integraciones','services.automation.lead':'Implementamos tecnología que hace que tus procesos funcionen solos.','services.automation.b1':'Tareas repetitivas automatizadas','services.automation.b2':'Integración entre herramientas','services.automation.b3':'Escalabilidad de procesos',
      'services.data.title':'Data & Analytics','services.data.lead':'Transformamos datos en información útil para decisiones rápidas y precisas.','services.data.b1':'Métricas clave visibles','services.data.b2':'Dashboards claros','services.data.b3':'Decisiones basadas en información',
      'services.coaching.title':'Coaching ejecutivo y de equipos','services.coaching.lead':'Acompañamos a líderes y equipos para mejorar desempeño y toma de decisiones.','services.coaching.b1':'Mentoring personalizado','services.coaching.b2':'Talleres de productividad','services.coaching.b3':'Apoyo en transformación digital',

      'about.title':'Quién está detrás de CapraLabs','about.lead':'Combinamos experiencia estratégica y técnica para ayudarte a superar tu crux.','about.bio':'<strong>Owen Boyd</strong> es consultor estratégico con experiencia en automatización de procesos, data analytics y desarrollo de soluciones a medida. Ha trabajado con empresas para optimizar su gestión, aumentar la eficiencia y liberar tiempo para que los líderes puedan enfocarse en lo que mejor saben hacer.','about.quote':'"Transformamos obstáculos en oportunidades para que tu negocio siga ascendiendo."',
  'about.image.alt':'Foto de Owen Boyd',

  'cases.title':'Historias de impacto','cases.lead':'Proyectos donde liberamos tiempo, optimizamos procesos y aumentamos resultados.','cases.case1.title':'Optimización de ventas y procesos internos','cases.case1.challenge_label':'Desafío:','cases.case1.challenge':'Tareas manuales y cuellos de botella que frenaban el crecimiento.','cases.case1.solution_label':'Solución:','cases.case1.solution':'Automatización de flujos clave y dashboard de seguimiento.','cases.case1.result_label':'Resultado:','cases.case1.result':'Reducción de 30% del tiempo dedicado a tareas operativas.',

      'contact.title':'Hablemos de tu crux','contact.lead':'Recuperemos tu tiempo juntos','form.name':'Nombre','form.email':'Email','form.message':'Mensaje','form.submit':'Enviar','form.name.placeholder':'Tu nombre','form.email.placeholder':'tucorreo@ejemplo.com','form.message.placeholder':'Escribe tu mensaje aquí',
  'contact.intro':'También podés contactarme directamente usando los datos debajo:','contact.whatsapp':'Whatsapp','contact.linkedin':'LinkedIn',

  'validation.missing':'Por favor completa los campos requeridos (nombre, email y mensaje)',
  'validation.email':'Ingresa un correo válido',
  'form.thanks':'Gracias — hemos recibido tu mensaje. Te contactaremos pronto.',
  'form.sending':'Enviando…',
  'form.error':'Ocurrió un error al enviar. Por favor intentá de nuevo.' ,

  'footer.copy':'© {year} Capra Labs'
    },
    en: {
      brand: 'Capra Labs', 'meta.title':'Capra Labs — Applied Consulting','nav.approach':'How we work','nav.services':'Solutions','nav.about':'About','nav.contact':'Contact',

      'hero.kicker':'Take back your time, unlock your business',
      'hero.title':'We build strategic solutions that let your company focus on what matters most: sell, manage and grow.',
      'hero.lead':'We build strategic solutions that let your company focus on what matters most: sell, manage and grow.',
      'hero.cta':'Contact us',

  'approach.title':'How we work','approach.lead':'In climbing, the <em>crux</em> is the hardest move—the point that decides if you reach the top. In business, it\'s the critical obstacle that holds back growth. At CapraLabs we address it with practical solutions — designed and implemented so you and your team can focus on what you do best.',
      'approach.detect.title':'We identify the crux','approach.detect.sub':'Focus on highest-impact areas','approach.detect.detail1':'Diagnosis','approach.detect.detail2':'Team workshops','approach.detect.detail3':'Deep understanding',
      'approach.solve.title':'We solve it','approach.solve.sub':'Operational, fast deliverables','approach.solve.detail1':'Tailored solution design','approach.solve.detail2':'Adapted to your context and situation',
      'approach.transfer.title':'We transfer','approach.transfer.sub':'We train the team to sustain progress','approach.transfer.detail1':'We empower with know-how','approach.transfer.detail2':'Documentation and operational practices','approach.transfer.detail3':'Support to build on our work',

      'services.title':'Our solutions','services.lead':'We don’t just build products. We create solutions that free up your time and optimize your business.',
      'services.process.title':'Process optimization','services.process.lead':'We spot bottlenecks and design more efficient workflows.','services.process.b1':'Save time','services.process.b2':'Reduce errors','services.process.b3':'Increase productivity',
      'services.automation.title':'Automation & Integrations','services.automation.lead':'We implement tech that makes your processes run themselves.','services.automation.b1':'Automated repetitive tasks','services.automation.b2':'Tool integrations','services.automation.b3':'Scalable processes',
      'services.data.title':'Data & Analytics','services.data.lead':'We turn data into useful information for fast, accurate decisions.','services.data.b1':'Key metrics visible','services.data.b2':'Clear dashboards','services.data.b3':'Data-driven decisions',
      'services.coaching.title':'Executive & team coaching','services.coaching.lead':'We support leaders and teams to improve performance and decision-making.','services.coaching.b1':'Personalized mentoring','services.coaching.b2':'Productivity workshops','services.coaching.b3':'Support for digital transformation',

      'about.title':'Who’s behind CapraLabs','about.lead':'We combine strategic and technical experience to help you overcome your crux.','about.bio':'<strong>Owen Boyd</strong> is a strategy consultant with experience in process automation, data analytics and building tailored solutions. He has helped companies optimize operations, boost efficiency and free up leaders to focus on their strengths.','about.quote':'"We turn obstacles into opportunities so your business can keep climbing."',
  'about.image.alt':'Photo of Owen Boyd',

  'cases.title':'Impact stories','cases.lead':'Projects where we freed time, optimized processes and increased results.','cases.case1.title':'Sales & internal process optimization','cases.case1.challenge_label':'Challenge:','cases.case1.challenge':'Manual tasks and bottlenecks slowing growth.','cases.case1.solution_label':'Solution:','cases.case1.solution':'Automated key flows and tracking dashboard.','cases.case1.result_label':'Result:','cases.case1.result':'30% reduction in operational time spent.',

      'contact.title':'Let’s talk about your crux','contact.lead':'Let’s reclaim your time together','form.name':'Name','form.email':'Email','form.message':'Message','form.submit':'Send','form.name.placeholder':'Your name','form.email.placeholder':'you@company.com','form.message.placeholder':'Write your message here',
  'contact.intro':'You can also reach me directly using the details below:','contact.whatsapp':'Whatsapp','contact.linkedin':'LinkedIn',

  'validation.missing':'Please complete the required fields (name, email and message)',
  'validation.email':'Please enter a valid email',
  'form.thanks':'Thanks — we received your message. We will contact you shortly.',
  'form.sending':'Sending…',
  'form.error':'An error occurred while sending. Please try again.' ,

  'footer.copy':'© {year} Capra Labs'
    }
  }

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

    document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click', ()=>applyLang(btn.getAttribute('data-lang'))))

    // mobile side-panel menu with overlay
    const menuToggle = document.querySelector('.menu-toggle')
    const mainNav = document.querySelector('.main-nav')
    const overlay = document.querySelector('.nav-overlay')
    if(menuToggle && mainNav && overlay){
      overlay.setAttribute('aria-hidden', 'true')
      let lastFocused = null
      const firstLink = mainNav.querySelector('a')
      const openPanel = ()=>{
        lastFocused = document.activeElement
        mainNav.classList.add('open')
        overlay.classList.add('active')
        overlay.setAttribute('aria-hidden', 'false')
        menuToggle.setAttribute('aria-expanded', 'true')
        menuToggle.setAttribute('aria-label', 'Cerrar menú')
        menuToggle.textContent = '✕'
        document.body.style.overflow = 'hidden'
        if(firstLink) firstLink.focus()
      }
      const closePanel = ()=>{
        mainNav.classList.remove('open')
        overlay.classList.remove('active')
        overlay.setAttribute('aria-hidden', 'true')
        menuToggle.setAttribute('aria-expanded', 'false')
        menuToggle.setAttribute('aria-label', 'Abrir menú')
        menuToggle.textContent = '☰'
        document.body.style.overflow = ''
        if(lastFocused) lastFocused.focus()
      }
      menuToggle.addEventListener('click', ()=>{
        if(mainNav.classList.contains('open')) closePanel(); else openPanel()
      })
      overlay.addEventListener('click', closePanel)
      mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
        // close after a short delay so anchor scroll can run smoothly
        setTimeout(closePanel, 120)
      }))
      window.addEventListener('resize', ()=>{ if(window.innerWidth > 700) closePanel() })
      document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closePanel() })
    }
    // extra defensive resize handler: ensure panel closed when switching to desktop
    window.addEventListener('resize', ()=>{
      if(window.innerWidth > 700){
        const mn = document.querySelector('.main-nav')
        const ov = document.querySelector('.nav-overlay')
        const mt = document.querySelector('.menu-toggle')
        if(mn && mn.classList.contains('open')) mn.classList.remove('open')
        if(ov && ov.classList.contains('active')) ov.classList.remove('active')
        if(mt) mt.setAttribute('aria-expanded','false')
        document.body.style.overflow = ''
      }
    })

    // no hamburger menu — keep nav visible on larger screens and accessible on mobile
    // (CSS handles responsive layout; no JS-based menu required)

    // form
    const form = document.getElementById('contactForm')
    const statusEl = document.getElementById('formStatus')
    form && form.addEventListener('submit', async (e)=>{
      e.preventDefault()
      const name = form.name.value.trim()
      const email = form.email.value.trim()
      const message = form.message.value.trim()
      const lang = localStorage.getItem('crux-lang') || 'es'
      const map = translations[lang]
      // require name, email and message
      if(!name || !email || !message){
        // show inline message
        if(statusEl){ statusEl.style.display='block'; statusEl.textContent = map['validation.missing'] }
        return
      }
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
        if(statusEl){ statusEl.style.display='block'; statusEl.textContent = map['validation.email'] }
        return
      }

      // prepare form data for Web3Forms
      const formData = new FormData(form)
      // show sending state
      if(statusEl){ statusEl.style.display='block'; statusEl.textContent = map['form.sending'] }
      try{
        const resp = await fetch('https://api.web3forms.com/submit', { method:'POST', body: formData })
        const json = await resp.json()
        if(json.success){
          if(statusEl){ statusEl.style.display='block'; statusEl.textContent = map['form.thanks'] }
          form.reset()
        } else {
          if(statusEl){ statusEl.style.display='block'; statusEl.textContent = (json.message || map['form.error']) }
        }
      }catch(err){
        if(statusEl){ statusEl.style.display='block'; statusEl.textContent = map['form.error'] }
      }
    })

    // Helper: robust scroll to an element id, compensating for fixed header and retrying if needed
    function scrollToElementById(id){
      const target = document.getElementById(id)
      if(!target) return
      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 64
      // First try: native scrollIntoView then nudge up by header height
      try{
        target.scrollIntoView({behavior:'auto', block:'start'})
      }catch(e){}
      // Nudge immediately to account for fixed header
      window.scrollBy(0, -headerH - 12)
      // Then request a smooth scroll to the computed position (some browsers override hash behavior)
      const desired = target.getBoundingClientRect().top + window.scrollY - headerH - 12
      try{ window.scrollTo({top: desired, behavior: 'smooth'}) }catch(e){ window.scrollTo(0, desired) }
      // Retry once after 600ms to ensure we land correctly (some browsers interrupt smooth scroll on hashchange)
      setTimeout(()=>{
        const diff = Math.abs(window.scrollY - desired)
        if(diff > 8){ try{ window.scrollTo({top: desired, behavior: 'auto'}) }catch(e){ window.scrollTo(0, desired) } }
      }, 600)
    }

    // Delegated anchor handler: account for fixed header, update history and close mobile panel if open
    document.addEventListener('click', function(ev){
      // Walk up from the event target to find the nearest anchor element (handles text nodes and nested elements)
      let node = ev.target
      while(node && node.nodeType !== 1) node = node.parentNode
      while(node && node.tagName !== 'A') node = node.parentElement
      const a = node
      if(!a) return
      const href = a.getAttribute && a.getAttribute('href')
      if(href && href.startsWith('#')){
        const id = href.slice(1)
        const target = document.getElementById(id)
        if(target){
          ev.preventDefault()
          // Robust scroll helper
          scrollToElementById(id)
          // update the URL hash without causing a jump
          try{ history.pushState(null, '', href) }catch(e){}
          // if mobile panel is open, close it gracefully
          const mn = document.querySelector('.main-nav')
          const ov = document.querySelector('.nav-overlay')
          const mt = document.querySelector('.menu-toggle')
          if(mn && mn.classList.contains('open')){
            setTimeout(()=>{
              mn.classList.remove('open')
              if(ov) ov.classList.remove('active')
              if(ov) ov.setAttribute('aria-hidden','true')
              if(mt) mt.setAttribute('aria-expanded','false')
              if(mt) mt.setAttribute('aria-label','Abrir menú')
              if(mt) mt.textContent = '☰'
              document.body.style.overflow = ''
            }, 120)
          }
        }
      }
    })

    // Also add explicit handlers for header nav links and the brand anchor to ensure
    // navigation works even if event propagation behaves unexpectedly in some browsers.
    const headerLinks = document.querySelectorAll('.main-nav a, .brand')
    headerLinks.forEach(el=>{
      el.addEventListener('click', function(e){
        const href = this.getAttribute && this.getAttribute('href')
        if(!href || !href.startsWith('#')) return
        const id = href.slice(1)
        const target = document.getElementById(id)
        if(target){
          e.preventDefault()
          e.stopPropagation()
          // Use robust scroll helper
          scrollToElementById(id)
          try{ history.pushState(null, '', href) }catch(e){}
          // close mobile panel if it is open
          const mn = document.querySelector('.main-nav')
          const ov = document.querySelector('.nav-overlay')
          const mt = document.querySelector('.menu-toggle')
          if(mn && mn.classList.contains('open')){
            setTimeout(()=>{
              mn.classList.remove('open')
              if(ov) ov.classList.remove('active')
              if(ov) ov.setAttribute('aria-hidden','true')
              if(mt) mt.setAttribute('aria-expanded','false')
              if(mt) mt.setAttribute('aria-label','Abrir menú')
              if(mt) mt.textContent = '☰'
              document.body.style.overflow = ''
            }, 120)
          }
        }
      })
    })
  })
})();
