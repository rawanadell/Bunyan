import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Globe2,
  Layers3,
  Menu,
  MessageCircle,
  Monitor,
  MousePointer2,
  Network,
  PenTool,
  Play,
  Quote,
  Sparkles,
  Smartphone,
  X,
  Share2,
} from 'lucide-react';

const images = {
  dashboard: 'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  interface: 'https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mobile: 'https://images.pexels.com/photos/4405384/pexels-photo-4405384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  technology: 'https://images.pexels.com/photos/38246349/pexels-photo-38246349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

const navItems = ['Home', 'Services', 'Work', 'Industries', 'About'];

function Logo({ dark = false }) {
  return (
    <a className={`brand ${dark ? 'brand-dark' : ''}`} href="#home" aria-label="Bunyan home">
      <span className="brand-mark">
        <span />
        <span />
        <span />
      </span>
      <span className="brand-copy">
        <strong>Bunyan</strong>
        <small>بنيان</small>
      </span>
    </a>
  );
}

function Button({ children, light = false, outline = false, className = '' }) {
  return (
    <a
      className={`button ${light ? 'button-light' : ''} ${outline ? 'button-outline' : ''} ${className}`}
      href="#contact"
    >
      {children}
      <ArrowRight size={14} />
    </a>
  );
}

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

function SectionTitle({ eyebrow, children, light = false, action }) {
  return (
    <div className={`section-heading ${light ? 'section-heading-light' : ''}`}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{children}</h2>
      </div>
      {action}
    </div>
  );
}

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    text: 'Cross-platform mobile apps that deliver native performance and exceptional UX.',
  },
  {
    icon: Monitor,
    title: 'Web Applications',
    text: 'Modern, scalable web apps built with the latest frameworks and best practices.',
  },
  {
    icon: Sparkles,
    title: 'AI Solutions',
    text: 'Intelligent solutions that automate processes and unlock new opportunities.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    text: 'Secure, scalable and reliable infrastructure with CI/CD and automation.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    text: 'User-centered design that creates delightful and meaningful experiences.',
  },
  {
    icon: Layers3,
    title: 'Systems & ERP',
    text: 'Powerful systems that streamline operations and increase productivity.',
  },
];

const projects = [
  { title: 'Operations Dashboard', category: 'Web Application', image: images.dashboard },
  { title: 'Restaurant App', category: 'Mobile Application', image: images.mobile },
  { title: 'Hospital Management System', category: 'Web Application', image: images.interface },
  { title: 'ERP Solution', category: 'Enterprise System', image: images.technology },
];

const process = [
  ['01', 'Discover', 'We understand your business, goals and challenges.'],
  ['02', 'Plan', 'We define the roadmap, strategy and technical architecture.'],
  ['03', 'Design', 'We create user-centered designs that provide exceptional experiences.'],
  ['04', 'Develop', 'We build scalable, secure and high-performance solutions.'],
  ['05', 'Test', 'We test everything to ensure quality, security and performance.'],
  ['06', 'Launch & Support', 'We deploy, monitor and support your product growth.'],
];

const articles = [
  {
    category: 'AI',
    title: 'How AI is transforming business in 2024',
    date: 'May 20, 2024',
    time: '5 min read',
    image: images.technology,
  },
  {
    category: 'Development',
    title: 'Clean Architecture in Flutter Apps',
    date: 'May 18, 2024',
    time: '7 min read',
    image: images.interface,
  },
  {
    category: 'Business',
    title: 'Digital Transformation Strategy Guide',
    date: 'May 15, 2024',
    time: '6 min read',
    image: images.dashboard,
  },
];

function GeometricMark() {
  return (
    <div className="hero-art" aria-label="Abstract golden architectural Bunyan mark" role="img">
      <div className="art-grid" />
      <div className="art-diamond diamond-one" />
      <div className="art-diamond diamond-two" />
      <div className="golden-b">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="art-platform">
        <span />
        <span />
      </div>
      <div className="art-corner corner-a" />
      <div className="art-corner corner-b" />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="site-shell">
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
            <a href="#resources">
              Resources <ChevronDown size={11} />
            </a>
          </nav>
          <div className="nav-actions">
            <a className="language" href="#contact">
              <Globe2 size={13} /> العربية
            </a>
            <Button>Let's Build Together</Button>
          </div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {[...navItems, 'Resources'].map((item) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                onClick={() => setMenuOpen(false)}
              >
                {item}
                <ArrowUpRight size={15} />
              </a>
            ))}
            <a className="mobile-lang" href="#contact">
              العربية <Globe2 size={14} />
            </a>
          </div>
        )}
      </header>

      <main>
        <section className="hero section-dark" id="home">
          <div className="hero-lines" />
          <div className="hero-noise" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <Eyebrow>Built to last</Eyebrow>
              <h1>
                We Build Digital
                <br />
                Foundations That <em>Last.</em>
              </h1>
              <p>
                We help businesses turn ideas into scalable digital products with clean architecture,
                modern technology and exceptional user experiences.
              </p>
              <div className="hero-buttons">
                <Button>Start Your Project</Button>
                <Button outline>
                  <CalendarDays size={14} /> Book a Meeting
                </Button>
                <a className="text-link" href="#work">
                  View Our Work{' '}
                  <span className="circle-arrow">
                    <ArrowRight size={12} />
                  </span>
                </a>
              </div>
              <Stats />
            </div>
            <div className="hero-visual">
              <GeometricMark />
              <div className="scroll-prompt">
                <span>
                  Scroll
                  <br />
                  Down
                </span>
                <span className="scroll-circle">
                  <ArrowDown size={13} />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="trusted section-dark">
          <div className="container trusted-inner">
            <div className="trusted-label">
              Trusted by innovative
              <br />
              companies
            </div>
            <div className="logo-cloud">
              <span>aramco</span>
              <span>
                ALTURKI
                <small>HOLDING</small>
              </span>
              <span>
                SABB <b>سَاب</b>
              </span>
              <span>
                alinma <small>bank</small>
              </span>
              <span>
                TASNEE
                <small>التصنيع</small>
              </span>
              <span>elm</span>
              <span>And 40+ more</span>
            </div>
          </div>
        </section>

        <section className="services section-light" id="services">
          <div className="container">
            <SectionTitle eyebrow="What we build">
              Digital Solutions. <strong>Built for Impact.</strong>
            </SectionTitle>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, text }) => (
                <article className="service-card" key={title}>
                  <Icon size={22} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#contact">
                    Learn More <ArrowRight size={12} />
                  </a>
                </article>
              ))}
            </div>
            <div className="center-action">
              <Button light>View All Services</Button>
            </div>
          </div>
        </section>

        <section className="about section-dark" id="about">
          <div className="container about-grid">
            <div className="about-copy">
              <Eyebrow>About Bunyan</Eyebrow>
              <h2>
                We are architects
                <br />
                of digital <em>success.</em>
              </h2>
              <p className="arabic" lang="ar">
                نحن نبني حلولاً رقمية متطورة تساعد الشركات على النمو والكفاءة والاستدامة في عالم
                يتغير بسرعة.
              </p>
              <ul className="check-list">
                <li>
                  <span>
                    <Check size={11} />
                  </span>
                  We believe in long-term partnerships
                </li>
                <li>
                  <span>
                    <Check size={11} />
                  </span>
                  We build with quality and precision
                </li>
                <li>
                  <span>
                    <Check size={11} />
                  </span>
                  We deliver measurable results
                </li>
              </ul>
              <Button light>More About Us</Button>
            </div>
            <div className="about-visual">
              <div className="city-art">
                <div className="city-glow" />
                <div className="skyline">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="city-lines" />
                <button className="play-button" aria-label="Play Bunyan story">
                  <Play size={15} fill="currentColor" />
                </button>
              </div>
              <div className="about-stats">
                <Stat value="150+" label="Projects Delivered" />
                <Stat value="15+" label="Industries Served" />
                <Stat value="99%" label="Client Satisfaction" />
                <Stat value="5+" label="Years Experience" />
              </div>
            </div>
          </div>
        </section>

        <section className="work section-dark" id="work">
          <div className="container">
            <SectionTitle
              eyebrow="Featured Work"
              light
              action={
                <a className="view-all" href="#contact">
                  View All Projects <ArrowRight size={13} />
                </a>
              }
            >
              Real Projects. <strong>Real Impact.</strong>
            </SectionTitle>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="image-wash" />
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                    <a href="#contact">
                      View Case Study <ArrowRight size={12} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="carousel-buttons">
              <button aria-label="Previous project">
                <ChevronLeft size={16} />
              </button>
              <button aria-label="Next project">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>

        <section className="process section-dark">
          <div className="container">
            <SectionTitle eyebrow="Our Process" light>
              A proven process for
              <br />
              <strong>building great products.</strong>
            </SectionTitle>
            <div className="process-track">
              {process.map(([number, title, text]) => (
                <article className="process-step" key={number}>
                  <div className="step-icon">
                    {number === '01' ? (
                      <MousePointer2 size={15} />
                    ) : number === '02' ? (
                      <PenTool size={15} />
                    ) : number === '03' ? (
                      <Network size={15} />
                    ) : number === '04' ? (
                      <Code2 size={15} />
                    ) : number === '05' ? (
                      <Check size={15} />
                    ) : (
                      <ArrowUpRight size={15} />
                    )}
                  </div>
                  <small>{number}</small>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="center-action">
              <Button>Start Your Project</Button>
            </div>
          </div>
        </section>

        <section className="insights section-light" id="resources">
          <div className="container insights-grid">
            <div className="articles">
              <SectionTitle
                eyebrow="Insights & Resources"
                action={
                  <a className="view-all dark-link" href="#contact">
                    View All Articles <ArrowRight size={13} />
                  </a>
                }
              >
                Knowledge to help you <strong>build better.</strong>
              </SectionTitle>
              <div className="article-grid">
                {articles.map((article) => (
                  <article className="article-card" key={article.title}>
                    <img src={article.image} alt={article.title} loading="lazy" />
                    <div className="article-content">
                      <span>{article.category}</span>
                      <h3>{article.title}</h3>
                      <p>
                        {article.date} <i /> {article.time}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="cta" id="contact">
              <div className="cta-copy">
                <Eyebrow>Let's build together</Eyebrow>
                <h2>
                  Have an idea?
                  <br />
                  Let's build it <em>together.</em>
                </h2>
                <p>
                  Whether you have a clear plan or just an idea, we're here to help you turn it into a
                  successful digital product.
                </p>
                <Button>Book a Free Consultation</Button>
                <a className="whatsapp-link" href="#contact">
                  <MessageCircle size={15} /> Chat with us on WhatsApp
                </a>
              </div>
              <div className="cta-cubes">
                <div className="cube cube-gold" />
                <div className="cube cube-dark cube-top" />
                <div className="cube cube-dark cube-left" />
                <div className="cube cube-dark cube-right" />
                <div className="cube cube-gold cube-small" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-dark">
        <div className="container footer-top">
          <div className="footer-brand">
            <Logo />
            <p>
              We build digital
              <br />
              foundations that last.
            </p>
            <div className="socials">
              <a href="#contact" aria-label="LinkedIn">
                <Share2 size={15} />
              </a>
              <a href="#contact" aria-label="Instagram">
                <CameraIcon />
              </a>
              <a href="#contact" aria-label="X">
                <X size={15} />
              </a>
              <a href="#contact" aria-label="WhatsApp">
                <MessageCircle size={15} />
              </a>
            </div>
          </div>
          <FooterColumn
            title="Company"
            links={['About Us', 'Our Team', 'Careers', 'Case Studies', 'Contact']}
          />
          <FooterColumn
            title="Services"
            links={[
              'Mobile Development',
              'Web Development',
              'AI Solutions',
              'Cloud & DevOps',
              'UI/UX Design',
              'Systems & ERP',
            ]}
          />
          <FooterColumn
            title="Resources"
            links={['Blog', 'Guides', 'Templates', 'White Papers', 'FAQs']}
          />
          <div className="footer-contact">
            <h4>Contact</h4>
            <a href="mailto:hello@bunyan.sa">hello@bunyan.sa</a>
            <a href="tel:+966501234567">+966 50 123 4567</a>
            <p>Riyadh, Saudi Arabia</p>
            <Button outline>Book a Meeting</Button>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Bunyan. All rights reserved.</span>
          <div>
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms of Service</a>
            <a href="#contact">Sitemap</a>
          </div>
        </div>
      </footer>
      {showTop && (
        <a href="#home" className="back-top" aria-label="Back to top">
          <ArrowUp size={15} />
        </a>
      )}
    </div>
  );
}

function Stats() {
  return (
    <div className="hero-stats">
      <Stat value="150+" label="Projects Delivered" icon={<BriefcaseBusiness size={15} />} />
      <Stat value="50+" label="Happy Clients" icon={<Quote size={15} />} />
      <Stat value="99%" label="Client Satisfaction" icon={<Bell size={15} />} />
      <Stat value="5+" label="Years Experience" icon={<BarChart3 size={15} />} />
    </div>
  );
}

function Stat({ value, label, icon }) {
  return (
    <div className="stat">
      {icon && <span className="stat-icon">{icon}</span>}
      <div>
        <strong>{value}</strong>
        <small>{label}</small>
      </div>
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      {links.map((link) => (
        <a href="#contact" key={link}>
          {link}
        </a>
      ))}
    </div>
  );
}

function CameraIcon() {
  return (
    <span className="camera-icon">
      <span />
    </span>
  );
}

export default App;
