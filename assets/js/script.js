const toolsDB = [
  {cat:"etc", src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Arch_Linux_%22Crystal%22_icon.svg/960px-Arch_Linux_%22Crystal%22_icon.svg.png"},
  {cat:"etc", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"},
  {cat:"software", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},
  {cat:"software", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
  {cat:"programming", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
  {cat:"software", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
  {cat:"programming", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
  {cat:"programming", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
  {cat:"software", src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/960px-Npm-logo.svg.png"},
  {cat:"software", src:"https://freesvg.org/img/winbox-mikrotik-icon.png"},
  {cat:"programming", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
  {cat:"programming", src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/960px-Sass_Logo_Color.svg.png"},
  {cat:"software", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},
  {cat:"programming", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"},
  {cat:"software", src:"https://upload.wikimedia.org/wikipedia/commons/e/e2/Thonny_logo.png?20181127113433"},
  {cat:"software", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},
  {cat:"database", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
  {cat:"software", src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/960px-Kubernetes_logo_without_workmark.svg.png"},
  {cat:"database", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
  {cat:"programming", src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"}
];

const projects = [
  {
    id: 0,
    title: "BRUTALIST STARTUP PAGE",
    subtitle: "EXPERIMENTAL WEB • 1 MONTH",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    description: "A radical browser startup page that rejects conventional design norms. Features brutalist aesthetics, glitch effects, and minimalist functionality.",
    shortDescription: "Radical browser startup page with brutalist design and glitch effects.",
    technologies: ["HTML5", "CSS3", "JS", "BRUTALIST", "GLITCH ART"],
    features: "• RAW, UNFILTERED UI\n• GLITCH ANIMATIONS\n• MINIMALIST NAVIGATION\n• CUSTOM TYPOGRAPHY\n• EXPERIMENTAL LAYOUTS\n• DARK MODE ONLY",
    liveLink: "https://brutal.takathena.com",
    githubLink: "https://github.com/takathena/brutalist-startpage"
  },
  {
    id: 1,
    title: "GLITCH AI GENERATOR",
    subtitle: "AI/ML ART • 2 MONTHS",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    description: "An AI image generator that intentionally creates glitched and distorted art. Embraces imperfection and digital artifacts as aesthetic features.",
    shortDescription: "AI image generator creating glitched and distorted art intentionally.",
    technologies: ["PYTHON", "TENSORFLOW", "GLSL", "WEBGL", "AI ART"],
    features: "• GLITCH-STYLE GENERATION\n• REAL-TIME DISTORTION\n• NOISE INJECTION\n• COLOR CHANNEL SHIFTING\n• PIXELATION CONTROLS",
    liveLink: "https://glitch-ai.takathena.com",
    githubLink: "https://github.com/takathena/glitch-ai-generator"
  },
  {
    id: 2,
    title: "TERMINAL CODE EDITOR",
    subtitle: "DEVELOPMENT TOOL • 1.5 MONTHS",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop",
    description: "A terminal-based code editor with brutalist UI. No syntax highlighting, no autocomplete—just raw text editing in monospace fonts.",
    shortDescription: "Terminal-based code editor with brutalist UI and minimal features.",
    technologies: ["NODE.JS", "TERMINAL UI", "STREAMS", "FILE SYSTEM", "CLI"],
    features: "• TERMINAL INTERFACE\n• MONOSPACE ONLY\n• FILE SYSTEM INTEGRATION\n• MINIMAL FEATURES\n• KEYBOARD-ONLY NAVIGATION",
    liveLink: "https://terminal.takathena.com",
    githubLink: "https://github.com/takathena/terminal-editor"
  },
  {
    id: 3,
    title: "DATA BRUTALISM DASHBOARD",
    subtitle: "DATA VISUALIZATION • 2 MONTHS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format&fit=crop&q=80",
    description: "A data visualization dashboard that rejects conventional charting libraries. Uses raw SVG and canvas for maximum performance.",
    shortDescription: "Data visualization dashboard using raw SVG and canvas for performance.",
    technologies: ["D3.JS", "SVG", "CANVAS", "WEB WORKERS", "DATA VIZ"],
    features: "• RAW SVG RENDERING\n• REAL-TIME UPDATES\n• MINIMALIST CHARTS\n• CUSTOM GRID SYSTEM\n• PERFORMANCE OPTIMIZED",
    liveLink: "https://data-brutal.takathena.com",
    githubLink: "https://github.com/takathena/data-brutalism"
  },
  {
    id: 4,
    title: "BRUTAL CHAT",
    subtitle: "REAL-TIME APP • 2.5 MONTHS",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=400&fit=crop",
    description: "A real-time chat application with brutalist design principles. No emojis, no rich text—just pure text communication.",
    shortDescription: "Real-time chat app with brutalist design and pure text communication.",
    technologies: ["WEBSOCKETS", "NODE.JS", "EXPRESS", "MONGO", "REDIS"],
    features: "• REAL-TIME MESSAGING\n• NO EMOJIS\n• MONOSPACE TEXT ONLY\n• MINIMAL PROTOCOL\n• OFFLINE QUEUE",
    liveLink: "https://chat-brutal.takathena.com",
    githubLink: "https://github.com/takathena/brutal-chat"
  },
  {
    id: 5,
    title: "GLITCH PORTFOLIO",
    subtitle: "PERSONAL SITE • 1 MONTH",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    description: "My personal portfolio website built with glitch aesthetics and brutalist design principles.",
    shortDescription: "Personal portfolio with glitch aesthetics and brutalist design.",
    technologies: ["HTML", "CSS", "JS", "GLITCH ART", "BRUTALISM"],
    features: "• GLITCH ANIMATIONS\n• BRUTALIST LAYOUT\n• PERFORMANCE FOCUSED\n• NO FRAMEWORKS\n• CUSTOM TYPOGRAPHY",
    liveLink: "https://takathena.com",
    githubLink: "https://github.com/takathena/glitch-portfolio"
  },
  {
    id: 6,
    title: "RAW CALCULATOR",
    subtitle: "UTILITY APP • 3 WEEKS",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&h=400&fit=crop",
    description: "A calculator app that rejects conventional UI patterns. Uses raw buttons and direct feedback.",
    shortDescription: "Calculator app with raw buttons and direct feedback.",
    technologies: ["VANILLA JS", "CSS GRID", "CALC ENGINE", "PWA"],
    features: "• RAW BUTTONS\n• INSTANT FEEDBACK\n• NO ANIMATIONS\n• KEYBOARD SUPPORT\n• PWA INSTALLABLE",
    liveLink: "https://calc-brutal.takathena.com",
    githubLink: "https://github.com/takathena/raw-calculator"
  },
  {
    id: 7,
    title: "FILE BRUTALIZER",
    subtitle: "DESKTOP APP • 2 MONTHS",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=400&fit=crop",
    description: "A desktop application for applying brutalist effects to files and images.",
    shortDescription: "Desktop app for applying brutalist effects to files and images.",
    technologies: ["ELECTRON", "NODE.JS", "IMAGE PROCESSING", "FILE SYSTEM"],
    features: "• FILE PROCESSING\n• BRUTALIST FILTERS\n• BATCH OPERATIONS\n• CLI INTERFACE\n• CUSTOM PLUGINS",
    liveLink: "https://file-brutal.takathena.com",
    githubLink: "https://github.com/takathena/file-brutalizer"
  }
];

const certificatesDB = [
  {
    id: 0,
    title: "AI, MACHINE LEARNING & GENERATIVE AI FUNDAMENTALS",
    issuer: "DICODING",
    issuerIcon: "https://assets.cdn.dicoding.com/original/commons/new-ui-logo.png",
    date: "OCTOBER 2025",
    category: "ai",
    image: "https://assets.cdn.dicoding.com/original/academy/dos-603b3a230367b60edb5d11ffb951b9e120231217191216.png",
    badge: "FUNDAMENTAL",
    description: "Identify the basic concepts of AI. Describes the basic concepts of data and its utilization in AI development. Describes the basic concepts of Machine Learning as part of AI along with examples of its application.",
    shortDescription: "Identify the basic concepts of AI. Describes the basic concepts of data and its utilization in AI development.",
    skills: ["AI", "MACHINE LEARNING", "GENERATIVE AI"],
    validation: "CERT ID: RVZKG091QXD5",
    viewLink: "https://www.dicoding.com/certificates/RVZKG091QXD5",
    credentialLink: "https://www.dicoding.com/certificates/RVZKG091QXD5"
  },
  {
    id: 1,
    title: "TOEIC - ENGLISH TEST",
    issuer: "TOEIC",
    issuerIcon: "https://toeictest.co.nz/cdn/shop/files/ets-toeic-olpc-official-learning-preparation-course.png?v=1730679765&width=2000",
    date: "AGUSTUS 2025",
    category: "communication",
    image: "https://lsureveille.com/wp-content/uploads/2024/12/i1YdPleekr6DwYomZpL5HzeibcWNLSgh8Wh6afxW.jpg",
    badge: "ENG LANGUAGE",
    description: " Measures English skills for business and everyday international communication.",
    shortDescription: " Measures English skills for business and everyday international communication.",
    skills: ["ENGLISH", "COMMUNICATION", "LITERACY", "CONVERSATION"],
    validation: "CERT ID: ",
    viewLink: "",
    credentialLink: ""
  },
  {
    id: 2,
    title: "CAREER MANAGEMENT ESSENTIALS",
    issuer: "IBM SKILLSBUILD",
    issuerIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkJLM7emTns_D7np_eUo6BiKudDXioSpGZsQ&s",
    date: "OCTOBER 2025",
    category: "communication",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5F2vvKWRChDD_qlM1DcrkaPiB1S-GpRoG1w&s",
    badge: "PROFESSIONAL",
    description: "Knows how to research workplaces, build a professional social network brand, identify their skills, create a standout resume to bypass application tracking systems, and prepare for interviews.",
    shortDescription: "Knows how to research workplaces, build a professional social network brand, identify their skills, create a standout resume to bypass application tracking systems, and prepare for interviews.",
    skills: ["BUILD PROFESSIONAL PROFILE", "HOW TO RESEARCH WORKPLACES", "IDENTIFY SKILLS"],
    validation: "CERT ID: 7b35bc7c-c629-4cd1-8d92-cca29171751b",
    viewLink: "https://www.credly.com/badges/7b35bc7c-c629-4cd1-8d92-cca29171751b/public_url",
    credentialLink: "https://www.credly.com/badges/7b35bc7c-c629-4cd1-8d92-cca29171751b/public_url"
  },
  {
    id: 3,
    title: "JAPANESE ONLINE COURSE",
    issuer: "YPMCC",
    issuerIcon: "https://ypmcc.com/wp-content/uploads/2024/02/cropped-Logo-Bulat-PT-MCC-180x180.png",
    date: "DECEMBER 2025",
    category: "communication",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlb6c9bsfKuzr7wIx0S0nGdzLv6NS4HQl0A&s",
    badge: "JP LANGUAGE",
    description: " A foundational course designed for learners with zero prior knowledge to achieve basic conversational fluency and literacy.",
    shortDescription: "A foundational course designed for learners with zero prior knowledge to achieve basic conversational fluency and literacy.",
    skills: ["JAPANESE", "COMMUNICATION", "CONVERSATION", "LITERACY"],
    validation: "CERT ID: YPMCC-JP-2025-789",
    viewLink: "https://drive.google.com/file/d/1bmjvFToNFNwmT8Gn1i1_p85_wtEBu9ce/view?usp=drive_link",
    credentialLink: "https://ypmcc.com/japanese-class/"
  }
];

let currentProjectIndex = 0;
let currentCertIndex = 0;
let totalProjects = projects.length;
let totalCerts = certificatesDB.length;
let projectsPerView = 3;
let certsPerView = 3;

document.addEventListener('DOMContentLoaded', function() {
  const grid = document.getElementById("tools-grid");
  toolsDB.forEach(t => {
    const img = document.createElement("img");
    img.src = t.src;
    img.alt = `${t.cat} icon`;
    img.dataset.cat = t.cat;
    img.loading = "lazy";
    img.addEventListener('error', function() {
      this.style.display = 'none';
    });
    grid.appendChild(img);
  });

  renderProjects();
  initializeCertificates();
  setupEventListeners();
  setTimeout(toggleTools, 100);
  window.addEventListener('resize', handleResize);
  handleResize();
});

function handleResize() {
  const width = window.innerWidth;
  const cards = document.querySelectorAll('.card, .cert-card');
  cards.forEach(card => {
    if (width < 480) {
      card.style.minWidth = '240px';
      card.style.minHeight = '240px';
      projectsPerView = 1;
      certsPerView = 1;
    } else if (width < 768) {
      card.style.minWidth = '260px';
      card.style.minHeight = '260px';
      projectsPerView = 2;
      certsPerView = 2;
    } else {
      card.style.minWidth = '';
      card.style.minHeight = '';
      projectsPerView = 3;
      certsPerView = 3;
    }
  });
  updateCarouselProgress();
  createProjectIndicators();
  createCertIndicators();
}

function createProjectIndicators() {
  const indicator = document.getElementById('projects-indicator');
  indicator.innerHTML = '';
  const totalIndicators = Math.ceil(totalProjects / projectsPerView);
  
  for (let i = 0; i < totalIndicators; i++) {
    const dot = document.createElement('div');
    dot.className = 'indicator-dot';
    if (i === currentProjectIndex) dot.classList.add('active');
    dot.setAttribute('data-index', i);
    dot.setAttribute('aria-label', `Go to projects group ${i + 1}`);
    dot.addEventListener('click', () => goToProjectGroup(i));
    indicator.appendChild(dot);
  }
}

function createCertIndicators() {
  const indicator = document.getElementById('certificates-indicator');
  indicator.innerHTML = '';
  const totalIndicators = Math.ceil(totalCerts / certsPerView);
  
  for (let i = 0; i < totalIndicators; i++) {
    const dot = document.createElement('div');
    dot.className = 'indicator-dot';
    if (i === currentCertIndex) dot.classList.add('active');
    dot.setAttribute('data-index', i);
    dot.setAttribute('aria-label', `Go to certificates group ${i + 1}`);
    dot.addEventListener('click', () => goToCertGroup(i));
    indicator.appendChild(dot);
  }
}

function slideProject(direction) {
  const carousel = document.getElementById('projects-carousel');
  const cards = document.querySelectorAll('.card');
  if (cards.length === 0) return;
  
  const cardWidth = cards[0].offsetWidth;
  const gap = 24; 
  const totalGroups = Math.ceil(totalProjects / projectsPerView);
  currentProjectIndex += direction;
  
  if (currentProjectIndex < 0) {
    currentProjectIndex = totalGroups - 1;
  } else if (currentProjectIndex >= totalGroups) {
    currentProjectIndex = 0;
  }
  
  const scrollPosition = currentProjectIndex * (cardWidth + gap) * projectsPerView;
  carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  
  updateProjectIndicators();
  updateCarouselProgress();
  setTimeout(() => addSnapFocusToVisibleProjects(), 300);
  playClickSound();
}

function slideCertificate(direction) {
  const carousel = document.getElementById('certificates-carousel');
  const cards = document.querySelectorAll('.cert-card');
  if (cards.length === 0) return;
  
  const cardWidth = cards[0].offsetWidth;
  const gap = 24;
  const totalGroups = Math.ceil(totalCerts / certsPerView);
  currentCertIndex += direction;
  
  if (currentCertIndex < 0) {
    currentCertIndex = totalGroups - 1;
  } else if (currentCertIndex >= totalGroups) {
    currentCertIndex = 0;
  }
  
  const scrollPosition = currentCertIndex * (cardWidth + gap) * certsPerView;
  carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  
  updateCertIndicators();
  updateCarouselProgress();
  setTimeout(() => addSnapFocusToVisibleCerts(), 300);
  playClickSound();
}

function goToProjectGroup(groupIndex) {
  const carousel = document.getElementById('projects-carousel');
  const cards = document.querySelectorAll('.card');
  if (cards.length === 0) return;
  
  const cardWidth = cards[0].offsetWidth;
  const gap = 24;
  
  currentProjectIndex = groupIndex;
  const scrollPosition = groupIndex * (cardWidth + gap) * projectsPerView;
  
  carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  
  updateProjectIndicators();
  updateCarouselProgress();
  setTimeout(() => addSnapFocusToVisibleProjects(), 300);
  playClickSound();
}

function goToCertGroup(groupIndex) {
  const carousel = document.getElementById('certificates-carousel');
  const cards = document.querySelectorAll('.cert-card');
  if (cards.length === 0) return;
  
  const cardWidth = cards[0].offsetWidth;
  const gap = 24;
  
  currentCertIndex = groupIndex;
  const scrollPosition = groupIndex * (cardWidth + gap) * certsPerView;
  
  carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  
  updateCertIndicators();
  updateCarouselProgress();
  setTimeout(() => addSnapFocusToVisibleCerts(), 300);
  playClickSound();
}

function updateProjectIndicators() {
  const indicators = document.querySelectorAll('#projects-indicator .indicator-dot');
  indicators.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentProjectIndex);
  });
}

function updateCertIndicators() {
  const indicators = document.querySelectorAll('#certificates-indicator .indicator-dot');
  indicators.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentCertIndex);
  });
}

function addSnapFocusToVisibleProjects() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.classList.remove('snap-focus');
    card.classList.remove('current-item');
  });
  
  const startIndex = currentProjectIndex * projectsPerView;
  const endIndex = Math.min(startIndex + projectsPerView, totalProjects);
  
  for (let i = startIndex; i < endIndex; i++) {
    if (cards[i]) {
      cards[i].classList.add('snap-focus');
      if (i === startIndex) cards[i].classList.add('current-item');
    }
  }
}

function addSnapFocusToVisibleCerts() {
  const cards = document.querySelectorAll('.cert-card');
  cards.forEach(card => {
    card.classList.remove('snap-focus');
    card.classList.remove('current-item');
  });
  
  const startIndex = currentCertIndex * certsPerView;
  const endIndex = Math.min(startIndex + certsPerView, totalCerts);
  
  for (let i = startIndex; i < endIndex; i++) {
    if (cards[i]) {
      cards[i].classList.add('snap-focus');
      if (i === startIndex) cards[i].classList.add('current-item');
    }
  }
}

function updateCarouselProgress() {
  const totalProjectGroups = Math.ceil(totalProjects / projectsPerView);
  const projectsProgress = ((currentProjectIndex + 1) / totalProjectGroups) * 100;
  const projectsProgressFill = document.getElementById('projects-progress-fill');
  if (projectsProgressFill) projectsProgressFill.style.width = `${projectsProgress}%`;
  
  const totalCertGroups = Math.ceil(totalCerts / certsPerView);
  const certsProgress = ((currentCertIndex + 1) / totalCertGroups) * 100;
  const certsProgressFill = document.getElementById('certificates-progress-fill');
  if (certsProgressFill) certsProgressFill.style.width = `${certsProgress}%`;
}

function playClickSound() {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 600;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  } catch (e) {}
}

function renderProjects() {
  const track = document.getElementById('projects-track');
  track.innerHTML = '';
  projects.forEach((project, index) => {
    const card = createProjectCard(project, index);
    track.appendChild(card);
  });
  setTimeout(() => addSnapFocusToVisibleProjects(), 100);
}

function createProjectCard(project, index) {
  const card = document.createElement('article');
  card.className = 'card';
  card.onclick = () => openModal(project.id);
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `View ${project.title} project details`);
  card.setAttribute('data-index', index);
  
  const description = window.innerWidth < 768 ? project.shortDescription : project.description;
  const displayDescription = description.substring(0, window.innerWidth < 480 ? 80 : 120);
  
  card.innerHTML = `
    <div class="card-image">
      <img src="${project.image}" alt="${project.title}" loading="lazy">
    </div>
    <div class="card-content">
      <h4 class="card-title text-truncate">${project.title}</h4>
      <p class="card-description">${displayDescription}...</p>
      <div class="card-tech">
        ${project.technologies.slice(0, window.innerWidth < 480 ? 2 : 3).map(tech => 
          `<span class="tech-tag">${tech}</span>`
        ).join('')}
        ${project.technologies.length > (window.innerWidth < 480 ? 2 : 3) ? 
          `<span class="tech-tag">+${project.technologies.length - (window.innerWidth < 480 ? 2 : 3)}</span>` : ''
        }
      </div>
    </div>
  `;
  return card;
}

function initializeCertificates() {
  const filterSelect = document.getElementById('cert-filter');
  filterSelect.addEventListener('change', (e) => {
    renderCertificates(e.target.value);
  });
  renderCertificates('all');
}

function renderCertificates(category) {
  const track = document.getElementById('certificates-track');
  track.innerHTML = '';
  
  const filteredCerts = category === 'all' 
    ? certificatesDB 
    : certificatesDB.filter(cert => cert.category === category);
  
  if (filteredCerts.length === 0) {
    track.innerHTML = `
      <div style="padding: 3rem; text-align: center; color: var(--text-primary); font-family: 'IBM Plex Mono'; width: 100%;">
        <h4 style="color: var(--text-accent); margin-bottom: 1rem;">NO CERTIFICATES FOUND</h4>
        <p>Try selecting a different category</p>
      </div>
    `;
    totalCerts = 0;
    createCertIndicators();
    updateCarouselProgress();
    return;
  }
  
  filteredCerts.forEach((cert, index) => {
    const certCard = createCertificateCard(cert, index);
    track.appendChild(certCard);
  });
  
  totalCerts = filteredCerts.length;
  currentCertIndex = 0;
  createCertIndicators();
  updateCarouselProgress();
  setTimeout(() => addSnapFocusToVisibleCerts(), 100);
}

function createCertificateCard(cert, index) {
  const certCard = document.createElement('article');
  certCard.className = 'card cert-card';
  certCard.onclick = () => openCertificateModal(cert.id);
  certCard.tabIndex = 0;
  certCard.setAttribute('role', 'button');
  certCard.setAttribute('aria-label', `View ${cert.title} certificate details`);
  certCard.setAttribute('data-index', index);
  
  const description = window.innerWidth < 768 ? cert.shortDescription : cert.description;
  const displayDescription = description.substring(0, window.innerWidth < 480 ? 60 : 100);
  
  certCard.innerHTML = `
    <div class="card-image cert-image">
      <img src="${cert.image}" alt="${cert.title}" loading="lazy">
      <div class="cert-badge">${cert.badge}</div>
    </div>
    <div class="card-content cert-content">
      <div class="cert-issuer">
        <img src="${cert.issuerIcon}" alt="${cert.issuer} logo" loading="lazy">
        <span>${cert.issuer}</span>
      </div>
      <h4 class="card-title text-truncate">${cert.title}</h4>
      <p class="card-description">${displayDescription}...</p>
      <div class="card-tech">
        <span class="tech-tag">${cert.date}</span>
        <span class="tech-tag">${cert.category.toUpperCase()}</span>
      </div>
    </div>
  `;
  return certCard;
}

function toggleTools() {
  const body = document.getElementById("tools-body");
  const btn = document.getElementById("acc-btn");
  const isOpen = body.classList.contains("open");

  if(!isOpen) {
    body.style.maxHeight = body.scrollHeight + "px";
    body.classList.add("open");
    btn.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
  } else {
    body.style.maxHeight = body.scrollHeight + "px";
    void body.offsetHeight;
    body.style.maxHeight = "0px";
    body.classList.remove("open");
    btn.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }
}

let lockedTag = null;
const tags = document.querySelectorAll(".tag");

tags.forEach(tag => {
  tag.addEventListener("mouseenter", () => { 
    if(!lockedTag) applyFilter(tag.dataset.tag); 
  });
  tag.addEventListener("mouseleave", () => { 
    if(!lockedTag) clearFilter(); 
  });
  tag.addEventListener("click", () => {
    if(lockedTag === tag.dataset.tag) {
      lockedTag = null;
      tag.classList.remove("active");
      tag.setAttribute("aria-pressed", "false");
      clearFilter();
    } else {
      lockedTag = tag.dataset.tag;
      tags.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-pressed", "false");
      });
      tag.classList.add("active");
      tag.setAttribute("aria-pressed", "true");
      applyFilter(lockedTag);
    }
  });
});

function applyFilter(cat) {
  const grid = document.getElementById("tools-grid");
  grid.classList.add("dimmed");
  document.querySelectorAll("#tools-grid img").forEach(img => {
    img.classList.toggle("highlight", img.dataset.cat === cat);
  });
}

function clearFilter() {
  const grid = document.getElementById("tools-grid");
  grid.classList.remove("dimmed");
  document.querySelectorAll("#tools-grid img").forEach(i => i.classList.remove("highlight"));
}

function openModal(projectId) {
  const project = projects[projectId];
  const overlay = document.getElementById('modal-overlay');
  
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-subtitle').textContent = project.subtitle;
  document.getElementById('modal-image').src = project.image;
  document.getElementById('modal-description').textContent = project.description;
  document.getElementById('modal-features').innerHTML = project.features.replace(/\n/g, '<br>• ');
  
  const liveLink = document.getElementById('modal-live-link');
  liveLink.href = project.liveLink;
  liveLink.setAttribute('aria-label', `Visit ${project.title} live demo`);
  
  const githubLink = document.getElementById('modal-github-link');
  githubLink.href = project.githubLink;
  githubLink.setAttribute('aria-label', `View ${project.title} GitHub repository`);
  
  const techStack = document.getElementById('tech-stack');
  techStack.innerHTML = '';
  project.technologies.forEach(tech => {
    const techItem = document.createElement('div');
    techItem.className = 'tech-item';
    techItem.textContent = tech;
    techItem.setAttribute('role', 'listitem');
    techStack.appendChild(techItem);
  });
  
  overlay.style.display = 'flex';
  overlay.setAttribute('aria-hidden', 'false');
  setTimeout(() => { overlay.classList.add('active'); }, 10);
  
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = window.innerWidth > 768 ? '15px' : '0';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  setTimeout(() => {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }, 300);
}

function openCertificateModal(certId) {
  const cert = certificatesDB[certId];
  const overlay = document.getElementById('cert-modal-overlay');
  
  document.getElementById('cert-modal-title').textContent = cert.title;
  document.getElementById('cert-modal-subtitle').textContent = `${cert.issuer} • ${cert.date}`;
  document.getElementById('cert-modal-image').src = cert.image;
  document.getElementById('cert-modal-description').textContent = cert.description;
  document.getElementById('cert-validation').textContent = cert.validation;
  
  const viewLink = document.getElementById('cert-view-link');
  viewLink.href = cert.viewLink;
  viewLink.setAttribute('aria-label', `View ${cert.title} certificate`);
  
  const credentialLink = document.getElementById('cert-credential-link');
  credentialLink.href = cert.credentialLink;
  credentialLink.setAttribute('aria-label', `Verify ${cert.title} credential`);
  
  const skillsStack = document.getElementById('cert-skills-stack');
  skillsStack.innerHTML = '';
  cert.skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'tech-item';
    skillItem.textContent = skill;
    skillItem.setAttribute('role', 'listitem');
    skillsStack.appendChild(skillItem);
  });
  
  overlay.style.display = 'flex';
  overlay.setAttribute('aria-hidden', 'false');
  setTimeout(() => { overlay.classList.add('active'); }, 10);
  
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = window.innerWidth > 768 ? '15px' : '0';
}

function closeCertificateModal() {
  const overlay = document.getElementById('cert-modal-overlay');
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  setTimeout(() => {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }, 300);
}

function setupEventListeners() {
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const modal = document.getElementById('modal');
  
  modalOverlay.addEventListener('click', function(e) { if (e.target === modalOverlay) closeModal(); });
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) { e.stopPropagation(); });
  
  const certModalOverlay = document.getElementById('cert-modal-overlay');
  const certModalClose = document.getElementById('cert-modal-close');
  const certModal = document.getElementById('cert-modal');
  
  certModalOverlay.addEventListener('click', function(e) { if (e.target === certModalOverlay) closeCertificateModal(); });
  certModalClose.addEventListener('click', closeCertificateModal);
  certModal.addEventListener('click', function(e) { e.stopPropagation(); });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.getElementById('modal-overlay').classList.contains('active')) closeModal();
      if (document.getElementById('cert-modal-overlay').classList.contains('active')) closeCertificateModal();
    }
    
    if (e.key === 'ArrowLeft') {
      if (document.activeElement.closest('.projects-section')) {
        e.preventDefault(); slideProject(-1);
      } else if (document.activeElement.closest('.certificates-section')) {
        e.preventDefault(); slideCertificate(-1);
      }
    } else if (e.key === 'ArrowRight') {
      if (document.activeElement.closest('.projects-section')) {
        e.preventDefault(); slideProject(1);
      } else if (document.activeElement.closest('.certificates-section')) {
        e.preventDefault(); slideCertificate(1);
      }
    }
  });
  
  setupCarouselScrollListeners();
  
  let touchStartX = 0;
  let touchStartY = 0;
  
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });
  
  document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      const projectsRect = document.querySelector('.projects-section').getBoundingClientRect();
      const certsRect = document.querySelector('.certificates-section').getBoundingClientRect();
      
      if (touchStartY >= projectsRect.top && touchStartY <= projectsRect.bottom) {
        if (diffX > 0) slideProject(1);
        else slideProject(-1);
      } else if (touchStartY >= certsRect.top && touchStartY <= certsRect.bottom) {
        if (diffX > 0) slideCertificate(1);
        else slideCertificate(-1);
      }
    }
  }, { passive: true });
}

function setupCarouselScrollListeners() {
  const projectsCarousel = document.getElementById('projects-carousel');
  const certsCarousel = document.getElementById('certificates-carousel');
  
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }
  
  projectsCarousel.addEventListener('scroll', throttle(function() {
    const cards = document.querySelectorAll('.card');
    if (cards.length === 0) return;
    
    const cardWidth = cards[0].offsetWidth;
    const gap = 24;
    const scrollLeft = projectsCarousel.scrollLeft;
    const newIndex = Math.round(scrollLeft / ((cardWidth + gap) * projectsPerView));
    
    if (newIndex !== currentProjectIndex && newIndex >= 0) {
      currentProjectIndex = newIndex;
      updateProjectIndicators();
      updateCarouselProgress();
      addSnapFocusToVisibleProjects();
    }
  }, 150));
  
  certsCarousel.addEventListener('scroll', throttle(function() {
    const cards = document.querySelectorAll('.cert-card');
    if (cards.length === 0) return;
    
    const cardWidth = cards[0].offsetWidth;
    const gap = 24;
    const scrollLeft = certsCarousel.scrollLeft;
    const newIndex = Math.round(scrollLeft / ((cardWidth + gap) * certsPerView));
    
    if (newIndex !== currentCertIndex && newIndex >= 0) {
      currentCertIndex = newIndex;
      updateCertIndicators();
      updateCarouselProgress();
      addSnapFocusToVisibleCerts();
    }
  }, 150));
}