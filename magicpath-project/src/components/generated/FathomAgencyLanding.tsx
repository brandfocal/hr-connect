import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus, ChevronLeft, ChevronRight, ArrowUpRight, ArrowUp, Mail, Phone, MapPin, Linkedin, Twitter, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
const STAGGER_CONTAINER = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const NAV_ITEMS = [{
  label: "Services",
  href: "#services"
}, {
  label: "About",
  href: "#about"
}, {
  label: "Leadership",
  href: "#leadership"
}, {
  label: "Connect",
  href: "#connect"
}];
const FOOTER_LINKS = [{
  label: "Services",
  href: "#services"
}, {
  label: "About",
  href: "#about"
}, {
  label: "Leadership",
  href: "#leadership"
}, {
  label: "Connect",
  href: "#connect"
}];
const NAV_SECTIONS = [{
  id: "home",
  label: "Home"
}, {
  id: "services",
  label: "Services"
}, {
  id: "work",
  label: "Work"
}, {
  id: "about",
  label: "About"
}, {
  id: "why",
  label: "Why Us"
}, {
  id: "testimonials",
  label: "Testimonials"
}, {
  id: "leadership",
  label: "Leadership"
}, {
  id: "connect",
  label: "Connect"
}];
const STATS = [{
  label: "Leaders Developed",
  value: "500+"
}, {
  label: "Placements Made",
  value: "200+"
}, {
  label: "Organisations Served",
  value: "80+"
}];
const REASONS = [{
  id: "01",
  title: "Strategic expertise",
  description: "We combine human capital advisory, executive search and leadership development under one roof — ensuring every solution is aligned to your strategic objectives and delivers measurable organisational impact."
}, {
  id: "02",
  title: "100% Black Woman-Owned",
  description: "HR Connect is proudly independent, commercially focused and purpose-driven. Our diversity is our strength, enabling us to bring fresh perspectives and inclusive thinking to every engagement."
}, {
  id: "03",
  title: "Proven impact",
  description: "We don't simply fill roles or deliver training. We build leadership capability, strengthen organisational performance and create future-ready workforces that drive long-term business success."
}];
const METRICS_DATA = [{
  id: "01",
  title: "A trusted human capital partner delivering measurable people impact.",
  value: "10+",
  label: "Years of experience",
  isDark: true
}, {
  id: "02",
  title: "Clients who return for our expertise, year after year.",
  value: "95%",
  label: "Client retention",
  isDark: false
}, {
  id: "03",
  title: "Industries served across public, private and development sectors.",
  value: "12",
  label: "Sectors covered",
  isDark: false
}, {
  id: "04",
  title: "Experienced consultants, coaches and talent specialists on our team.",
  value: "20+",
  label: "Expert practitioners",
  isDark: false
}];
const TESTIMONIALS = [{
  id: 1,
  quote: "HR Connect brought rigour and genuine partnership to our leadership strategy. Their executive coaching programme transformed how our senior team operates.",
  author: "Thabo Molefe",
  role: "Group HR Director, Infrastructure Holdings",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85&auto=format&fit=crop"
}, {
  id: 2,
  quote: "The talent acquisition process was seamless and precise. They found us an executive leader who has become instrumental to our growth.",
  author: "Nomsa Dlamini",
  role: "CEO, Development Finance Institution",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85&auto=format&fit=crop"
}, {
  id: 3,
  quote: "The Women in Leadership programme they designed for us exceeded every expectation. A truly transformative experience for our high-potential cohort.",
  author: "Adaeze Okonkwo",
  role: "Chief People Officer, Financial Services Group",
  image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=85&auto=format&fit=crop"
}];
const SECONDARY_TESTIMONIALS = [{
  id: "s1",
  quote: "Lesego and the HR Connect team delivered a leadership summit of exceptional quality. Every detail was curated with care and commercial intent.",
  author: "Rethabile Sithole",
  role: "Managing Director, Professional Services Firm"
}, {
  id: "s2",
  quote: "Strategic thinking paired with genuine human insight. HR Connect is the partner we trust to develop our most critical asset — our people.",
  author: "James Patel",
  role: "Group Executive, Mining & Resources"
}, {
  id: "s3",
  quote: "Their executive search capability is second to none. We placed three C-suite leaders in under six months, each exceeding expectations.",
  author: "Yewande Adeyemi",
  role: "Head of Talent, Pan-African Bank"
}];
const PERF_STATS = [{
  value: "Africa-wide",
  label: "Geographic Reach"
}, {
  value: "6",
  label: "Core Service Lines"
}, {
  value: "12",
  label: "Sectors Served"
}];
const ACCORDION_SERVICES = [{
  id: "svc-01",
  title: "Human Capital Advisory",
  description: "We design and implement people strategies that enhance organisational performance, improve workforce capability and support long-term business success.",
  subs: ["Human Capital Strategy", "Organisational Development", "Workforce Planning", "Organisational Design", "Change Management", "Performance Management", "Culture Transformation", "Employee Experience", "HR Advisory", "People Analytics"]
}, {
  id: "svc-02",
  title: "Talent Acquisition & Executive Search",
  description: "We identify, attract and place high-calibre professionals and executive leaders who deliver measurable business impact for your organisation.",
  subs: ["Executive Search", "Executive Recruitment", "Professional Recruitment", "Specialist Talent Acquisition", "Talent Mapping", "Succession Planning", "Leadership Assessments", "RPO", "Employer Branding"]
}, {
  id: "svc-03",
  title: "Leadership Development",
  description: "We design and deliver transformative leadership programmes that develop confident, purpose-driven leaders capable of navigating complexity.",
  subs: ["Executive Leadership Development", "Emerging Leaders Programmes", "Women in Leadership", "Executive Coaching", "Management Development", "High-Potential Talent Development", "Board & Governance Development", "Leadership Masterclasses", "Team Leadership Programmes"]
}, {
  id: "svc-04",
  title: "Learning & Organisational Capability",
  description: "We build organisational learning ecosystems that accelerate workforce capability, future-readiness and commercial excellence.",
  subs: ["Corporate Training", "Leadership Academies", "Skills Development", "Workplace Readiness", "Future Skills", "Digital Capability", "Customer Experience", "Communication & Influence", "Sales & Commercial Excellence"]
}, {
  id: "svc-05",
  title: "Women in Leadership",
  description: "Dedicated programmes and experiences designed to accelerate the development, visibility and impact of women in leadership roles.",
  subs: ["Women's Leadership Conferences", "Executive Development Programmes", "Leadership Forums", "Mentorship Initiatives", "Career Advancement", "Executive Presence", "Personal Leadership Branding", "Strategic Networking Experiences"]
}, {
  id: "svc-06",
  title: "Customised Corporate Events & Executive Experiences",
  description: "Bespoke leadership events and executive experiences that connect, inspire and advance organisational agendas with lasting impact.",
  subs: ["Leadership Conferences", "Executive Summits", "HR Conferences", "Strategic Planning Retreats", "Executive Roundtables", "Women Leadership Forums", "Team Building Experiences", "Awards & Recognition Events", "Learning Conferences", "Bespoke Corporate Experiences"]
}];
const CASE_STUDIES = [{
  id: "cs-01",
  number: "01",
  client: "Nedbank Group",
  title: "Executive Leadership Development Programme",
  imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=85&auto=format&fit=crop"
}, {
  id: "cs-02",
  number: "02",
  client: "Department of Public Service",
  title: "Human Capital Strategy & Workforce Planning",
  imageUrl: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=900&q=85&auto=format&fit=crop"
}, {
  id: "cs-03",
  number: "03",
  client: "Old Mutual",
  title: "Women in Leadership Summit",
  imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=85&auto=format&fit=crop"
}, {
  id: "cs-04",
  number: "04",
  client: "Eskom Holdings",
  title: "Talent Acquisition & Executive Search",
  imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85&auto=format&fit=crop"
}];
const SERVICE_OPTIONS = ["Human Capital Advisory", "Talent Acquisition & Executive Search", "Leadership Development", "Learning & Organisational Capability", "Women in Leadership", "Customised Corporate Events", "Other"];

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

  // Lock body scroll when mobile menu open
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  const getNavColor = (href: string) => {
    const sectionId = href.replace("#", "");
    return activeSection === sectionId ? "text-fathom-terracotta" : "text-fathom-graphite hover:text-fathom-terracotta";
  };
  const handleNavClick = () => setMobileOpen(false);
  return <nav className={cn("fixed top-0 left-0 w-full z-50 transition-all duration-500 px-5 md:px-14 lg:px-20 py-5 md:py-6", isScrolled ? "bg-fathom-white/95 backdrop-blur-md py-4 shadow-sm border-b border-fathom-ink/5" : "bg-transparent")}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-serif text-xl md:text-2xl tracking-tighter font-bold">
            HR <span className="italic text-fathom-terracotta">Connect</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_ITEMS.map(item => <a key={item.label} href={item.href} className={cn("relative text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 font-semibold", getNavColor(item.href))}>
              {item.label}
              {activeSection === item.href.replace("#", "") && <span className="absolute -bottom-1 left-0 w-full h-px bg-fathom-terracotta" />}
            </a>)}
        </div>

        <div className="flex items-center gap-3">
          <a href="#connect" className="hidden sm:flex bg-fathom-terracotta text-fathom-white px-5 md:px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-fathom-ink transition-colors duration-300">
            Partner with us
          </a>
          {/* Hamburger — mobile only */}
          <button onClick={() => setMobileOpen(v => !v)} aria-label={mobileOpen ? "Close menu" : "Open menu"} className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-fathom-ink/20 text-fathom-ink hover:border-fathom-terracotta hover:text-fathom-terracotta transition-colors">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {mobileOpen && <motion.div initial={{
        opacity: 0,
        y: -12
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -12
      }} transition={{
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1]
      }} className="md:hidden bg-fathom-white border-t border-fathom-ink/8 shadow-xl">
            <div className="flex flex-col px-5 py-6 gap-1">
              {NAV_ITEMS.map(item => <a key={item.label} href={item.href} onClick={handleNavClick} className={cn("text-[11px] uppercase tracking-[0.28em] font-bold py-4 px-3 rounded-lg transition-colors duration-200", activeSection === item.href.replace("#", "") ? "text-fathom-terracotta bg-fathom-terracotta/5" : "text-fathom-graphite hover:text-fathom-terracotta hover:bg-fathom-terracotta/5")}>
                  {item.label}
                </a>)}
              <a href="#connect" onClick={handleNavClick} className="mt-4 bg-fathom-terracotta text-white rounded-full py-3.5 text-center text-[10px] uppercase tracking-widest font-bold hover:bg-fathom-ink transition-colors duration-300">
                Partner with us
              </a>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
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
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=90&auto=format&fit=crop" alt="HR Connect — Executive leadership in the boardroom" className="w-full h-full object-cover brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-fathom-ink/30 to-fathom-ink/60" />
        <div className="absolute bottom-5 left-5 bg-fathom-terracotta text-white px-4 py-3 shadow-2xl z-10">
          <p className="text-[9px] uppercase tracking-widest font-bold mb-0.5">Est. 2014</p>
          <p className="text-lg font-serif leading-none">10+ Years</p>
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
              A Strategic Human Capital Firm
            </span>
          </motion.div>

          <motion.h1 variants={FADE_UP_VARIANTS} className="text-[44px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] leading-[0.88] font-serif text-white tracking-[-0.04em] mb-7 md:mb-10">
            Developing leaders.
            <span className="block mt-2">
              Connecting <span className="italic text-fathom-terracotta">talent</span>.
            </span>
          </motion.h1>

          <motion.p variants={FADE_UP_VARIANTS} className="text-sm md:text-base text-white/55 max-w-md mb-8 md:mb-10 leading-[1.75] font-light">
            HR Connect partners with organisations to unlock their greatest asset — their people.
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
              To develop exceptional leaders and enable sustainable growth through people.
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
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=90&auto=format&fit=crop" alt="HR Connect — Executive leadership in the boardroom" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-fathom-ink/40 to-transparent" />
        <div className="absolute bottom-8 left-8 bg-fathom-terracotta text-white px-6 py-4 shadow-2xl z-10">
          <p className="text-[9px] uppercase tracking-widest font-bold mb-0.5">Est. 2014</p>
          <p className="text-xl font-serif leading-none">10+ Years</p>
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
                  <span className="text-xl md:text-2xl font-serif text-fathom-terracotta">{stat.value}</span>
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
   CASE STUDIES — Selected Work Portfolio
───────────────────────────────────────────── */

const CaseStudyCard = ({
  item,
  index
}: {
  item: (typeof CASE_STUDIES)[number];
  index: number;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return <motion.div className="relative w-full h-[260px] sm:h-[300px] md:h-[320px] overflow-hidden cursor-pointer group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} initial={{
    opacity: 0,
    y: 24
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.7,
    delay: index * 0.1,
    ease: [0.22, 1, 0.36, 1]
  }} viewport={{
    once: true
  }}>
      <motion.div className="absolute inset-0 z-0" animate={{
      scale: isHovered ? 1.06 : 1
    }} transition={{
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }}>
        <img src={item.imageUrl} alt={item.client} className="w-full h-full object-cover brightness-[0.65] group-hover:brightness-[0.75] transition-all duration-500" />
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-3/5 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
      </div>

      <div className="relative z-20 h-full w-full p-5 md:p-7 flex flex-col justify-between items-start">
        <div className="w-full flex justify-end">
          <span className="font-serif text-[32px] md:text-[38px] leading-none text-[#EDE8DC] opacity-85 select-none">
            {item.number}
          </span>
        </div>
        <div className="flex flex-col gap-1.5 w-full max-w-[90%]">
          <h3 className="font-serif text-lg md:text-[22px] leading-tight text-[#EDE8DC]">{item.client}</h3>
          <p className="font-sans text-xs md:text-[13px] font-medium text-[#E3DCCB] opacity-75">
            {item.title}
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isHovered && <motion.div initial={{
        opacity: 0,
        scale: 0.5,
        y: 16
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} exit={{
        opacity: 0,
        scale: 0.5,
        y: 16
      }} transition={{
        duration: 0.28,
        ease: "easeOut"
      }} className="absolute bottom-5 right-5 md:bottom-7 md:right-7 z-30 w-10 h-10 md:w-11 md:h-11 bg-fathom-terracotta rounded-full flex items-center justify-center shadow-lg">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </motion.div>}
      </AnimatePresence>
    </motion.div>;
};
const CaseStudiesSection = () => {
  return <section id="work" className="w-full bg-[#EDE8DC] text-fathom-ink py-16 md:py-20 lg:py-28 px-5 sm:px-8 md:px-14 lg:px-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <header className="flex flex-col sm:flex-row justify-between items-baseline mb-10 md:mb-14 lg:mb-16 gap-3">
          <motion.h2 initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} viewport={{
          once: true
        }} className="font-serif text-3xl sm:text-[36px] md:text-[52px] tracking-[-1.5px] leading-none">
            Selected Work
          </motion.h2>
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.1
        }} viewport={{
          once: true
        }} className="font-serif text-lg md:text-[22px] tracking-[-0.8px] opacity-60">
            <span>/ 4 / ©</span>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {CASE_STUDIES.map((item, index) => <CaseStudyCard key={item.id} item={item} index={index} />)}
        </div>
      </div>
    </section>;
};

/* ─────────────────────────────────────────────
   ABOUT / IMPACT METRICS
───────────────────────────────────────────── */

const ImpactMetrics = () => {
  return <section id="about" className="w-full bg-[#1B3A2D] py-16 md:py-20 lg:py-24 px-5 sm:px-8 md:px-14 lg:px-16 flex flex-col items-center">
      <div className="w-full max-w-[1200px] flex flex-col">
        <div className="w-full mb-10 md:mb-12">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-px bg-[#B5654A]" />
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#B5654A]">
                Impact
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/30 hidden sm:block">
              04 / 06
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          <motion.h2 initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1]
        }} className="text-3xl sm:text-4xl md:text-5xl leading-tight font-serif tracking-tight text-white max-w-sm">
            A focused team with lasting organisational impact.
          </motion.h2>

          {/* 2×2 on mobile, 4 col on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {METRICS_DATA.map(metric => <motion.div key={metric.id} initial={{
            opacity: 0,
            y: 24
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: parseInt(metric.id) * 0.1,
            ease: [0.16, 1, 0.3, 1]
          }} className={cn("flex flex-col justify-between p-5 md:p-8 rounded-xl md:rounded-2xl h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] w-full transition-all duration-300", metric.isDark ? "bg-[#B5654A] text-white" : "bg-white/8 text-white border border-white/10")}>
                <div className="flex flex-col gap-3 md:gap-4">
                  <span className={cn("text-[10px] uppercase tracking-[0.25em] font-bold", metric.isDark ? "text-white/60" : "text-[#B5654A]")}>
                    ({metric.id})
                  </span>
                  <p className={cn("text-xs md:text-sm font-light leading-relaxed", metric.isDark ? "text-white/80" : "text-white/60")}>
                    {metric.title}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[48px] sm:text-[56px] md:text-[72px] leading-none font-serif tracking-[-3px] text-white">
                    {metric.value}
                  </h3>
                  <span className={cn("text-[10px] md:text-xs font-bold uppercase tracking-widest", metric.isDark ? "text-white/70" : "text-white/40")}>
                    {metric.label}
                  </span>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};

/* ─────────────────────────────────────────────
   TESTIMONIALS — editorial magazine spread
───────────────────────────────────────────── */

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const handleNext = () => {
    setDirection(1);
    setActiveIndex(prev => (prev + 1) % TESTIMONIALS.length);
  };
  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  const current = TESTIMONIALS[activeIndex];
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 40 : -40,
      opacity: 0
    })
  };
  return <section id="testimonials" className="w-full bg-fathom-white overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Dark editorial panel */}
        <div className="w-full lg:w-[55%] bg-[#1B3A2D] flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-16 py-12 md:py-16 relative overflow-hidden min-h-[480px] lg:min-h-[680px]">
          <div className="font-serif text-[#B5654A] select-none pointer-events-none leading-none" style={{
          fontSize: "clamp(120px, 20vw, 220px)",
          lineHeight: 0.8,
          opacity: 0.18
        }} aria-hidden="true">
            "
          </div>

          <div className="flex-1 flex flex-col justify-center -mt-12 md:-mt-16 lg:-mt-20">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <div className="w-5 h-px bg-[#B5654A]" />
              <span className="text-[9px] uppercase tracking-[0.35em] font-bold text-[#B5654A]">
                Client Voices
              </span>
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={current.id} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1]
            }}>
                <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white leading-[1.15] tracking-[-0.02em] mb-8 md:mb-10">
                  {current.quote}
                </blockquote>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={current.id + "-attr"} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -6
            }} transition={{
              duration: 0.4
            }} className="flex flex-col gap-2">
                <div className="w-10 h-px bg-[#B5654A] mb-3" />
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-white">
                  {current.author}
                </p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/45 font-light">
                  {current.role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between pt-8 md:pt-10 border-t border-white/10">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, i) => <button key={t.id} onClick={() => {
              setDirection(i > activeIndex ? 1 : -1);
              setActiveIndex(i);
            }} aria-label={`Go to testimonial ${i + 1}`} className={cn("h-px transition-all duration-500", i === activeIndex ? "w-8 bg-[#B5654A]" : "w-4 bg-white/25 hover:bg-white/50")} />)}
            </div>
            <nav className="flex items-center gap-2" aria-label="Testimonial navigation">
              <button onClick={handlePrev} aria-label="Previous testimonial" className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:border-[#B5654A] hover:bg-[#B5654A] transition-all duration-300 text-white">
                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button onClick={handleNext} aria-label="Next testimonial" className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#B5654A] hover:bg-white hover:text-fathom-ink transition-all duration-300 text-white">
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </nav>
          </div>
        </div>

        {/* Photo — fixed height on mobile, full on desktop */}
        <div className="w-full lg:w-[45%] h-[280px] sm:h-[360px] lg:h-auto relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img key={current.id + "-img"} src={current.image} alt={current.author} className="w-full h-full object-cover" initial={{
            opacity: 0,
            scale: 1.04
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.98
          }} transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
          }} />
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#B5654A]" />
        </div>
      </div>

      {/* Secondary testimonials */}
      <div className="bg-fathom-sand px-5 sm:px-8 md:px-14 lg:px-20 py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-0 divide-y md:divide-y-0 md:divide-x divide-fathom-ink/10">
            {SECONDARY_TESTIMONIALS.map((t, i) => <motion.div key={t.id} className="flex-1 px-0 md:px-8 lg:px-10 first:pl-0 last:pr-0 py-8 md:py-0 flex flex-col gap-4" initial={{
            opacity: 0,
            y: 16
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: i * 0.12,
            ease: [0.16, 1, 0.3, 1]
          }} viewport={{
            once: true
          }}>
                <div className="w-6 h-px bg-fathom-terracotta" />
                <blockquote className="font-serif italic text-lg md:text-xl text-fathom-ink leading-snug">
                  <span>"{t.quote}"</span>
                </blockquote>
                <div className="flex flex-col gap-0.5 mt-auto">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-fathom-ink">
                    {t.author}
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-fathom-graphite font-light">
                    {t.role}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};

/* ─────────────────────────────────────────────
   WHY CHOOSE US
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
          <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/30 hidden sm:block">
            Why HR Connect — 2026
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-12 md:mb-16 lg:mb-20">
          <motion.h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-none tracking-[-0.04em] text-white" initial={{
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
          <div className="flex items-center gap-4 text-white/30 font-serif italic text-2xl">
            <span>/ 3 /</span>
            <span className="not-italic text-sm text-white/20">©</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-24 mb-16 md:mb-24">
          <motion.div className="lg:col-span-7 relative group" initial={{
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
            <div className="relative aspect-[16/10] lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85&auto=format&fit=crop" alt="HR Connect — people-centred leadership and organisational excellence" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/90 via-[#2C1810]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-fathom-terracotta mb-2">
                  Philosophy
                </p>
                <h3 className="text-xl md:text-3xl font-serif leading-tight max-w-xs">
                  HR Connect — Built on people excellence
                </h3>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-fathom-terracotta" />
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.blockquote className="text-xl sm:text-2xl md:text-3xl font-serif text-white/90 leading-snug mb-10 md:mb-16 italic border-l-2 border-fathom-terracotta pl-6" initial={{
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
              "We don't simply fill roles or deliver training — we build leadership capability,
              strengthen organisational performance and create future-ready workforces."
            </motion.blockquote>

            <div className="space-y-0">
              {STATS.map((stat, i) => <motion.div key={stat.label} className="py-5 md:py-7 border-t border-white/10 flex items-center justify-between group cursor-default" initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5 + i * 0.1,
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/40 group-hover:text-fathom-terracotta transition-colors">
                    {stat.label}
                  </span>
                  <span className="text-3xl md:text-4xl font-serif text-white group-hover:-translate-x-2 transition-transform duration-500">
                    {stat.value}
                  </span>
                </motion.div>)}
              <div className="border-t border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};

/* ─────────────────────────────────────────────
   FOUNDER SECTION
───────────────────────────────────────────── */

const FounderSection = () => {
  return <section id="leadership" className="w-full bg-[#1C1A18] overflow-hidden flex flex-col lg:flex-row">
      {/* Photo — top on mobile (fixed height), left on desktop */}
      <div className="w-full lg:w-[44%] h-[320px] sm:h-[400px] lg:h-auto lg:min-h-screen relative overflow-hidden shrink-0">
        <img src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=900&q=90&auto=format&fit=crop&crop=top" alt="Lesego Tema — Founder & Managing Executive, HR Connect" className="w-full h-full object-cover object-top" />
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
              Founder &amp; Managing Executive
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
              Lesego Tema is one of Africa's foremost human capital strategists, with over a decade
              of experience guiding organisations across the public, private and development sectors.
              As Founder and Managing Executive of HR Connect, she has built a firm that is
              synonymous with leadership excellence, strategic people practice and measurable
              organisational impact.
            </p>
            <p>
              A passionate advocate for transformative leadership and inclusive workplaces, Lesego
              has designed and delivered flagship programmes for some of Africa's most respected
              institutions. Her work spans executive coaching, organisational design, talent strategy
              and high-impact leadership development — always grounded in the belief that people are
              an organisation's most enduring competitive advantage.
            </p>
            <p>
              Under her leadership, HR Connect has grown into a trusted partner to more than 80
              organisations, achieving a 95% client retention rate and placing over 200 executive
              leaders across the continent.
            </p>
          </motion.div>

          <motion.div variants={FADE_UP_VARIANTS} className="mt-10 md:mt-12 flex items-center gap-6">
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
   REASONS SECTION (About)
───────────────────────────────────────────── */

const ReasonsSection = () => {
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
          <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=85&auto=format&fit=crop" alt="HR Connect — Enabling Organisational Growth through diverse leadership" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-fathom-ink/70 via-fathom-ink/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-fathom-terracotta" />
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 text-white max-w-xs md:max-w-lg">
            <p className="text-[9px] uppercase tracking-[0.35em] font-bold text-fathom-terracotta mb-2 md:mb-3">
              Our Identity
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
              100% Black Woman-Owned. Purpose-driven. Impact-first.
            </h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-24">
          <motion.div className="lg:col-span-5" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={STAGGER_CONTAINER}>
            <motion.p variants={FADE_UP_VARIANTS} className="text-xl sm:text-2xl md:text-3xl font-serif leading-tight mb-10 md:mb-16 text-fathom-ink">
              100% Black Woman-Owned, strategically focused and committed to developing leaders,
              connecting exceptional talent and enabling sustainable growth.
            </motion.p>
            <div className="space-y-0">
              {STATS.map(stat => <motion.div key={`stat-alt-${stat.label}`} className="py-5 md:py-7 border-t border-fathom-terracotta/20 flex items-center justify-between" variants={FADE_UP_VARIANTS}>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-fathom-graphite">
                    {stat.label}
                  </span>
                  <span className="text-3xl md:text-4xl font-serif text-fathom-ink">{stat.value}</span>
                </motion.div>)}
              <div className="border-t border-fathom-terracotta/20" />
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col">
            {REASONS.map((reason, i) => <motion.div key={reason.id} className="group border-b border-fathom-ink/10 last:border-b-0 py-8 md:py-10 lg:py-14 first:pt-0" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2 * i,
            duration: 1
          }} viewport={{
            once: true
          }}>
                <div className="flex gap-6 md:gap-8 lg:gap-12">
                  <span className="text-fathom-terracotta font-serif italic text-2xl md:text-3xl pt-1 shrink-0">
                    {reason.id}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 group-hover:italic transition-all duration-500 cursor-default leading-tight">
                      {reason.title}
                    </h3>
                    <p className="text-fathom-graphite text-base leading-relaxed max-w-2xl font-light opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-700 ease-out">
                      {reason.description}
                    </p>
                    <div className="mt-4 md:mt-5 flex items-center gap-2 opacity-100 group-hover:opacity-0 transition-opacity">
                      <Plus className="w-4 h-4 text-fathom-terracotta" />
                      <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-fathom-graphite">
                        Learn more
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
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
          <span className="text-[10px] uppercase tracking-widest font-bold text-white/25 hidden sm:block">
            08 / 08
          </span>
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
                {/* Name + Org — stacked on mobile, side-by-side on md+ */}
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

                {/* Email + Phone */}
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
            © 2025 HR Connect. All rights reserved.
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

          {/* Mobile: centered; desktop: right-aligned */}
          <div className="text-left md:text-right w-full md:w-auto">
            <p className="text-fathom-terracotta text-[10px] uppercase tracking-widest font-bold mb-3 md:mb-4 flex items-center gap-2 md:justify-end">
              <span className="w-2 h-2 rounded-full bg-fathom-terracotta" />
              Accepting new partnerships
            </p>
            <p className="text-white/25 text-[9px] uppercase tracking-widest font-bold">
              © HR Connect 2026 — All rights reserved
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
        <CaseStudiesSection />
        <ImpactMetrics />
        <TestimonialSection />
        <WhyChooseUs />
        <FounderSection />
        <ReasonsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>;
};