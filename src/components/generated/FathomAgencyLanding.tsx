import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Plus,
  Minus,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  Globe,
  Coins,
  Landmark,
  Wrench,
  Hammer,
  Factory,
  ShoppingBag,
  Activity,
  Cpu,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import hrConnect4 from "@/assets/hr-connect4.jpg";

/* ─────────────────────────────────────────────
   CONSTANTS & DATA
───────────────────────────────────────────── */

const FADE_UP_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
} as const;

const STAGGER_CONTAINER = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Industries", href: "#industries" },
  { label: "Leadership", href: "#leadership" },
  { label: "Connect", href: "#connect" }
];

const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Connect", href: "#connect" }
];

const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "why", label: "Why Us" },
  { id: "industries", label: "Industries" },
  { id: "leadership", label: "Leadership" },
  { id: "connect", label: "Connect" }
];

const ABOUT_CARD_ITEMS = [
  {
    id: "ab-01",
    icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
    text: "100% Black Woman-Owned Human Capital Consultancy"
  },
  {
    id: "ab-02",
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
    text: "Specialist expertise in Human Capital Advisory, Leadership Development and Talent Solutions"
  },
  {
    id: "ab-03",
    icon: (
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </>
    ),
    text: "Extensive experience delivering customised learning and organisational development programmes"
  },
  {
    id: "ab-04",
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </>
    ),
    text: "Proven capability in executive search, talent acquisition and workforce solutions"
  },
  {
    id: "ab-05",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    text: "Trusted partner to organisations across the public, private and development sectors"
  },
  {
    id: "ab-06",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
    text: "Expertise in designing and delivering premium executive conferences, leadership summits, learning academies and customised corporate experiences"
  },
  {
    id: "ab-07",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    text: "Multidisciplinary team of experienced consultants, facilitators, executive coaches and talent specialists"
  },
  {
    id: "ab-08",
    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
    text: "Bespoke, commercially driven solutions aligned to each client's strategic objectives"
  },
  {
    id: "ab-09",
    icon: (
      <>
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19 12 12 19 5 12" />
      </>
    ),
    text: "Committed to developing leaders, connecting exceptional talent and enabling sustainable organisational growth"
  }
];

const WHY_BULLETS = [
  "Strategic Human Capital Expertise",
  "Executive-Level Advisory",
  "Tailor-Made Solutions",
  "Industry-Leading Facilitators",
  "High-Impact Learning Experiences",
  "Premium Corporate Events",
  "Proven Talent Solutions",
  "Leadership Excellence",
  "Organisational Transformation",
  "Sustainable Business Growth"
];

const INDUSTRIES_DATA = [
  { name: "Financial Services", icon: Coins },
  { name: "Government & Public Sector", icon: Landmark },
  { name: "Mining & Resources", icon: Wrench },
  { name: "Infrastructure", icon: Hammer },
  { name: "Manufacturing", icon: Factory },
  { name: "Retail & FMCG", icon: ShoppingBag },
  { name: "Healthcare", icon: Activity },
  { name: "Education", icon: GraduationCap },
  { name: "ICT & Telecommunications", icon: Cpu },
  { name: "Professional Services", icon: Briefcase },
  { name: "Energy", icon: Zap },
  { name: "Development Sector", icon: Globe }
];

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  subs: string[];
  closingLine?: string;
}

const ACCORDION_SERVICES: ServiceItem[] = [
  {
    id: "svc-01",
    title: "Human Capital Advisory",
    description: "We help organisations design and implement people strategies that enhance organisational performance, improve workforce capability and support long-term business success.",
    subs: ["Human Capital Strategy", "Organisational Development", "Workforce Planning", "Organisational Design", "Change Management", "Performance Management", "Culture Transformation", "Employee Experience", "HR Advisory", "People Analytics"]
  },
  {
    id: "svc-02",
    title: "Talent Acquisition & Executive Search",
    description: "Exceptional organisations are built by exceptional people. HR Connect identifies, attracts and places high-calibre professionals and executive leaders who deliver measurable business impact.",
    subs: ["Executive Search", "Executive Recruitment", "Professional Recruitment", "Specialist Talent Acquisition", "Talent Mapping", "Succession Planning", "Leadership Assessments", "Recruitment Process Outsourcing (RPO)", "Employer Branding"]
  },
  {
    id: "svc-03",
    title: "Leadership Development",
    description: "Leadership is the catalyst for organisational growth. We design and deliver transformative leadership programmes that develop confident, purpose-driven and commercially minded leaders capable of navigating complexity and leading organisational transformation.",
    subs: ["Executive Leadership Development", "Emerging Leaders Programmes", "Women in Leadership", "Executive Coaching", "Management Development", "High-Potential Talent Development", "Board & Governance Development", "Leadership Masterclasses", "Team Leadership Programmes"]
  },
  {
    id: "svc-04",
    title: "Learning & Organisational Capability",
    description: "We create customised learning experiences that strengthen capability, improve performance and prepare organisations for the future of work.",
    subs: ["Corporate Training", "Leadership Academies", "Skills Development", "Workplace Readiness", "Future Skills", "Digital Capability", "Customer Experience", "Communication & Influence", "Sales & Commercial Excellence"]
  },
  {
    id: "svc-05",
    title: "Women in Leadership",
    description: "We champion inclusive leadership by designing programmes that accelerate women's advancement into leadership, executive and decision-making roles.",
    subs: ["Women's Leadership Conferences", "Executive Development Programmes", "Leadership Forums", "Mentorship Initiatives", "Career Advancement", "Executive Presence", "Personal Leadership Branding", "Strategic Networking Experiences"]
  },
  {
    id: "svc-06",
    title: "Customised Corporate Events & Executive Experiences",
    description: "We curate world-class learning experiences that inspire innovation, strengthen leadership capability and facilitate meaningful collaboration.",
    subs: ["Leadership Conferences", "Executive Summits", "HR Conferences", "Strategic Planning Retreats", "Executive Roundtables", "Women Leadership Forums", "Team Building Experiences", "Awards & Recognition Events", "Learning Conferences", "Bespoke Corporate Experiences"],
    closingLine: "Every experience is strategically designed to align with organisational objectives and deliver measurable business outcomes."
  }
];

const PERF_STATS = [
  { value: "Africa-wide", label: "Geographic Reach" },
  { value: "6", label: "Core Service Lines" },
  { value: "12", label: "Sectors Served" }
];

const SERVICE_OPTIONS = [
  "Human Capital Advisory",
  "Talent Acquisition & Executive Search",
  "Leadership Development",
  "Learning & Organisational Capability",
  "Women in Leadership",
  "Customised Corporate Events & Executive Experiences",
  "Other"
];

/* ─────────────────────────────────────────────
   SMOOTH SCROLL HOOK
───────────────────────────────────────────── */

function useSmoothScroll() {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
}

/* ─────────────────────────────────────────────
   ACTIVE SECTION HOOK
───────────────────────────────────────────── */

function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = React.useState<string>(sectionIds[0]);
  React.useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(id);
        });
      }, {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0
      });
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(obs => obs.disconnect());
  }, [sectionIds]);
  return activeId;
}

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */

const Navbar = ({
  activeSection
}: {
  activeSection: string;
}) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-5 md:px-14 lg:px-20 py-5 md:py-6",
      isScrolled ? "bg-fathom-white/95 backdrop-blur-md py-4 shadow-sm border-b border-fathom-ink/5" : "bg-gradient-to-b from-black/40 to-transparent"
    )}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className={cn("font-serif text-xl md:text-2xl tracking-tighter font-bold transition-colors duration-300", isScrolled ? "text-fathom-ink" : "text-white")}>
            HR <span className="italic text-fathom-terracotta">Connect</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {NAV_ITEMS.map(item => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "text-[10px] uppercase tracking-[0.25em] transition-all duration-300 font-semibold px-4 py-2 rounded-full",
                  isActive
                    ? (isScrolled ? "bg-fathom-terracotta/25 text-fathom-terracotta" : "bg-fathom-terracotta text-white")
                    : (isScrolled
                      ? "text-fathom-graphite hover:text-fathom-terracotta hover:bg-fathom-terracotta/25"
                      : "text-white/85 hover:text-white hover:bg-fathom-terracotta"
                    )
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a href="#connect" className="hidden sm:flex bg-fathom-terracotta text-fathom-white px-5 md:px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-fathom-ink transition-colors duration-300">
            Partner with us
          </a>
          <button onClick={() => setMobileOpen(v => !v)} aria-label={mobileOpen ? "Close menu" : "Open menu"} className={cn("md:hidden flex items-center justify-center w-10 h-10 rounded-full border transition-colors duration-300", isScrolled ? "border-fathom-ink/20 text-fathom-ink hover:border-fathom-terracotta hover:text-fathom-terracotta" : "border-white/20 text-white hover:border-white hover:text-white")}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }} className="md:hidden bg-fathom-white border-t border-fathom-ink/8 shadow-xl">
            <div className="flex flex-col px-5 py-6 gap-1">
              {NAV_ITEMS.map(item => (
                <a key={item.label} href={item.href} onClick={handleNavClick} className={cn("text-[11px] uppercase tracking-[0.28em] font-bold py-4 px-3 rounded-lg transition-colors duration-200", activeSection === item.href.replace("#", "") ? "text-fathom-terracotta bg-fathom-terracotta/5" : "text-fathom-graphite hover:text-fathom-terracotta hover:bg-fathom-terracotta/5")}>
                  {item.label}
                </a>
              ))}
              <a href="#connect" onClick={handleNavClick} className="mt-4 bg-fathom-terracotta text-white rounded-full py-3.5 text-center text-[10px] uppercase tracking-widest font-bold hover:bg-fathom-ink transition-colors duration-300">
                Partner with us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ─────────────────────────────────────────────
   VERTICAL PROGRESS INDICATOR — hidden on mobile
───────────────────────────────────────────── */

const ProgressDots = ({
  activeSection
}: {
  activeSection: string;
}) => {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3 hidden lg:flex" aria-label="Page sections navigation">
    {NAV_SECTIONS.map(section => {
      const isActive = activeSection === section.id;
      return <div key={section.id} className="relative flex items-center justify-end group" onMouseEnter={() => setHoveredId(section.id)} onMouseLeave={() => setHoveredId(null)}>
        <AnimatePresence>
          {hoveredId === section.id && <motion.span initial={{
            opacity: 0,
            x: 6
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: 6
          }} transition={{
            duration: 0.18
          }} className="absolute right-6 bg-fathom-ink text-fathom-white text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded whitespace-nowrap pointer-events-none">
            {section.label}
          </motion.span>}
        </AnimatePresence>
        <button onClick={() => scrollTo(section.id)} aria-label={`Navigate to ${section.label}`} className={cn("rounded-full transition-all duration-300 focus:outline-none", isActive ? "w-3 h-3 bg-fathom-terracotta shadow-md" : "w-2 h-2 bg-fathom-ink/25 hover:bg-fathom-ink/50")} />
      </div>;
    })}
  </div>;
};

/* ─────────────────────────────────────────────
   BACK TO TOP BUTTON
───────────────────────────────────────────── */

const BackToTop = () => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    const el = document.getElementById("home");
    if (el) el.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <AnimatePresence>
    {visible && <motion.button initial={{
      opacity: 0,
      y: 16
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: 16
    }} transition={{
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }} onClick={scrollToTop} aria-label="Back to top" className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-50 w-9 h-9 md:w-12 md:h-12 rounded-full bg-fathom-terracotta text-white flex items-center justify-center shadow-lg hover:bg-fathom-ink transition-colors duration-300 focus:outline-none">
      <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
    </motion.button>}
  </AnimatePresence>;
};

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */

const Hero = () => {
  const [mousePos, setMousePos] = React.useState({
    x: 0,
    y: 0
  });
  const containerRef = React.useRef<HTMLElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setMousePos({
      x: (e.clientX - cx) / rect.width,
      y: (e.clientY - cy) / rect.height
    });
  };
  const parallaxX = -mousePos.x * 18;
  const parallaxY = -mousePos.y * 18;
  return <section id="home" ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden">
    {/* Mobile: photo on top */}
    <div className="w-full h-[280px] lg:hidden relative overflow-hidden order-first">
      <img src={hrConnect4} alt="HR Connect, Executive leadership in the boardroom" className="w-full h-full object-cover brightness-75" />
      <div className="absolute inset-0 bg-gradient-to-b from-fathom-ink/30 to-fathom-ink/60" />
      <div className="absolute bottom-5 left-5 bg-fathom-terracotta text-white px-4 py-3 shadow-2xl z-10">
        <p className="text-[9px] uppercase tracking-widest font-bold mb-0.5">Company Profile</p>
        <p className="text-lg font-serif leading-none">HR Connect</p>
      </div>
    </div>

    {/* Text panel */}
    <div className="relative z-10 w-full lg:w-1/2 bg-fathom-ink flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-16 pt-10 lg:pt-28 pb-14 lg:pb-20">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-fathom-terracotta hidden lg:block" />
      <motion.div className="flex flex-col items-start" initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={STAGGER_CONTAINER}>
        <motion.div variants={FADE_UP_VARIANTS} className="inline-flex items-center gap-3 mb-7 md:mb-10">
          <div className="w-6 h-px bg-fathom-terracotta" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-fathom-terracotta">
            Company Profile
          </span>
        </motion.div>

        <motion.h1 variants={FADE_UP_VARIANTS} className="text-[44px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] leading-[0.88] font-serif text-white tracking-[-0.04em] mb-7 md:mb-10">
          Developing leaders.
          <span className="block mt-2">
            Connecting <span className="italic text-fathom-terracotta">talent</span>.
          </span>
        </motion.h1>

        <motion.p variants={FADE_UP_VARIANTS} className="text-sm md:text-base text-white/55 max-w-md mb-8 md:mb-10 leading-[1.75] font-light">
          HR Connect partners with organisations to unlock their greatest asset: their people.
          We deliver integrated human capital solutions that strengthen leadership, connect
          exceptional talent and enable sustainable growth.
        </motion.p>

        <motion.div variants={FADE_UP_VARIANTS} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 mb-12 md:mb-16 w-full sm:w-auto">
          <a href="#connect" className="bg-fathom-terracotta text-white px-8 py-4 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-fathom-ink transition-colors duration-300 flex items-center justify-center gap-2 group">
            Partner with us
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="text-white/60 px-8 py-4 text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 group border border-white/20 rounded-full hover:border-fathom-terracotta hover:text-fathom-terracotta transition-colors duration-300">
            Explore services
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        <motion.div variants={FADE_UP_VARIANTS} className="pt-8 md:pt-10 border-t border-fathom-terracotta/30 w-full">
          <p className="text-[9px] uppercase tracking-[0.35em] font-bold text-fathom-terracotta mb-3">
            Our Purpose
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-serif text-white/80 leading-snug">
            To develop exceptional leaders, connect world-class talent and enable organisations to achieve sustainable growth through people.
          </p>
        </motion.div>
      </motion.div>
    </div>

    {/* Desktop: photo right */}
    <div className="hidden lg:block w-full lg:w-1/2 h-auto relative overflow-hidden">
      <div className="absolute inset-[-30px] w-[calc(100%+60px)] h-[calc(100%+60px)]" style={{
        transform: `translate(${parallaxX}px, ${parallaxY}px)`,
        transition: "transform 0.15s ease-out"
      }}>
        <img src={hrConnect4} alt="HR Connect, Executive leadership in the boardroom" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-fathom-ink/40 to-transparent" />
      <div className="absolute bottom-8 left-8 bg-fathom-terracotta text-white px-6 py-4 shadow-2xl z-10">
        <p className="text-[9px] uppercase tracking-widest font-bold mb-0.5">Company Profile</p>
        <p className="text-xl font-serif leading-none">HR Connect</p>
      </div>
    </div>
  </section>;
};

/* ─────────────────────────────────────────────
   SERVICES ACCORDION
───────────────────────────────────────────── */

const ServicesAccordion = () => {
  const [openId, setOpenId] = React.useState<string | null>(null);
  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);
  return <section id="services" className="relative bg-fathom-ink text-white py-16 md:py-24 lg:py-32 px-5 sm:px-8 md:px-14 lg:px-20 overflow-hidden">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-[10%] -left-[5%] w-[50%] h-[50%] bg-[#B5654A]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[5%] -right-[5%] w-[40%] h-[40%] bg-[#B5654A]/8 rounded-full blur-[100px]" />
    </div>

    <div className="max-w-[1440px] mx-auto relative z-10">
      <div className="flex items-center justify-between border-b border-fathom-terracotta/30 pb-6 mb-10 md:mb-16">
        <div className="flex items-center gap-3">
          <div className="w-5 h-px bg-fathom-terracotta" />
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-fathom-terracotta">
            Integrated Human Capital Solutions
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-widest font-bold text-white/30 hidden sm:block">
          6 Service Lines
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mb-10 md:mb-16">
        <motion.div className="lg:col-span-5" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={STAGGER_CONTAINER}>
          <motion.h2 variants={FADE_UP_VARIANTS} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[0.88] tracking-[-0.04em] mb-6 md:mb-8">
            Building <span className="italic text-fathom-terracotta">People</span> Capability.
          </motion.h2>
          <motion.p variants={FADE_UP_VARIANTS} className="text-white/50 text-sm md:text-base max-w-sm mb-10 md:mb-12 leading-[1.75] font-light">
            Beyond traditional HR services, we provide a strategic partnership that aligns
            leadership, talent and organisational capability with your business strategy for
            lasting impact.
          </motion.p>
          <motion.div variants={FADE_UP_VARIANTS} className="flex items-center gap-6">
            <a href="#connect" className="bg-fathom-terracotta text-white px-7 py-3.5 md:px-8 md:py-4 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-fathom-ink transition-colors duration-300">
              Partner with us
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="lg:col-span-7 flex flex-col justify-end" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }} viewport={{
          once: true
        }}>
          <div className="flex flex-wrap items-center gap-6 md:gap-8 py-8 md:py-10 border-t border-b border-fathom-terracotta/20">
            {PERF_STATS.map((stat, i) => <div key={stat.label} className="flex items-center gap-3 md:gap-4">
              <span className="text-xl md:text-2xl font-serif text-fathom-terracotta">
                {stat.value}
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-bold">
                {stat.label}
              </span>
              {i < PERF_STATS.length - 1 && <div className="w-px h-6 bg-fathom-terracotta/20 hidden md:block ml-2" />}
            </div>)}
          </div>
        </motion.div>
      </div>

      <motion.div className="border-t border-white/10" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
        {ACCORDION_SERVICES.map((svc, idx) => {
          const isOpen = openId === svc.id;
          return <div key={svc.id} className={cn("border-b border-white/10 transition-colors duration-300", isOpen ? "bg-white/[0.03]" : "")}>
            <button onClick={() => toggle(svc.id)} className="w-full flex items-center justify-between min-h-[56px] py-5 md:py-7 lg:py-8 group text-left gap-4 md:gap-6" aria-expanded={isOpen}>
              <div className="flex items-center gap-4 md:gap-6 lg:gap-10 min-w-0">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-fathom-terracotta shrink-0 hidden md:block">
                  0{idx + 1}
                </span>
                <h3 className={cn("text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif tracking-tight transition-colors duration-300", isOpen ? "italic text-fathom-terracotta" : "text-white group-hover:text-fathom-terracotta/80")}>
                  {svc.title}
                </h3>
              </div>
              <div className={cn("w-9 h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300", isOpen ? "bg-fathom-terracotta border-fathom-terracotta text-white" : "border-white/20 text-white/50 group-hover:border-fathom-terracotta group-hover:text-fathom-terracotta")}>
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && <motion.div key="content" initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: "auto",
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1]
              }} className="overflow-hidden">
                <div className="pb-8 md:pb-10 pl-0 md:pl-20 lg:pl-28 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16">
                  <div className="lg:w-80 shrink-0">
                    <div className="w-8 h-px bg-fathom-terracotta mb-4" />
                    <p className="text-white/60 text-sm leading-relaxed font-light">
                      {svc.description}
                    </p>
                    {svc.closingLine && <p className="text-fathom-terracotta/80 text-xs leading-relaxed font-light mt-4 italic">
                      {svc.closingLine}
                    </p>}
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-2 md:gap-x-4">
                    {svc.subs.map(sub => <span key={sub} className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 border border-white/10 rounded-full px-3 py-1.5 hover:border-fathom-terracotta/50 hover:text-fathom-terracotta transition-colors">
                      {sub}
                    </span>)}
                  </div>
                </div>
              </motion.div>}
            </AnimatePresence>
          </div>;
        })}
      </motion.div>
    </div>
  </section>;
};

/* ─────────────────────────────────────────────
   ABOUT SECTION
───────────────────────────────────────────── */

const AboutSection = () => {
  return <section id="about" className="w-full bg-[#1B3A2D] py-16 md:py-20 lg:py-24 px-5 sm:px-8 md:px-14 lg:px-16 flex flex-col items-center">
    <div className="w-full max-w-[1200px] flex flex-col">
      <div className="w-full mb-10 md:mb-12">
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-5 h-px bg-[#B5654A]" />
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#B5654A]">
              About HR Connect
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 mb-16 md:mb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={STAGGER_CONTAINER}>
          <motion.h2 variants={FADE_UP_VARIANTS} className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight tracking-tight text-white mb-8 md:mb-10">
            A focused team with lasting organisational impact.
          </motion.h2>

          <motion.div variants={FADE_UP_VARIANTS} className="space-y-5 text-white/70 text-sm md:text-base leading-relaxed font-light">
            <p>
              HR Connect is a strategic human capital, leadership development and talent solutions firm that helps organisations unlock their greatest asset: their people. We partner with businesses, government and institutions to develop exceptional leaders, connect organisations with outstanding talent and enable sustainable growth through innovative, customised human capital solutions.
            </p>
            <p>
              In an increasingly competitive and rapidly evolving world of work, organisations require more than traditional HR services. They need a strategic partner capable of aligning leadership, talent and organisational capability with business strategy. HR Connect delivers integrated solutions that strengthen workforce performance, accelerate leadership capability and create lasting organisational value.
            </p>
          </motion.div>
        </motion.div>

        <motion.div initial={{
          opacity: 0,
          y: 24
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {ABOUT_CARD_ITEMS.map(item => <div key={item.id} className="flex flex-col gap-3 rounded-lg px-4 py-4 border-l-2 border-[#B5654A] bg-[#F5F0E8]/8 hover:bg-[#F5F0E8]/12 transition-colors duration-200" style={{
              borderLeftColor: "#B5654A"
            }}>
              <span className="text-[#B5654A] shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </svg>
              </span>
              <span className="text-white/65 text-xs leading-relaxed font-light">{item.text}</span>
            </div>)}
          </div>
        </motion.div>
      </div>

      {/* Purpose / Vision / Mission */}
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.9
      }} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 border-t border-white/10 pt-12 md:pt-16">
        <div className="flex flex-col gap-3">
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-fathom-terracotta">
            Our Purpose
          </span>
          <p className="text-white/80 text-sm md:text-base font-serif italic leading-snug">
            To develop exceptional leaders, connect world-class talent and enable organisations to achieve sustainable growth through people.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-fathom-terracotta">
            Our Vision
          </span>
          <p className="text-white/80 text-sm md:text-base font-serif italic leading-snug">
            To be Africa's trusted partner in leadership development, talent solutions and human capital excellence.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-fathom-terracotta">
            Our Mission
          </span>
          <p className="text-white/80 text-sm md:text-base font-serif italic leading-snug">
            To empower organisations with strategic human capital solutions that strengthen leadership, unlock talent, build high-performing teams and accelerate business growth.
          </p>
        </div>
      </motion.div>
    </div>
  </section>;
};

/* ─────────────────────────────────────────────
   WHY HR CONNECT
───────────────────────────────────────────── */

const WhyChooseUs = () => {
  return <section id="why" className="bg-[#2C1810] py-16 md:py-24 lg:py-32 px-5 sm:px-8 md:px-14 lg:px-20 text-white">
    <div className="max-w-[1440px] mx-auto">
      <div className="flex items-center justify-between border-b border-fathom-terracotta/30 pb-6 mb-12 md:mb-16 lg:mb-20">
        <div className="flex items-center gap-3">
          <div className="w-5 h-px bg-fathom-terracotta" />
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-fathom-terracotta">
            Our Edge
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-24">
        <div className="lg:col-span-5">
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-none tracking-[-0.04em] text-white mb-8 md:mb-10" initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 1
          }} viewport={{
            once: true
          }}>
            Why choose us
          </motion.h2>

          <motion.p className="text-white/55 text-sm md:text-base leading-relaxed font-light max-w-sm mb-10 md:mb-12" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
            Our clients choose HR Connect because we combine strategic thinking, commercial insight and execution excellence to create measurable organisational impact.
          </motion.p>

          <motion.div className="relative aspect-[16/10] lg:aspect-auto lg:h-[420px] rounded-2xl overflow-hidden" initial={{
            opacity: 0,
            scale: 0.98
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 1.2
          }} viewport={{
            once: true
          }}>
            <img src="/hr-connect6.jpg" alt="HR Connect, people-centred leadership and organisational excellence" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-[#2C1810]/20 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-1 bg-fathom-terracotta" />
          </motion.div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.blockquote className="text-xl sm:text-2xl md:text-3xl font-serif text-white/90 leading-snug mb-10 md:mb-12 italic border-l-2 border-fathom-terracotta pl-6" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 1
          }} viewport={{
            once: true
          }}>
            "We don't simply fill roles or deliver training; we build leadership capability, strengthen organisational performance and create future-ready workforces that drive long-term business success."
          </motion.blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_BULLETS.map((deliv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl flex flex-col justify-between min-h-[140px] relative overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-fathom-terracotta/25 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-fathom-terracotta hover:to-[#a04f35] hover:text-white transition-all duration-500 group cursor-default"
              >
                <span className="font-serif italic text-lg text-fathom-terracotta group-hover:text-white/80 transition-colors duration-300">
                  Why {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[16px] font-bold text-white group-hover:text-white transition-colors duration-300 mt-4 relative z-10 leading-snug">{deliv}</span>
                <span className="font-serif font-black text-[90px] leading-none text-white/[0.03] group-hover:text-white/[0.08] absolute right-2 bottom-[-15px] pointer-events-none transition-all duration-500 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>;
};

/* ─────────────────────────────────────────────
   INDUSTRIES WE SERVE
───────────────────────────────────────────── */

const IndustriesSection = () => {
  return <section id="industries" className="w-full bg-[#EDE8DC] text-fathom-ink py-16 md:py-20 lg:py-28 px-5 sm:px-8 md:px-14 lg:px-20 overflow-hidden">
    <div className="max-w-[1440px] mx-auto">
      <div className="flex items-center justify-between border-b border-fathom-ink/15 pb-6 mb-12 md:mb-16">
        <div className="flex items-center gap-3">
          <div className="w-5 h-px bg-fathom-terracotta" />
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-fathom-terracotta">
            Industries We Serve
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-widest font-bold text-fathom-graphite/50 hidden sm:block">
          12 Sectors
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-center mb-16">
        <motion.div className="lg:col-span-5" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={STAGGER_CONTAINER}>
          <motion.h2 variants={FADE_UP_VARIANTS} className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight tracking-tight text-fathom-ink mb-6 md:mb-8">
            Serving organisations across Africa and beyond.
          </motion.h2>
          <motion.p variants={FADE_UP_VARIANTS} className="text-fathom-graphite text-sm md:text-base leading-relaxed font-light max-w-md">
            We bring deep sector expertise and an understanding of the unique people challenges that organisations face across diverse industries.
          </motion.p>
        </motion.div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((ind, index) => {
              const IconComponent = ind.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="p-6 bg-white/75 backdrop-blur-sm rounded-3xl border border-white/60 flex flex-col justify-between h-44 relative overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-fathom-terracotta/20 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-fathom-ink hover:to-[#2c2926] hover:text-white transition-all duration-500 group cursor-default"
                >
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-fathom-terracotta/5 rounded-full blur-xl group-hover:bg-fathom-terracotta/20 transition-all duration-500" />

                  <div className="w-12 h-12 rounded-2xl bg-fathom-sand/60 group-hover:bg-fathom-terracotta flex items-center justify-center shrink-0 text-fathom-terracotta group-hover:text-white transition-all duration-500 shadow-inner">
                    <IconComponent size={22} />
                  </div>

                  <div className="flex flex-col gap-1 mt-auto">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-fathom-graphite group-hover:text-white/50 transition-colors duration-300">
                      Sector
                    </span>
                    <span className="text-[14px] font-bold tracking-tight text-fathom-ink group-hover:text-white transition-colors duration-300">
                      {ind.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>;
};

/* ─────────────────────────────────────────────
   VALUE PROPOSITION
───────────────────────────────────────────── */

const ValueProposition = () => {
  return <section className="bg-fathom-sand pb-16 md:pb-24 lg:pb-32 px-5 sm:px-8 md:px-14 lg:px-20 text-fathom-ink">
    <div className="max-w-[1440px] mx-auto">
      <motion.div className="w-full h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden mb-16 md:mb-24 lg:mb-32 relative" initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1.2
      }} viewport={{
        once: true
      }}>
        <img src="/hr-connect3.jpg" alt="HR Connect, Enabling Organisational Growth through diverse leadership" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-fathom-ink/70 via-fathom-ink/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-fathom-terracotta" />
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 text-white max-w-xs md:max-w-lg">
          <p className="text-[9px] uppercase tracking-[0.35em] font-bold text-fathom-terracotta mb-2 md:mb-3">
            Our Value Proposition
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
            100% Black Woman-Owned. Purpose-driven. Impact-first.
          </h3>
        </div>
      </motion.div>

      <motion.div className="max-w-[800px] mx-auto space-y-6 md:space-y-8" initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={STAGGER_CONTAINER}>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-6 h-px bg-fathom-terracotta" />
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-fathom-terracotta">
            Our Value Proposition
          </span>
        </div>

        <motion.p variants={FADE_UP_VARIANTS} className="text-fathom-ink text-base md:text-lg leading-relaxed font-light">
          At HR Connect, we believe that organisational growth begins with exceptional leadership and exceptional people. We partner with organisations to develop leaders, connect outstanding talent, and enable sustainable growth through integrated human capital strategies, leadership development, executive search, customised learning solutions and world-class corporate experiences.
        </motion.p>
        <motion.p variants={FADE_UP_VARIANTS} className="text-fathom-ink text-base md:text-lg leading-relaxed font-light">
          We don't simply fill roles or deliver training; we build leadership capability, strengthen organisational performance and create future-ready workforces that drive long-term business success.
        </motion.p>
      </motion.div>
    </div>
  </section>;
};

/* ─────────────────────────────────────────────
   FOUNDER SECTION
───────────────────────────────────────────── */

const FounderSection = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return <section id="leadership" className="w-full bg-[#1C1A18] overflow-hidden flex flex-col lg:flex-row">
    {/* Photo: top on mobile, left on desktop */}
    <div className="w-full lg:w-[44%] h-[320px] sm:h-[400px] lg:h-auto lg:min-h-screen relative overflow-hidden shrink-0">
      <img src="/hr-connect9.jpg" alt="Lesego Tema: Founder & Managing Executive, HR Connect" className="w-full h-full object-cover object-top" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A18]/80 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1C1A18]/30 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-fathom-terracotta" />
    </div>

    {/* Bio text */}
    <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-16 py-14 md:py-20 lg:py-28">
      <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true
      }} variants={STAGGER_CONTAINER} className="max-w-xl">
        <motion.div variants={FADE_UP_VARIANTS} className="flex items-center gap-3 mb-8 md:mb-10">
          <div className="w-6 h-px bg-fathom-terracotta" />
          <span className="text-[9px] uppercase tracking-[0.35em] font-bold text-fathom-terracotta">
            Founder &amp; Managing Executive | HR Connect
          </span>
        </motion.div>

        <motion.h2 variants={FADE_UP_VARIANTS} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-serif text-white leading-[0.88] tracking-[-0.04em] mb-7 md:mb-8">
          Lesego
          <span className="block italic text-fathom-terracotta">Tema</span>
        </motion.h2>

        <motion.blockquote variants={FADE_UP_VARIANTS} className="font-serif italic text-xl sm:text-2xl md:text-3xl text-white/80 leading-snug mb-8 md:mb-10 border-l-2 border-fathom-terracotta pl-6">
          "People remain every organisation's greatest competitive advantage."
        </motion.blockquote>

        <motion.div variants={FADE_UP_VARIANTS} className="space-y-4 md:space-y-5 text-white/55 text-sm leading-relaxed font-light">
          <p>
            Lesego Tema is the Founder and Managing Executive of HR Connect, a 100% Black woman-owned human capital, leadership development and talent solutions firm dedicated to developing leaders, connecting talent and enabling organisational growth.
          </p>
          <p>
            With more than 10 years of experience spanning human capital management, talent acquisition, executive recruitment, leadership development, organisational capability, learning and development, stakeholder engagement and premium corporate event delivery, Lesego has established a reputation for delivering innovative, commercially focused and people-centred solutions that create measurable organisational impact.
          </p>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 md:space-y-5 overflow-hidden"
              >
                <p>
                  Throughout her career, she has partnered with organisations across the public and private sectors to design and implement high-impact human capital strategies, build leadership capability, attract exceptional talent and develop customised learning experiences that strengthen organisational performance and accelerate business growth.
                </p>
                <p>
                  As a passionate advocate for leadership excellence, women's advancement and workforce transformation, Lesego believes that people remain every organisation's greatest competitive advantage. Her leadership philosophy is centred on empowering individuals, strengthening teams and enabling organisations to thrive in an evolving world of work.
                </p>
                <p>
                  Supported by a multidisciplinary team of experienced human capital specialists, facilitators, executive coaches, learning professionals and project managers, HR Connect delivers integrated solutions that combine strategic insight with execution excellence. Together, they have successfully designed and delivered leadership programmes, executive development initiatives, talent acquisition projects, customised learning interventions and premium corporate conferences for organisations seeking sustainable people and business outcomes.
                </p>
                <p>
                  Under Lesego's leadership, HR Connect continues to position itself as a trusted strategic partner to organisations committed to building future-ready workforces, developing exceptional leaders and creating cultures of high performance.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={FADE_UP_VARIANTS} className="mt-10 md:mt-12 flex flex-wrap items-center gap-4">
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="border border-white/20 text-white px-7 py-3.5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:border-fathom-terracotta hover:text-fathom-terracotta transition-colors duration-300"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
          <a href="#connect" className="bg-fathom-terracotta text-white px-7 py-3.5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-fathom-ink transition-colors duration-300 flex items-center gap-2 group">
            Connect with Lesego
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>;
};

/* ─────────────────────────────────────────────
   CONTACT SECTION
───────────────────────────────────────────── */

type ContactFormState = {
  fullName: string;
  organisation: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};
const INITIAL_FORM: ContactFormState = {
  fullName: "",
  organisation: "",
  email: "",
  phone: "",
  service: "",
  message: ""
};
const ContactSection = () => {
  const [form, setForm] = React.useState<ContactFormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = React.useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const inputBase = "w-full bg-white/8 border border-white/15 text-white placeholder-white/30 rounded-lg px-4 py-3.5 text-sm font-light focus:outline-none focus:border-fathom-terracotta focus:ring-1 focus:ring-fathom-terracotta transition-all duration-200";
  const labelBase = "block text-[9px] uppercase tracking-[0.28em] font-bold text-white/50 mb-2";
  return <section id="connect" className="w-full bg-[#1B3A2D] text-white py-16 md:py-24 lg:py-32 px-5 sm:px-8 md:px-14 lg:px-20 overflow-hidden">
    <div className="max-w-[1440px] mx-auto">
      <div className="flex items-center justify-between border-b border-fathom-terracotta/30 pb-6 mb-12 md:mb-16 lg:mb-20">
        <div className="flex items-center gap-3">
          <div className="w-5 h-px bg-fathom-terracotta" />
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-fathom-terracotta">
            Let's Talk
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
        {/* Contact info */}
        <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={STAGGER_CONTAINER} className="flex flex-col justify-between">
          <div>
            <motion.h2 variants={FADE_UP_VARIANTS} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.88] tracking-[-0.04em] mb-7 md:mb-8">
              Get In
              <span className="block italic text-fathom-terracotta">Touch</span>
            </motion.h2>

            <motion.p variants={FADE_UP_VARIANTS} className="text-white/55 text-sm md:text-base leading-[1.8] font-light max-w-sm mb-10 md:mb-16">
              Partner with HR Connect to develop your leaders, connect exceptional talent and
              enable sustainable growth across your organisation.
            </motion.p>

            <motion.div variants={FADE_UP_VARIANTS} className="flex flex-col gap-6 md:gap-8">
              <div className="flex items-start gap-4 md:gap-5">
                <div className="w-10 h-10 rounded-full border border-fathom-terracotta/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-fathom-terracotta" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.28em] font-bold text-white/35 mb-1">
                    Email
                  </p>
                  <a href="mailto:info@hrconnect.co.za" className="text-white text-sm md:text-base hover:text-fathom-terracotta transition-colors duration-200">
                    info@hrconnect.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-5">
                <div className="w-10 h-10 rounded-full border border-fathom-terracotta/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-fathom-terracotta" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.28em] font-bold text-white/35 mb-1">
                    Phone
                  </p>
                  <a href="tel:+27110000000" className="text-white text-sm md:text-base hover:text-fathom-terracotta transition-colors duration-200">
                    +27 (0) 11 000 0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-5">
                <div className="w-10 h-10 rounded-full border border-fathom-terracotta/40 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-fathom-terracotta" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.28em] font-bold text-white/35 mb-1">
                    Location
                  </p>
                  <p className="text-white text-sm md:text-base">Johannesburg, South Africa</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={FADE_UP_VARIANTS} className="flex items-center gap-4 mt-10 md:mt-12 pt-10 md:pt-12 border-t border-white/10">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-fathom-terracotta hover:text-fathom-terracotta transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter / X" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-fathom-terracotta hover:text-fathom-terracotta transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/25 ml-2">
                Follow us
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2
        }} viewport={{
          once: true
        }}>
          {submitted ? <motion.div initial={{
            opacity: 0,
            scale: 0.96
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }} className="h-full flex flex-col justify-center items-start py-16 md:py-20">
            <div className="w-12 h-12 rounded-full bg-fathom-terracotta flex items-center justify-center mb-8">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight">
              Thank you!
            </h3>
            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed max-w-sm">
              We'll be in touch shortly. Our team looks forward to exploring how HR Connect can
              partner with your organisation.
            </p>
            <button onClick={() => {
              setSubmitted(false);
              setForm(INITIAL_FORM);
            }} className="mt-10 text-[10px] uppercase tracking-widest font-bold text-fathom-terracotta hover:text-white transition-colors duration-200 flex items-center gap-2">
              <span>Send another message</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div> : <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label htmlFor="fullName" className={labelBase}>
                  Full Name
                </label>
                <input id="fullName" name="fullName" type="text" required placeholder="Your full name" value={form.fullName} onChange={handleChange} className={inputBase} />
              </div>
              <div>
                <label htmlFor="organisation" className={labelBase}>
                  Organisation
                </label>
                <input id="organisation" name="organisation" type="text" placeholder="Your organisation" value={form.organisation} onChange={handleChange} className={inputBase} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label htmlFor="email" className={labelBase}>
                  Email Address
                </label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={handleChange} className={inputBase} />
              </div>
              <div>
                <label htmlFor="phone" className={labelBase}>
                  Phone Number
                </label>
                <input id="phone" name="phone" type="tel" placeholder="+27 (0) 00 000 0000" value={form.phone} onChange={handleChange} className={inputBase} />
              </div>
            </div>

            <div>
              <label htmlFor="service" className={labelBase}>
                Service of Interest
              </label>
              <select id="service" name="service" value={form.service} onChange={handleChange} className={cn(inputBase, "appearance-none cursor-pointer")}>
                <option value="" disabled className="bg-[#1B3A2D] text-white/50">
                  Select a service
                </option>
                {SERVICE_OPTIONS.map(opt => <option key={opt} value={opt} className="bg-[#1B3A2D] text-white">
                  {opt}
                </option>)}
              </select>
            </div>

            <div>
              <label htmlFor="message" className={labelBase}>
                Message
              </label>
              <textarea id="message" name="message" required rows={5} placeholder="Tell us about your organisation and what you'd like to achieve..." value={form.message} onChange={handleChange} className={cn(inputBase, "resize-none")} />
            </div>

            <button type="submit" className="w-full bg-fathom-terracotta text-white py-4 rounded-lg text-[10px] uppercase tracking-widest font-bold hover:bg-[#9e5440] transition-colors duration-300 flex items-center justify-center gap-2 group mt-1">
              Send Message
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>}
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="mt-16 md:mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-[9px] uppercase tracking-[0.22em] font-bold text-white/25">
          © 2026 HR Connect. All rights reserved.
        </p>
        <p className="text-[9px] uppercase tracking-[0.22em] font-bold text-white/25">
          Developing Leaders. Connecting Talent. Enabling Growth.
        </p>
      </div>
    </div>
  </section>;
};

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */

const Footer = () => {
  return <footer className="bg-fathom-ink text-fathom-white py-14 md:py-20 px-5 sm:px-8 md:px-14 lg:px-20 overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-[3px] bg-fathom-terracotta" />
    <div className="max-w-[1440px] mx-auto relative z-10 pt-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-12 mb-14 md:mb-20">
        <div>
          <a href="#home" className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 tracking-tighter block">
            HR <span className="italic text-fathom-terracotta">Connect</span>
          </a>
          <div className="flex flex-wrap gap-6 md:gap-8">
            {FOOTER_LINKS.map(link => <a key={link.label} href={link.href} className="text-[9px] uppercase tracking-[0.3em] text-white/35 hover:text-fathom-terracotta transition-colors font-bold">
              {link.label}
            </a>)}
          </div>
        </div>

        <div className="text-left md:text-right w-full md:w-auto">
          <p className="text-fathom-terracotta text-[10px] uppercase tracking-widest font-bold mb-3 md:mb-4 flex items-center gap-2 md:justify-end">
            <span className="w-2 h-2 rounded-full bg-fathom-terracotta" />
            Accepting new partnerships
          </p>
          <p className="text-white/25 text-[9px] uppercase tracking-widest font-bold">
            Developing Leaders. Connecting Talent. Enabling Growth.
          </p>
        </div>
      </div>
      <div className="absolute -bottom-10 right-0 font-serif text-[18vw] leading-none text-white/[0.025] pointer-events-none whitespace-nowrap italic select-none">
        people excellence
      </div>
    </div>
  </footer>;
};

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */

export const FathomAgencyLanding = () => {
  const sectionIds = NAV_SECTIONS.map(s => s.id);
  const activeSection = useActiveSection(sectionIds);
  useSmoothScroll();
  return <div className="min-h-screen bg-fathom-white selection:bg-fathom-terracotta selection:text-fathom-white">
    <Navbar activeSection={activeSection} />
    <ProgressDots activeSection={activeSection} />
    <BackToTop />

    <main>
      <Hero />
      <ServicesAccordion />
      <AboutSection />
      <WhyChooseUs />
      <IndustriesSection />
      <ValueProposition />
      <FounderSection />
      <ContactSection />
    </main>

    <Footer />
  </div>;
};
