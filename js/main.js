'use strict';

/* ══════════════════════════════════════════════
   TRANSLATIONS (shared across all pages)
══════════════════════════════════════════════ */
const T = {
  es: {
    "nav-home":"Inicio","nav-about":"Sobre mí","nav-skills":"Habilidades","nav-exp":"Experiencia",
    "nav-edu":"Formación","nav-certs":"Certificados","nav-proj":"Proyectos","nav-lang":"Idiomas",
    "term-hint":"escribe 'help'",
    "hero-tag":"Becario IT · Larian Studios Barcelona",
    "hero-title":"¡Hola! Soy <span>Mario Rodríguez</span>",
    "hero-subtitle":"Estudiante de ASIR | Técnico de Soporte IT N1",
    "hero-bio":"Proactivo y con mucha motivación por aprender. Me apasiona el ámbito de los sistemas, las redes y la ciberseguridad, y disfruto enfrentándome a problemas técnicos reales.",
    "about-title":"Sobre mí",
    "about-desc":"Hola, soy Mario, estudiante de ASIR en Salesians Sarrià con ganas de abrirme camino en el mundo IT. Soy una persona proactiva y con mucha motivación por aprender. Me apasiona el ámbito de los sistemas, las redes y la ciberseguridad, y disfruto enfrentándome a problemas técnicos reales. Busco oportunidades donde pueda seguir desarrollándome junto a profesionales con experiencia, aportar desde el primer día y crecer dentro del sector tecnológico.",
    "exp-title":"Experiencia",
    "exp3-title":"Becario Soporte Técnico IT","exp3-date":"06/2026 – Presente",
    "exp2-title":"Profesor de Refuerzo",
    "exp2-l1":"Apoyo académico a alumnos de SMR en contenidos teóricos y prácticos.",
    "exp2-l2":"Resolución de dudas, preparación de exámenes y atención personalizada.",
    "exp2-date":"12/2025 – 05/2026",
    "exp1-title":"Soporte de sistemas de tecnología de la información",
    "exp1-l1":"Atención y resolución de incidencias de hardware y software.",
    "exp1-l2":"Asistencia personalizada a usuarios y coordinación con técnicos.",
    "exp1-l3":"Instalación, configuración y mantenimiento de equipos informáticos.",
    "edu-title":"Formación",
    "edu-gs":"Grado Superior en Sistemas Informáticos en Red (ASIR)",
    "edu-gm":"Grado Medio en Sistemas Microinformáticos y Redes (SMR)",
    "edu-note":"Nota Media: 9,51",
    "lang-es":"Español","lang-es-lvl":"Nativo",
    "lang-ca":"Català","lang-ca-lvl":"Natiu",
    "lang-en":"English","lang-en-lvl":"Professional (B2-C1)",
    "skills-title":"Habilidades & Conocimientos","skills-cat1":"Sistemas & Redes",
    "skills-cat2":"Cloud & Empresa","skills-cat3":"Aptitudes",
    "sk-win":"Windows Server (AD, GPO, PS)","sk-linux":"GNU/Linux",
    "sk-virt":"Virtualización (Tipo 1 y 2)","sk-docker":"Docker & Contenedores",
    "sk-vlan":"VLAN & Switching","sk-serv":"Servicios de Red (DNS, DHCP)",
    "sk-aws":"Cloud: AWS (EC2, IaC)","sk-adm":"Administración de Sistemas",
    "sk-doc":"Documentación Técnica","sk-jira":"Jira / Kanbanize",
    "sk-m365":"Microsoft 365","sk-google":"Google Workspace",
    "sk-res":"Resolución de Incidencias","sk-team":"Trabajo en Equipo",
    "sk-adapt":"Adaptabilidad","sk-init":"Creatividad e Iniciativa",
    "sk-time":"Gestión del Tiempo","sk-comm":"Comunicación",
    "cert-title":"Certificados","cert1-title":"Introducción a la Ciberseguridad",
    "cert1-desc":"Cisco Networking Academy",
    "cert5-title":"Getting Started in Cybersecurity 3.0","cert5-desc":"Fortinet",
    "cert6-title":"Technical Introduction to Cybersecurity 3.0","cert6-desc":"Fortinet · NSE 2",
    "cert3-title":"Introduction to the Threat Landscape 3.0","cert3-desc":"Fortinet",
    "cert4-title":"Fortinet Certified Fundamentals Cybersecurity","cert4-desc":"Fortinet",
    "csk-crypto":"Criptografía y PKI","csk-netsec":"Seguridad de Redes","csk-access":"Control de Acceso",
    "csk-endpoint":"Seguridad de Endpoints","csk-cloud":"Seguridad en la Nube","csk-sase":"SASE / SD-WAN",
    "csk-threatland":"Panorama de Amenazas","csk-solutions":"Soluciones de Seguridad","csk-firewalls":"Firewalls",
    "csk-siem":"SIEM y SOC","csk-actors":"Actores de Amenaza","csk-attacks":"Métodos de Ataque",
    "csk-malware":"Malware","csk-social":"Ingeniería Social","csk-aware":"Concienciación en Ciberseguridad",
    "csk-best":"Buenas Prácticas",
    "org-cert":"Formación","org-proj":"Proyecto","org-exp":"Experiencia",
    "harea-cyber":"Ciberseguridad","harea-sys":"Sistemas","harea-virt":"Virtualización","harea-net":"Redes","harea-cloud":"Herramientas & Soporte",
    "comp-netsec":"Seguridad de Redes","comp-secconcepts":"Conceptos de Seguridad","comp-secops":"Operaciones de Seguridad","comp-protection":"Protección de Endpoints",
    "comp-winserver":"Windows Server","comp-virt":"Virtualización & Contenedores","comp-linux":"Linux","comp-monit":"Monitorización","comp-storage":"Almacenamiento",
    "comp-deploy":"Gestión de Equipos","comp-baremetal":"Hipervisor Bare-Metal","comp-hosted":"Hipervisor Hosted","comp-containers":"Contenedores","comp-iaas":"IaaS / Cloud",
    "comp-netinfra":"Infraestructura de Red","comp-netsvc":"Servicios de Red","comp-secnet":"Conectividad Segura",
    "comp-ticketing":"Ticketing / Help Desk","comp-admin":"Administración & Documentación","comp-productivity":"Productividad",
    "hsk-raid":"RAID","hsk-ubuntu":"Ubuntu Server","hsk-webmin":"Webmin","hsk-vpn":"VPN",
    "hsk-backup":"Backup y Recuperación","hsk-ps":"PowerShell Scripting","hsk-ad":"Active Directory",
    "hsk-proxmox":"Proxmox","hsk-vmware":"VMware","hsk-vbox":"VirtualBox",
    "hsk-monit":"Monitorización (Grafana, Zabbix, Prometheus)","hsk-tcpip":"TCP/IP",
    "hsk-routing":"Routing & Switching","hsk-wifi":"Wi-Fi / WLAN","hsk-ticket":"Ticketing / Help Desk",
    "proj-title":"Proyectos","proj3-title":"Distribución ISO Filebrowser",
    "proj3-desc":"Servidor local de distribución de ISOs con Docker y RAID 5. Elimina la saturación de red WAN en entorno educativo.",
    "proj-link":"Ver proyecto →",
    "page-skills-sub":"Tecnologías, herramientas y aptitudes que manejo en el día a día.",
    "page-certs-sub":"Certificaciones oficiales en ciberseguridad.",
    "page-proj-sub":"Proyectos técnicos en los que he trabajado.",
    "proj-soon-title":"Más proyectos en camino","proj-soon-desc":"Actualmente desarrollando laboratorios de ciberseguridad y administración de sistemas."
  },
  cat: {
    "nav-home":"Inici","nav-about":"Sobre mi","nav-skills":"Habilitats","nav-exp":"Experiència",
    "nav-edu":"Formació","nav-certs":"Certificats","nav-proj":"Projectes","nav-lang":"Idiomes",
    "term-hint":"escriu 'help'",
    "hero-tag":"Becari IT · Larian Studios Barcelona",
    "hero-title":"Hola! Soc <span>Mario Rodríguez</span>",
    "hero-subtitle":"Estudiant de ASIR | Tècnic de Suport IT N1",
    "hero-bio":"Proactiu i amb molta motivació per aprendre. M'apassiona l'àmbit dels sistemes, les xarxes i la ciberseguretat, i gaudeixo enfrontant-me a problemes tècnics reals.",
    "about-title":"Sobre mi",
    "about-desc":"Hola, soc en Mario, estudiant d'ASIR a Salesians Sarrià amb ganes d'obrir-me camí en el món IT. Soc una persona proactiva i amb molta motivació per aprendre. M'apassiona l'àmbit dels sistemes, les xarxes i la ciberseguretat, i gaudeixo enfrontant-me a problemes tècnics reals. Busco oportunitats on pugui seguir desenvolupant-me al costat de professionals amb experiència, aportar des del primer dia i créixer dins el sector tecnològic.",
    "exp-title":"Experiència",
    "exp3-title":"Becari Suport Tècnic IT","exp3-date":"06/2026 – Actualitat",
    "exp2-title":"Professor de Reforç",
    "exp2-l1":"Suport acadèmic a alumnes de SMR en continguts teòrics i pràctics.",
    "exp2-l2":"Resolució de dubtes, preparació d'exàmens i atenció personalitzada.",
    "exp2-date":"12/2025 – 05/2026",
    "exp1-title":"Suport de sistemes de tecnologia de la informació",
    "exp1-l1":"Atenció i resolució d'incidències de maquinari i programari.",
    "exp1-l2":"Assistència personalitzada a usuaris i coordinació amb tècnics.",
    "exp1-l3":"Instal·lació, configuració i manteniment d'equips informàtics.",
    "edu-title":"Formació",
    "edu-gs":"Grau Superior en Sistemes Informàtics en Xarxa (ASIR)",
    "edu-gm":"Grau Mitjà en Sistemes Microinformàtics i Xarxes (SMR)",
    "edu-note":"Nota Mitjana: 9,51",
    "lang-es":"Castellà","lang-es-lvl":"Natiu",
    "lang-ca":"Català","lang-ca-lvl":"Natiu",
    "lang-en":"Anglès","lang-en-lvl":"Professional (B2-C1)",
    "skills-title":"Habilitats & Coneixements","skills-cat1":"Sistemes & Xarxes",
    "skills-cat2":"Cloud & Empresa","skills-cat3":"Aptituds",
    "sk-win":"Windows Server (AD, GPO, PS)","sk-linux":"GNU/Linux",
    "sk-virt":"Virtualització (Tipus 1 i 2)","sk-docker":"Docker & Contenidors",
    "sk-vlan":"VLAN & Switching","sk-serv":"Serveis de Xarxa (DNS, DHCP)",
    "sk-aws":"Cloud: AWS (EC2, IaC)","sk-adm":"Administració de Sistemes",
    "sk-doc":"Documentació Tècnica","sk-jira":"Jira / Kanbanize",
    "sk-m365":"Microsoft 365","sk-google":"Google Workspace",
    "sk-res":"Resolució d'Incidències","sk-team":"Treball en Equip",
    "sk-adapt":"Adaptabilitat","sk-init":"Creativitat i Iniciativa",
    "sk-time":"Gestió del Temps","sk-comm":"Comunicació",
    "cert-title":"Certificats","cert1-title":"Introducció a la Ciberseguretat",
    "cert1-desc":"Cisco Networking Academy",
    "cert5-title":"Getting Started in Cybersecurity 3.0","cert5-desc":"Fortinet",
    "cert6-title":"Technical Introduction to Cybersecurity 3.0","cert6-desc":"Fortinet · NSE 2",
    "cert3-title":"Introduction to the Threat Landscape 3.0","cert3-desc":"Fortinet",
    "cert4-title":"Fortinet Certified Fundamentals Cybersecurity","cert4-desc":"Fortinet",
    "csk-crypto":"Criptografia i PKI","csk-netsec":"Seguretat de Xarxa","csk-access":"Control d'Accés",
    "csk-endpoint":"Seguretat d'Endpoints","csk-cloud":"Seguretat al Núvol","csk-sase":"SASE / SD-WAN",
    "csk-threatland":"Panorama d'Amenaces","csk-solutions":"Solucions de Seguretat","csk-firewalls":"Firewalls",
    "csk-siem":"SIEM i SOC","csk-actors":"Actors d'Amenaça","csk-attacks":"Mètodes d'Atac",
    "csk-malware":"Malware","csk-social":"Enginyeria Social","csk-aware":"Conscienciació en Ciberseguretat",
    "csk-best":"Bones Pràctiques",
    "org-cert":"Formació","org-proj":"Projecte","org-exp":"Experiència",
    "harea-cyber":"Ciberseguretat","harea-sys":"Sistemes","harea-virt":"Virtualització","harea-net":"Xarxes","harea-cloud":"Eines & Suport",
    "comp-netsec":"Seguretat de Xarxa","comp-secconcepts":"Conceptes de Seguretat","comp-secops":"Operacions de Seguretat","comp-protection":"Protecció d'Endpoints",
    "comp-winserver":"Windows Server","comp-virt":"Virtualització & Contenidors","comp-linux":"Linux","comp-monit":"Monitoratge","comp-storage":"Emmagatzematge",
    "comp-deploy":"Gestió d'Equips","comp-baremetal":"Hipervisor Bare-Metal","comp-hosted":"Hipervisor Hosted","comp-containers":"Contenidors","comp-iaas":"IaaS / Núvol",
    "comp-netinfra":"Infraestructura de Xarxa","comp-netsvc":"Serveis de Xarxa","comp-secnet":"Connectivitat Segura",
    "comp-ticketing":"Ticketing / Help Desk","comp-admin":"Administració & Documentació","comp-productivity":"Productivitat",
    "hsk-raid":"RAID","hsk-ubuntu":"Ubuntu Server","hsk-webmin":"Webmin","hsk-vpn":"VPN",
    "hsk-backup":"Backup i Recuperació","hsk-ps":"PowerShell Scripting","hsk-ad":"Active Directory",
    "hsk-proxmox":"Proxmox","hsk-vmware":"VMware","hsk-vbox":"VirtualBox",
    "hsk-monit":"Monitoratge (Grafana, Zabbix, Prometheus)","hsk-tcpip":"TCP/IP",
    "hsk-routing":"Routing & Switching","hsk-wifi":"Wi-Fi / WLAN","hsk-ticket":"Ticketing / Help Desk",
    "proj-title":"Projectes","proj3-title":"Distribució ISO Filebrowser",
    "proj3-desc":"Servidor local de distribució d'ISOs amb Docker i RAID 5. Elimina la saturació de xarxa WAN en entorn educatiu.",
    "proj-link":"Veure projecte →",
    "page-skills-sub":"Tecnologies, eines i aptituds que faig servir en el dia a dia.",
    "page-certs-sub":"Certificacions oficials en ciberseguretat.",
    "page-proj-sub":"Projectes tècnics en els quals he treballat.",
    "proj-soon-title":"Més projectes en camí","proj-soon-desc":"Actualment desenvolupant laboratoris de ciberseguretat i administració de sistemes."
  },
  en: {
    "nav-home":"Home","nav-about":"About","nav-skills":"Skills","nav-exp":"Experience",
    "nav-edu":"Education","nav-certs":"Certificates","nav-proj":"Projects","nav-lang":"Languages",
    "term-hint":"type 'help'",
    "hero-tag":"IT Intern · Larian Studios Barcelona",
    "hero-title":"Hi! I am <span>Mario Rodríguez</span>",
    "hero-subtitle":"ASIR Student | IT Support Technician N1",
    "hero-bio":"Proactive and eager to learn. I am passionate about systems, networks and cybersecurity, and I enjoy tackling real technical problems.",
    "about-title":"About Me",
    "about-desc":"Hi, I'm Mario, an ASIR student at Salesians Sarrià keen to make my way in the IT world. I'm a proactive person with a strong drive to keep learning. I'm passionate about systems, networks and cybersecurity, and I enjoy tackling real technical problems. I'm looking for opportunities to keep growing alongside experienced professionals, contribute from day one, and build my career in the technology sector.",
    "exp-title":"Experience",
    "exp3-title":"IT Support Intern","exp3-date":"06/2026 – Present",
    "exp2-title":"Tutoring Teacher",
    "exp2-l1":"Academic support to SMR students covering theoretical and practical content.",
    "exp2-l2":"Doubt resolution, exam preparation and personalised attention.",
    "exp2-date":"12/2025 – 05/2026",
    "exp1-title":"Information Technology Systems Support",
    "exp1-l1":"Attention and resolution of hardware and software incidents.",
    "exp1-l2":"Personalised user assistance and coordination with technicians.",
    "exp1-l3":"Installation, configuration and maintenance of computer equipment.",
    "edu-title":"Education",
    "edu-gs":"Advanced Degree in Network Systems Administration (ASIR)",
    "edu-gm":"Intermediate Degree in Microcomputer Systems and Networks (SMR)",
    "edu-note":"Average Grade: 9.51",
    "lang-es":"Spanish","lang-es-lvl":"Native",
    "lang-ca":"Catalan","lang-ca-lvl":"Native",
    "lang-en":"English","lang-en-lvl":"Professional (B2-C1)",
    "skills-title":"Skills & Knowledge","skills-cat1":"Systems & Networks",
    "skills-cat2":"Cloud & Business","skills-cat3":"Soft Skills",
    "sk-win":"Windows Server (AD, GPO, PS)","sk-linux":"GNU/Linux",
    "sk-virt":"Type 1 & 2 Virtualization","sk-docker":"Docker & Containers",
    "sk-vlan":"VLAN & Switching","sk-serv":"Network Services (DNS, DHCP)",
    "sk-aws":"Cloud: AWS (EC2, IaC)","sk-adm":"Systems Administration",
    "sk-doc":"Technical Documentation","sk-jira":"Jira / Kanbanize",
    "sk-m365":"Microsoft 365","sk-google":"Google Workspace",
    "sk-res":"Incident Resolution","sk-team":"Teamwork",
    "sk-adapt":"Adaptability","sk-init":"Creativity & Initiative",
    "sk-time":"Time Management","sk-comm":"Communication",
    "cert-title":"Certificates","cert1-title":"Introduction to Cybersecurity",
    "cert1-desc":"Cisco Networking Academy",
    "cert5-title":"Getting Started in Cybersecurity 3.0","cert5-desc":"Fortinet",
    "cert6-title":"Technical Introduction to Cybersecurity 3.0","cert6-desc":"Fortinet · NSE 2",
    "cert3-title":"Introduction to the Threat Landscape 3.0","cert3-desc":"Fortinet",
    "cert4-title":"Fortinet Certified Fundamentals Cybersecurity","cert4-desc":"Fortinet",
    "csk-crypto":"Cryptography & PKI","csk-netsec":"Network Security","csk-access":"Access Control",
    "csk-endpoint":"Endpoint Security","csk-cloud":"Cloud Security","csk-sase":"SASE / SD-WAN",
    "csk-threatland":"Threat Landscape","csk-solutions":"Security Solutions","csk-firewalls":"Firewalls",
    "csk-siem":"SIEM & SOC","csk-actors":"Threat Actors","csk-attacks":"Attack Methods",
    "csk-malware":"Malware","csk-social":"Social Engineering","csk-aware":"Cybersecurity Awareness",
    "csk-best":"Best Practices",
    "org-cert":"Training","org-proj":"Project","org-exp":"Experience",
    "harea-cyber":"Cybersecurity","harea-sys":"Systems","harea-virt":"Virtualization","harea-net":"Networking","harea-cloud":"Tools & Support",
    "comp-netsec":"Network Security","comp-secconcepts":"Security Concepts","comp-secops":"Security Operations","comp-protection":"Endpoint Protection",
    "comp-winserver":"Windows Server","comp-virt":"Virtualization & Containers","comp-linux":"Linux","comp-monit":"Monitoring","comp-storage":"Storage",
    "comp-deploy":"Device Management","comp-baremetal":"Bare-Metal Hypervisor","comp-hosted":"Hosted Hypervisor","comp-containers":"Containers","comp-iaas":"IaaS / Cloud",
    "comp-netinfra":"Network Infrastructure","comp-netsvc":"Network Services","comp-secnet":"Secure Connectivity",
    "comp-ticketing":"Ticketing / Help Desk","comp-admin":"Administration & Documentation","comp-productivity":"Productivity",
    "hsk-raid":"RAID","hsk-ubuntu":"Ubuntu Server","hsk-webmin":"Webmin","hsk-vpn":"VPN",
    "hsk-backup":"Backup & Recovery","hsk-ps":"PowerShell Scripting","hsk-ad":"Active Directory",
    "hsk-proxmox":"Proxmox","hsk-vmware":"VMware","hsk-vbox":"VirtualBox",
    "hsk-monit":"Monitoring (Grafana, Zabbix, Prometheus)","hsk-tcpip":"TCP/IP",
    "hsk-routing":"Routing & Switching","hsk-wifi":"Wi-Fi / WLAN","hsk-ticket":"Ticketing / Help Desk",
    "proj-title":"Projects","proj3-title":"Filebrowser ISO Distribution",
    "proj3-desc":"Local ISO distribution server using Docker and RAID 5. Eliminates WAN network saturation in an educational environment.",
    "proj-link":"View project →",
    "page-skills-sub":"Technologies, tools and skills I work with day to day.",
    "page-certs-sub":"Official cybersecurity certifications.",
    "page-proj-sub":"Technical projects I have worked on.",
    "proj-soon-title":"More projects on the way","proj-soon-desc":"Currently building cybersecurity and systems administration labs."
  }
};

/* ══════════════════════════════════════════════
   THEME
══════════════════════════════════════════════ */
(function theme() {
  document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'light');
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const n = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', n);
    localStorage.setItem('theme', n);
  });
})();

/* ══════════════════════════════════════════════
   LANGUAGE
══════════════════════════════════════════════ */
const langBtns = document.querySelectorAll('.lang-btn');

function setLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (T[lang]?.[k]) el.innerHTML = T[lang][k];
  });
  document.querySelectorAll('[data-i18n-nav]').forEach(el => {
    const k = el.getAttribute('data-i18n-nav');
    if (T[lang]?.[k]) el.textContent = T[lang][k];
  });
  langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  localStorage.setItem('lang', lang);
  // propagate lang to internal links so it persists across pages
  document.querySelectorAll('[data-keep-lang]').forEach(a => {
    const base = a.getAttribute('href').split('?')[0];
    a.setAttribute('href', base + '?lang=' + lang);
  });
}
langBtns.forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* ══════════════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════════════ */
(function cursor() {
  const cur = document.getElementById('cursor');
  if (!cur) return;
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function anim() {
    cx += (mx - cx) * .42; cy += (my - cy) * .42;
    cur.style.left = cx + 'px'; cur.style.top = cy + 'px';
    requestAnimationFrame(anim);
  })();
  const hoverize = () => document.querySelectorAll('a,button,input,textarea,summary,.skill-tag,.cert-link,.project-link').forEach(el => {
    el.addEventListener('mouseenter', () => cur.classList.add('hover'));
    el.addEventListener('mouseleave', () => cur.classList.remove('hover'));
  });
  hoverize();
  document.addEventListener('mousedown', () => cur.classList.add('click'));
  document.addEventListener('mouseup',   () => cur.classList.remove('click'));
})();

/* ══════════════════════════════════════════════
   HAMBURGER
══════════════════════════════════════════════ */
(function hamburger() {
  const hbg = document.getElementById('hamburger');
  const mm  = document.getElementById('mobile-menu');
  if (!hbg || !mm) return;
  hbg.addEventListener('click', () => {
    const o = hbg.classList.toggle('open');
    mm.classList.toggle('open', o);
    hbg.setAttribute('aria-expanded', o);
    mm.setAttribute('aria-hidden', !o);
  });
  mm.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', () => {
    hbg.classList.remove('open'); mm.classList.remove('open');
    hbg.setAttribute('aria-expanded', 'false'); mm.setAttribute('aria-hidden', 'true');
  }));
})();

/* ══════════════════════════════════════════════
   ACTIVE NAV (by current page)
══════════════════════════════════════════════ */
(function activeNav() {
  let here = location.pathname.split('/').pop();
  if (!here || here === '') here = 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(l => {
    const target = l.getAttribute('href').split('?')[0].split('#')[0];
    if (target === here) l.classList.add('active');
  });
})();

/* ══════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════ */
(function reveal() {
  const obs = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: .06 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ══════════════════════════════════════════════
   BACK TO TOP
══════════════════════════════════════════════ */
(function backToTop() {
  const btt = document.getElementById('back-to-top');
  if (!btt) return;
  window.addEventListener('scroll', () => btt.classList.toggle('visible', scrollY > 500), { passive: true });
  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ══════════════════════════════════════════════
   INIT LANGUAGE
══════════════════════════════════════════════ */
const initLang = new URLSearchParams(location.search).get('lang') || localStorage.getItem('lang') || 'es';
setLang(initLang);

/* ══════════════════════════════════════════════
   BOOT LOADER (index only)
══════════════════════════════════════════════ */
(function bootLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  // Only play the boot animation once per browser session.
  if (sessionStorage.getItem('booted')) {
    loader.remove();
    return;
  }

  const bar = document.getElementById('loader-bar');
  const lines = [0, 1, 2, 3, 4];
  let i = 0;
  function showLine() {
    if (i < lines.length) {
      document.getElementById('ll' + lines[i])?.classList.add('show');
      bar.style.width = ((i + 1) / lines.length * 100) + '%';
      i++;
      setTimeout(showLine, i === 1 ? 300 : 380);
    } else {
      sessionStorage.setItem('booted', '1');
      setTimeout(() => { loader.classList.add('hidden'); setTimeout(startTerminalIntro, 400); }, 450);
    }
  }
  setTimeout(showLine, 120);
})();

/* ══════════════════════════════════════════════
   TERMINAL (index only — guarded)
══════════════════════════════════════════════ */
let startTerminalIntro = () => {};
(function terminal() {
  const termBody = document.getElementById('term-body');
  if (!termBody) return;

  let termHistory = [], histIdx = -1;
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  function addOut(text, cls = '') {
    const d = document.createElement('div');
    d.className = 't-out' + (cls ? ' ' + cls : '');
    d.textContent = text;
    termBody.appendChild(d);
    termBody.scrollTop = termBody.scrollHeight;
  }
  function addSpacer() { const d = document.createElement('div'); d.className = 't-spacer'; termBody.appendChild(d); }

  async function typeCmd(text) {
    const row = document.createElement('div'); row.className = 't-row';
    const p = document.createElement('span'); p.className = 't-prompt'; p.textContent = '$ ';
    const c = document.createElement('span'); c.className = 't-cmd';
    row.appendChild(p); row.appendChild(c); termBody.appendChild(row);
    for (const ch of text) { c.textContent += ch; termBody.scrollTop = termBody.scrollHeight; await sleep(55 + Math.random() * 35); }
    await sleep(180);
  }

  const CMDS = {
    whoami: () => { addOut('mario rodriguez gonzalez', 'g'); addOut('asir student · it support technician n1', 'w'); addOut('barcelona, españa', 'w'); },
    help:   () => { addOut('comandos disponibles:', 'b'); ['whoami','skills','contact','certs','clear','date','ls'].forEach(c => addOut('  ' + c)); },
    skills: () => {
      addOut('sistemas & redes:', 'b'); addOut('  windows server · linux · docker · vlan · dns/dhcp · aws');
      addOut('cloud & empresa:', 'b'); addOut('  aws ec2 · microsoft 365 · google workspace · jira');
      addOut('aptitudes:', 'b'); addOut('  resolución incidencias · trabajo equipo · adaptabilidad');
    },
    contact:() => { addOut('email:    mario2006rodriguez@gmail.com', 'g'); addOut('linkedin: linkedin.com/in/mariorodriguezgonzalez', 'g'); addOut('github:   github.com/mariorodriguezgo', 'g'); },
    certs:  () => {
      addOut('fortinet:', 'b');
      addOut('  ✓ certified fundamentals cybersecurity (fcf)', 'g');
      addOut('  ✓ technical introduction to cybersecurity 3.0 (nse2)', 'g');
      addOut('  ✓ introduction to the threat landscape 3.0', 'g');
      addOut('  ✓ getting started in cybersecurity 3.0 (nse1)', 'g');
    },
    ls:     () => addOut('about/  skills/  experience/  education/  certs/  projects/', 'b'),
    date:   () => addOut(new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }), 'w'),
    clear:  () => { termBody.innerHTML = ''; showInputLine(); return true; }
  };

  function showInputLine() {
    const row = document.createElement('div'); row.className = 't-input-row';
    row.innerHTML = '<span class="t-prompt">$ </span>';
    const input = document.createElement('input');
    input.type = 'text'; input.className = 't-input'; input.autocomplete = 'off'; input.spellcheck = false;
    input.setAttribute('aria-label', 'Terminal input');
    row.appendChild(input); termBody.appendChild(row);
    termBody.scrollTop = termBody.scrollHeight;
    termBody.addEventListener('click', () => input.focus());
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const val = input.value.trim().toLowerCase();
        input.disabled = true; addSpacer();
        if (val === '') { showInputLine(); return; }
        termHistory.unshift(val); histIdx = -1;
        if (CMDS[val]) { const skip = CMDS[val](); if (!skip) { addSpacer(); showInputLine(); } }
        else { addOut('comando no encontrado: ' + val + "  (escribe 'help')", 'err'); addSpacer(); showInputLine(); }
      }
      if (e.key === 'ArrowUp')   { histIdx = Math.min(histIdx + 1, termHistory.length - 1); input.value = termHistory[histIdx] || ''; e.preventDefault(); }
      if (e.key === 'ArrowDown') { histIdx = Math.max(histIdx - 1, -1); input.value = histIdx >= 0 ? termHistory[histIdx] : ''; e.preventDefault(); }
    });
    setTimeout(() => input.focus(), 50);
  }

  startTerminalIntro = async function () {
    await typeCmd('whoami'); CMDS.whoami(); addSpacer(); await sleep(400);
    await typeCmd('certs');  CMDS.certs();  addSpacer(); await sleep(300);
    showInputLine();
  };

  // If there's no loader on the page, start the terminal right away
  if (!document.getElementById('loader')) startTerminalIntro();
})();
