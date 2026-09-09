import { useEffect, useState } from 'react'

const navItems = ['Home', 'About', 'Journey', 'Projects', 'Skills', 'Resume', 'Contact']

 const projects = [
  {
    number: '01',
    name: 'NEXORA',
    type: 'AI-powered exam preparation platform',
    copy: 'An AI-powered exam preparation and study assistant using RAG and ChromaDB, with exam modes, document-based learning, progress tracking and an AI study planner.',
    problem: 'Students need focused, syllabus-restricted preparation instead of generic AI responses.',
    solution: 'Built an AI study assistant with RAG-based learning, document uploads and personalized study planning.',
    techStack: ['AI / LLM', 'RAG', 'ChromaDB'],
    contribution: 'Developed the core study-assistant features, exam modes, document-based learning and study-planning workflow.',
    outcome: '2nd Prize — Techno Bot 2026',
    tone: 'ember',
    github: 'https://github.com/Bhuvanesh0097/Nexora',
    liveDemo: 'https://nexora-red-beta.vercel.app/'
  },

  {
    number: '02',
    name: 'BABY FORUM',
    type: 'Featured project',
    copy: 'An interactive community/forum web application focused on creating, sharing and discussing posts.',
    problem: 'Users need a simple platform to create, share and discuss community posts.',
    solution: 'Built a web-based community/forum experience centered around post creation, sharing and discussion.',
    techStack: ['Web Application'],
    contribution: 'Designed and developed the portfolio project experience and its visual interface.',
    outcome: 'Live web application',
    tone: 'paper',
    liveDemo: 'https://baby-forum.netlify.app/',
    github: 'https://github.com/Bhuvanesh0097/Baby-Forum'
  },

  {
    
  number: '03',
  name: 'NETFENDER',
  type: 'AI-powered phishing detection system',
  copy: 'An AI-powered phishing detection system that analyzes emails and SMS in near-real-time.',
  problem: 'Users need faster detection of phishing threats across email and mobile messages.',
  solution: 'Built a detection system with email processing and mobile integration.',
  techStack: ['AI', 'IMAP', 'SMTP', 'ADB'],
  contribution: 'Built the phishing-detection workflow and integrated email and Android communication interfaces.',
  outcome: "AURISTRA'26 Hackathon project",
  tone: 'ink',
  github: 'https://github.com/Bhuvanesh0097/NetFender'
},
  

  {
    number: '04',
    name: 'MINDMEND',
    type: 'AI-based stress detection system',
    copy: 'An AI-based web application that detects and classifies stress levels from voice signals.',
    problem: 'Stress levels can be difficult to identify consistently from user interactions alone.',
    solution: 'Built a voice-based stress detection system using deep learning for feature extraction and temporal analysis.',
    techStack: ['Python', 'CNN', 'LSTM'],
    contribution: 'Developed the stress-detection workflow using CNN and LSTM-based analysis.',
    outcome: '85% accuracy • 32% reduction in user-reported stress levels',
    tone: 'clay',
    github: 'https://github.com/Bhuvanesh0097/MindMend'
  }
]

const skills = {
  Development: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'DSA', 'MySQL', 'FastAPI', 'Flask API', 'REST API'],
  Cloud: ['AWS', 'EC2', 'S3', 'IAM', 'VPC', 'CloudWatch'],
  Tools: ['Git', 'GitHub', 'SolidWorks', 'C#'],
  Interests: ['Cloud Computing', 'Backend Development', 'Web Development', 'AI / LLM', 'RAG', 'SEO'],
}

const babyForumImages = [
  { src: '/babyforum/babyforum1.jpeg', alt: 'Baby Forum login page' },
  { src: '/babyforum/babyforum2.jpeg', alt: 'Baby Forum homepage' },
  { src: '/babyforum/babyforum3.jpeg', alt: 'Baby Forum post page' },
  { src: '/babyforum/babyforum4.jpeg', alt: 'Baby Forum create post page' },
]
const nexoraImages = [
  { src: '/nexora/1.jpeg', alt: 'Nexora project screen one' },
  { src: '/nexora/2.jpeg', alt: 'Nexora project screen two' },
  { src: '/nexora/photo.jpeg', alt: 'Nexora project visual' },
  { src: '/nexora/photo2.jpeg', alt: 'Nexora project visual two' },
]
const proofImages = [
  { src: '/on-site internship/aktis certificate.jpeg', alt: 'Aktis internship certificate' },
  { src: '/on-site internship/finalmodel.jpeg', alt: 'Aktis internship engineering visual' },
  { src: '/on-site internship/knife.jpeg', alt: 'Aktis internship engineering visual' },
  { src: '/on-site internship/model1.jpeg', alt: 'Aktis internship engineering visual' },
  { src: '/nexora/certificate.jpeg', alt: 'Nexora certificate' },
  { src: '/online certificate/offer.jpeg', alt: 'Online internship offer document' },
  { src: '/online certificate/concern.jpeg', alt: 'Online internship document' },
]

const heroLetters = 'BHUVANESH S.'.split('')

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSkill, setActiveSkill] = useState('Development')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(babyForumImages[0])
  const [lightboxImages, setLightboxImages] = useState(babyForumImages)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('top')
  const [heroProgress, setHeroProgress] = useState(0)
  const [heroPointer, setHeroPointer] = useState({ x: 0, y: 0 })
  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    const sections = ['top', 'about', 'journey', 'projects', 'skills', 'proof', 'contact'].map(id => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id) }), { rootMargin: '-35% 0px -55% 0px' })
    sections.forEach(section => observer.observe(section))
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
      setHeroProgress(Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.9))))
    }
    window.addEventListener('scroll', updateProgress, { passive: true })
    const revealTimer = window.setTimeout(() => setHeroReady(true), 1500)
    return () => { observer.disconnect(); window.removeEventListener('scroll', updateProgress); window.clearTimeout(revealTimer) }
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <header className={`site-header ${menuOpen ? 'is-open' : ''}`}>
        <button className="wordmark" onClick={() => scrollTo('top')} aria-label="Back to home">B / S</button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span /> <span />
        </button>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item, index) => { const id = item === 'Home' ? 'top' : item.toLowerCase(); return <button className={activeSection === id ? 'active' : ''} key={item} onClick={() => scrollTo(id)}><span>{item === 'Home' ? '00' : `0${index}`}</span>{item}</button> })}
        </nav>
        <span className="header-mark">PORTFOLIO / 2026</span>
      </header>

      <main>
        <section className="hero name-hero" id="top" onMouseMove={(event) => { const bounds = event.currentTarget.getBoundingClientRect(); setHeroPointer({ x: (event.clientX - (bounds.left + bounds.width / 2)) / bounds.width, y: (event.clientY - (bounds.top + bounds.height / 2)) / bounds.height }) }} onMouseLeave={() => setHeroPointer({ x: 0, y: 0 })}>
          <div className="hero-grid" /><div className="red-aura" />
          <p className="eyebrow hero-eyebrow">Computer Science / Creative Practice</p>
          <div className="name-hero-stage" style={{ transform: `translateY(${heroProgress * -8}vh)`, opacity: 1 - heroProgress * 0.25 }}>
            <h1 className={`name-title ${heroReady ? 'is-ready' : ''}`} aria-label="Bhuvanesh S.">{heroLetters.map((letter, index) => { const isSpace = letter === ' '; const distance = Math.abs(index - (heroLetters.length / 2)); const pull = heroReady ? (1 - Math.min(distance / 7, 1)) : 0; const wave = heroReady ? Math.sin(index * 0.9 + heroPointer.x * 3) * pull * 2 : 0; const tilt = heroReady ? heroPointer.x * pull * 1.8 : 0; const scale = heroReady ? 1 + Math.abs(heroPointer.x) * pull * 0.018 : 1; return <span className={isSpace ? 'name-space' : ''} style={{ '--i': index, '--mx': `${heroPointer.x * pull * 12}px`, '--my': `${heroPointer.y * pull * 8 + wave}px`, '--tilt': `${tilt}deg`, '--letter-scale': scale, '--scroll-x': `${(index - 5) * heroProgress * 3}px` }} key={`${letter}-${index}`}>{isSpace ? '\u00a0' : letter}</span> })}</h1>
            <p className="name-subtitle">Computer Science / Creative Developer</p>
          </div>
          <div className="resume-actions">
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-button"
  >
    View Resume
  </a>

  <a
    href="/resume.pdf"
    download="Bhuvanesh-S-Resume.pdf"
    className="resume-button resume-button-secondary"
  >
    Download Resume
  </a>
</div>
          <button className="scroll-cue" onClick={() => scrollTo('about')}><span>Scroll to explore</span><b>↓</b></button>
          <span className="hero-index">00 / 06</span>
        </section>

        <section className="section about-section" id="about">
          <div className="section-top"><span className="section-number">01</span><span className="eyebrow">About</span><span className="section-rule" /></div>
          <div className="about-grid reveal">
            <div className="about-portrait"><img src="/profile.jpeg" alt="Portrait of Bhuvanesh S" /><div className="portrait-caption">Portrait / 01 <span>MVIT / 2028</span></div></div>
            <div className="about-copy"><p className="eyebrow">About me</p><h2>
  I build with <em>curiosity.</em>
  <br />
  I create with <em>purpose.</em>
</h2><p className="lead">Computer Science student building thoughtful digital experiences across backend, web development and AI.</p><p>My interests move between backend development, cloud computing, AI / LLM applications, automation and SEO. I like practical systems, clear interfaces and the small decisions that make digital work feel considered.</p><span className="signature">Bhuvanesh S <small>— currently learning in public</small></span></div>
          </div>
        </section>

        <section className="section journey-section" id="journey">
          <div className="section-top"><span className="section-number">02</span><span className="eyebrow">Journey</span><span className="section-rule" /></div>
          <div className="journey-heading reveal"><h2>A timeline of <em>becoming.</em></h2><p>Education, internships and the first rooms where ideas became real work.</p></div>
          <div className="journey-timeline-wrap">
          <div className="timeline">
            <article className="timeline-item reveal"><div className="timeline-date">2024 — 2028</div><div className="timeline-marker" /><div><span className="timeline-kind">Education</span><h3>Manakula Vinayagar<br />Institute of Technology</h3><p>B.Tech Computer Science</p><strong>CGPA: 8.6</strong></div><div className="timeline-evidence-empty" /></article>
            <article className="timeline-item reveal"><div className="timeline-date">30 Mar — 27 Apr 2026</div><div className="timeline-marker" /><div><span className="timeline-kind">Experience / 01</span><h3>Codtech IT Solutions</h3><p>Backend Developer Intern</p><div className="tag-row"><span>Blog Backend System</span><span>Real-Time Chat Server</span><span>E-commerce Backend</span><span>AI Recommendation System</span><span>Node.js</span><span>MySQL</span><span>Socket.io</span><span>MongoDB</span><span>Python</span><span>Flask</span></div><a className="timeline-link" href="https://github.com/Bhuvanesh0097/codtech-internship" target="_blank" rel="noreferrer">View GitHub ↗</a></div><div className="timeline-evidence"><button onClick={() => { setSelectedImage(proofImages[5]); setLightboxImages([proofImages[5], proofImages[6]]); setLightboxOpen(true) }}><img src={proofImages[5].src} alt={proofImages[5].alt} /><span>Offer</span></button><button onClick={() => { setSelectedImage(proofImages[6]); setLightboxImages([proofImages[5], proofImages[6]]); setLightboxOpen(true) }}><img src={proofImages[6].src} alt={proofImages[6].alt} /><span>Document</span></button></div></article>
            <article className="timeline-item reveal"><div className="timeline-date">02 Aug — 15 Aug 2026</div><div className="timeline-marker" /><div><span className="timeline-kind">Experience / 02</span><h3>Aktis Engineering<br />Solutions Pvt Ltd</h3><p>SolidWorks CAD &amp; RAG Chatbot Intern</p><div className="tag-row"><span>SolidWorks model design &amp; automation</span><span>CAD automation</span><span>Custom LLM chatbot</span><span>Retrieval-Augmented Generation (RAG)</span><span>Professional engineering environment</span></div></div><div className="timeline-evidence"><button onClick={() => { setSelectedImage(proofImages[0]); setLightboxImages(proofImages.slice(0, 4)); setLightboxOpen(true) }}><img src={proofImages[0].src} alt={proofImages[0].alt} /><span>Certificate</span></button><button onClick={() => { setSelectedImage(proofImages[1]); setLightboxImages(proofImages.slice(0, 4)); setLightboxOpen(true) }}><img src={proofImages[1].src} alt={proofImages[1].alt} /><span>Model</span></button><button onClick={() => { setSelectedImage(proofImages[2]); setLightboxImages(proofImages.slice(0, 4)); setLightboxOpen(true) }}><img src={proofImages[2].src} alt={proofImages[2].alt} /><span>Detail</span></button></div></article>
          </div>
          </div>
          <div className="proof-note"><span>Proof of experience</span><p>Selected internship and project evidence is collected in the Proof section below.</p></div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-top"><span className="section-number">03</span><span className="eyebrow">Projects</span><span className="section-rule" /></div>
          <div className="projects-heading reveal"><h2>Selected <em>projects.</em></h2><p>A growing archive of projects, ideas and visual studies.</p></div>
          <div className="project-scenes">
            <article className="project-scene nexora-scene reveal"><div className="scene-label"><span>Project 01</span><span>Visual study / 2026</span></div><div className="scene-art"><button className="scene-main-image" onClick={() => { setSelectedImage(nexoraImages[0]); setLightboxImages(nexoraImages); setLightboxOpen(true) }}><img
  src={nexoraImages[0].src}
  alt={nexoraImages[0].alt}
  loading="lazy"
/><span>Open visual ↗</span></button><button className="scene-float-image" onClick={() => { setSelectedImage(nexoraImages[1]); setLightboxImages(nexoraImages); setLightboxOpen(true) }}><img src={nexoraImages[1].src} alt={nexoraImages[1].alt} /></button></div><div className="scene-copy"><span className="project-number">01</span><div><p className="eyebrow">AI-powered exam preparation platform</p><h3>Nexora</h3><p>Presented at Techno Bot 2026, where Nexora received 2nd Prize.</p><div className="project-details">
  <div>
    <span className="detail-label">Problem</span>
    <p>{projects[0].problem}</p>
  </div>

  <div>
    <span className="detail-label">Solution</span>
    <p>{projects[0].solution}</p>
  </div>

  <div>
    <span className="detail-label">Tech Stack</span>
    <p>{projects[0].techStack.join(' • ')}</p>
  </div>

  <div>
    <span className="detail-label">My Contribution</span>
    <p>{projects[0].contribution}</p>
  </div>

  <div>
    <span className="detail-label">Outcome</span>
    <p>{projects[0].outcome}</p>
  </div>
</div><div className="scene-meta"><span>AI / LLM</span><span>Exam preparation</span><span>Visual archive</span></div><a className="scene-link" href="https://github.com/Bhuvanesh0097/Nexora" target="_blank" rel="noreferrer">GitHub ↗</a><a
  className="scene-link"
  href="https://nexora-red-beta.vercel.app/"
  target="_blank"
  rel="noreferrer"
>
  Live Demo ↗
</a></div></div></article>
            <article className="project-scene forum-scene reveal"><div className="scene-label"><span>Project 02</span><span>Interface archive / 2026</span></div><div className="scene-art"><button className="scene-main-image" onClick={() => { setSelectedImage(babyForumImages[0]); setLightboxImages(babyForumImages); setLightboxOpen(true) }}><img
  src={babyForumImages[0].src}
  alt={babyForumImages[0].alt}
  loading="lazy"
/><span>Open project ↗</span></button><div className="scene-stack">{babyForumImages.slice(1, 4).map(image => <button key={image.src} onClick={() => { setSelectedImage(image); setLightboxImages(babyForumImages); setLightboxOpen(true) }}><img src={image.src} alt={image.alt} loading="lazy" /></button>)}</div></div><div className="scene-copy"><span className="project-number">02</span><div><p className="eyebrow">Featured project</p><h3>Baby Forum</h3><p>An interactive community/forum web application focused on creating, sharing and discussing posts.</p><div className="project-details">
  <div>
    <span className="detail-label">Problem</span>
    <p>{projects[1].problem}</p>
  </div>

  <div>
    <span className="detail-label">Solution</span>
    <p>{projects[1].solution}</p>
  </div>

  <div>
    <span className="detail-label">Tech Stack</span>
    <p>{projects[1].techStack.join(' • ')}</p>
  </div>

  <div>
    <span className="detail-label">My Contribution</span>
    <p>{projects[1].contribution}</p>
  </div>

  <div>
    <span className="detail-label">Outcome</span>
    <p>{projects[1].outcome}</p>
  </div>
</div><div className="scene-meta"><span>Community</span><span>Web application</span><span>4 screens</span></div>
  

<a
  className="scene-link"
  href="https://baby-forum.netlify.app/"
  target="_blank"
  rel="noreferrer"
>
  Live Demo ↗
</a>
<a
  className="scene-link"
  href="https://github.com/Bhuvanesh0097/Baby-Forum"
  target="_blank"
  rel="noreferrer"
>
  GitHub ↗
</a></div></div></article>
          </div>
          <div className="text-projects">{projects.slice(2).map(project => <article className="text-project reveal" key={project.name}><span>{project.number}</span><h3>{project.name}</h3><p>{project.copy}</p><div className="project-details">
  <div>
    <span className="detail-label">Problem</span>
    <p>{project.problem}</p>
  </div>

  <div>
    <span className="detail-label">Solution</span>
    <p>{project.solution}</p>
  </div>

  <div>
    <span className="detail-label">Tech Stack</span>
    <p>{project.techStack.join(' • ')}</p>
  </div>

  <div>
    <span className="detail-label">My Contribution</span>
    <p>{project.contribution}</p>
  </div>

  <div>
    <span className="detail-label">Outcome</span>
    <p>{project.outcome}</p>
  </div>
</div>
  <div className="project-links">
  {project.github && (
    <a
      className="text-project-link"
      href={project.github}
      target="_blank"
      rel="noreferrer"
    >
      GitHub ↗
    </a>
  )}

  {project.liveDemo && (
    <a
      className="text-project-link"
      href={project.liveDemo}
      target="_blank"
      rel="noreferrer"
    >
      Live Demo ↗
    </a>
  )}
</div>

<i>...</i>
<i>↗</i>

</article>
)}

</div>
</section>
        <section className="section skills-section" id="skills">
          <div className="section-top"><span className="section-number">04</span><span className="eyebrow">Skills</span><span className="section-rule" /></div>
          <div className="skills-layout reveal"><div><h2>The toolkit<br /><em>keeps growing.</em></h2><p className="skills-note">No percentages. Just a working list of things I enjoy learning and using.</p></div><div className="skill-explorer"><div className="skill-tabs">{Object.keys(skills).map(category => <button className={activeSkill === category ? 'active' : ''} onClick={() => setActiveSkill(category)} key={category}>{category}<span>↗</span></button>)}</div><div className="skill-cloud">{skills[activeSkill].map((skill, index) => <span style={{ '--delay': `${index * 60}ms` }} key={skill}>{skill}</span>)}</div></div></div>
          <div className="achievement reveal"><div className="achievement-copy"><span className="eyebrow">Achievement / 2026</span><h3>2nd Prize — Techno Bot 2026</h3><p>Presented Nexora, an AI-powered exam preparation platform for university students.</p></div><button className="achievement-evidence" onClick={() => { setSelectedImage(proofImages[4]); setLightboxImages([proofImages[4]]); setLightboxOpen(true) }}><img src={proofImages[4].src} alt="Techno Bot 2026 second prize certificate" /><span>Open certificate ↗</span></button></div>
          <div className="beyond-code"><span className="eyebrow">A different kind of practice</span><h2>Beyond <em>code.</em></h2><div className="creative-list"><span>01 / Hip-Hop Dance</span><span>02 / Singing</span><span>03 / Choreography</span><span>04 / Short Films</span></div></div>
        </section>

        
        <section className="contact-section" id="contact"><div className="contact-inner"><div className="section-top"><span className="section-number">05</span><span className="eyebrow">Contact</span><span className="section-rule" /></div>
  
<p className="contact-kicker">
  Open to software development internships, projects and meaningful collaborations.
</p>

<h2>
  Let's create<br />
  <i>something.</i>
</h2><div className="contact-links"><a href="mailto:bhuvanesh1102006@gmail.com">Email <span>bhuvanesh1102006@gmail.com ↗</span></a><a href="https://linkedin.com/in/bhuvanesh1102006" target="_blank" rel="noreferrer">LinkedIn <span>linkedin.com/in/bhuvanesh1102006 ↗</span></a><a href="https://github.com/Bhuvanesh0097" target="_blank" rel="noreferrer">GitHub <span>github.com/Bhuvanesh0097 ↗</span></a></div><div className="contact-bottom"><span>Open to conversations</span><span>Based in India · Available remotely</span></div></div></section>
      </main>

      <footer><strong>Bhuvanesh S</strong><span>Built with curiosity, code &amp; creativity.</span><span>© 2026</span></footer>
      {lightboxOpen && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project image preview" onClick={() => setLightboxOpen(false)}><button onClick={() => setLightboxOpen(false)} aria-label="Close preview">×</button><div className="lightbox-content" onClick={event => event.stopPropagation()}><img src={selectedImage.src} alt={selectedImage.alt} /><div className="lightbox-thumbs">{lightboxImages.map(image => <button className={selectedImage.src === image.src ? 'active' : ''} key={image.src} onClick={() => setSelectedImage(image)}><img src={image.src} alt={image.alt} /></button>)}</div></div></div>}
    </div>
  )
}

export default App
