import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedStat from "../components/AnimatedStat";
import LazyImg from "../components/LazyImg";
import ShimmerVideo from "../components/ShimmerVideo";
import { motion, useReducedMotion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  Heart,
  Gem,
  Gift,
  Crown,
  Star,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fadeUp, stagger } from "../utils/animations";

// ── data ──────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Heart,
    label: "Mariages",
    desc: "Décoration sur-mesure pour votre plus beau jour.",
  },
  {
    icon: Gem,
    label: "Fiançailles",
    desc: "Une ambiance romantique et mémorable.",
  },
  {
    icon: Crown,
    label: "Sdag",
    desc: "Mise en scène raffinée pour la présentation des cadeaux traditionnels.",
  },
  {
    icon: Gift,
    label: "Anniversaires",
    desc: "Des célébrations colorées et élégantes.",
  },
];

const stats = [
  { value: "800+", label: "Événements réalisés" },
  { value: "7+ ans", label: "D'expérience" },
  { value: "100%", label: "Satisfaction client" },
];

const steps = [
  {
    num: "01",
    title: "Contactez-nous",
    desc: "Partagez votre vision et vos souhaits avec notre équipe.",
  },
  {
    num: "02",
    title: "On planifie ensemble",
    desc: "Nous créons un concept unique adapté à votre événement.",
  },
  {
    num: "03",
    title: "Votre événement prend vie",
    desc: "Le jour J, nous donnons vie à vos rêves avec soin et élégance.",
  },
];

const testimonials = [
  {
    initials: "SR",
    name: "Sonia R.",
    event: "Mariage",
    quote:
      "BH Giftery a transformé notre salle en un vrai conte de fées. Tout était parfait, chaque détail soigné.",
  },
  {
    initials: "LA",
    name: "Leila A.",
    event: "Fiançailles",
    quote:
      "Service impeccable, équipe professionnelle et décoration sublime. Je recommande vivement !",
  },
  {
    initials: "KM",
    name: "Karim M.",
    event: "Anniversaire",
    quote:
      "Ponctualité, créativité et sérieux. Notre fête de 30 ans était exactement comme on le rêvait.",
  },
];

const WHATSAPP = "https://wa.me/21625376765";

// ── shared sub-components ─────────────────────────────────────────────────────
// function Placeholder({ height = "100%" }: { height?: string }) {
//   return <LazyImg style={{ height }} />;
// }

function Label({ children }: { children: string }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "11px",
        letterSpacing: "0.22em",
        textTransform: "uppercase" as const,
        color: "var(--gold)",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </p>
  );
}

// Subtle 3-D tilt on hover; no-op on touch devices
function TiltCard({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) scale3d(1.015,1.015,1.015)`;
    el.style.transition = "transform 0.1s ease";
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    el.style.transition = "transform 0.55s ease";
  };

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

// Thin gold ornamental divider between sections
function SectionDivider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        paddingTop: "3rem",
      }}
    >
      <div
        style={{
          width: "56px",
          height: "1px",
          background: "rgba(201,168,76,0.3)",
        }}
      />
      <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
        <rect
          x="1"
          y="1"
          width="6"
          height="6"
          transform="rotate(45 4 4)"
          fill="rgba(201,168,76,0.55)"
        />
      </svg>
      <div
        style={{
          width: "56px",
          height: "1px",
          background: "rgba(201,168,76,0.3)",
        }}
      />
    </div>
  );
}

// ── page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(6);
  const isPausedRef = useRef(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setTimeout(() => {
      setSlideCount(emblaApi.scrollSnapList().length);
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }, 0);
    return () => clearTimeout(id);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () =>
      setSelectedIndex(emblaApi.selectedScrollSnap()),
    );
  }, [emblaApi]);

  const prefersReduced = useReducedMotion();

  // autoplay every 4 s, paused on hover
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      if (!isPausedRef.current) emblaApi.scrollNext();
    }, 2000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        {/* 1 · HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="hero-section"
          style={{
            minHeight: "100vh",
            background: "var(--cream)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding:
              "clamp(4.5rem, 12vw, 7rem) clamp(1.5rem, 5vw, 5rem) clamp(2.5rem, 6vw, 5rem)",
            textAlign: "center",
            position: "relative",
          }}
        >
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            style={{
              width: "1px",
              height: "56px",
              background: "var(--gold)",
              marginBottom: "clamp(1.75rem, 3vw, 2.5rem)",
              transformOrigin: "top",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
          >
            <Label>Décoration &amp; Événements — Médenine, Tunisie</Label>
          </motion.div>

          {prefersReduced ? (
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(52px, 9vw, 96px)",
                letterSpacing: "0.1em",
                color: "var(--text-dark)",
                fontWeight: 300,
                lineHeight: 1.05,
                marginBottom: "1.5rem",
              }}
            >
              BH Giftery
            </motion.h1>
          ) : (
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(52px, 9vw, 96px)",
                letterSpacing: "0.1em",
                color: "var(--text-dark)",
                fontWeight: 300,
                lineHeight: 1.05,
                marginBottom: "1.5rem",
              }}
            >
              {"BH Giftery".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: 0.6 + i * 0.065,
                  }}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.75 }}
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(18px, 2.8vw, 26px)",
              color: "var(--text-muted)",
              letterSpacing: "0.04em",
              maxWidth: "540px",
              lineHeight: 1.55,
              marginBottom: "clamp(1.5rem, 4vw, 3rem)",
            }}
          >
            L&apos;art de sublimer vos moments les plus précieux
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            style={{ paddingBottom: "0.75rem" }}
          >
            <Link
              to="/galerie"
              style={{
                display: "inline-block",
                padding: "1rem 2.75rem",
                background: "var(--gold)",
                color: "var(--charcoal)",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 500,
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--gold-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--gold)")
              }
            >
              Voir nos réalisations
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            style={{
              position: "absolute",
              bottom: "2.5rem",
              width: "1px",
              height: "36px",
              background: "var(--gold)",
              opacity: 0.4,
            }}
          />
        </section>

        {/* 2 · CAROUSEL ────────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "clamp(5rem, 8vw, 8rem) 0",
            background: "var(--cream)",
          }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              padding: "0 clamp(1.5rem, 5vw, 5rem)",
            }}
          >
            <Label>Galerie</Label>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 4.5vw, 42px)",
                letterSpacing: "0.06em",
                color: "var(--text-dark)",
                fontWeight: 400,
              }}
            >
              Nos plus beaux moments
            </h2>
          </motion.div>

          {/* viewport + arrow buttons */}
          <div style={{ position: "relative" }}>
            {/* prev */}
            <button
              onClick={scrollPrev}
              aria-label="Précédent"
              className="carousel-arrow"
              style={{
                position: "absolute",
                left: "clamp(0.5rem, 2vw, 2rem)",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(201, 168, 76, 0.5)",
                background: "rgba(250, 247, 242, 0.92)",
                backdropFilter: "blur(6px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold)";
                e.currentTarget.style.borderColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(250, 247, 242, 0.92)";
                e.currentTarget.style.borderColor = "rgba(201, 168, 76, 0.5)";
              }}
            >
              <ChevronLeft
                size={20}
                color="var(--charcoal)"
                strokeWidth={1.5}
              />
            </button>

            {/* embla viewport */}
            <div
              ref={emblaRef}
              style={{ overflow: "hidden" }}
              onMouseEnter={() => {
                isPausedRef.current = true;
              }}
              onMouseLeave={() => {
                isPausedRef.current = false;
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  paddingLeft: "clamp(1.5rem, 5vw, 5rem)",
                }}
              >
                {[
                  "/carroussel1.jpeg",
                  "/carroussel2.jpeg",
                  "/carroussel3.jpeg",
                  "/carroussel4.jpeg",
                  "/carroussel5.jpeg",
                  "/carroussel6.jpeg",
                ].map((src) => (
                  <div
                    key={src}
                    style={{
                      flex: "0 0 clamp(260px, 65vw, 580px)",
                      height: "clamp(240px, 42vw, 460px)",
                      borderRadius: "2px",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <LazyImg src={src} alt="BH Giftery réalisation" />
                  </div>
                ))}
              </div>
            </div>

            {/* next */}
            <button
              onClick={scrollNext}
              aria-label="Suivant"
              className="carousel-arrow"
              style={{
                position: "absolute",
                right: "clamp(0.5rem, 2vw, 2rem)",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(201, 168, 76, 0.5)",
                background: "rgba(250, 247, 242, 0.92)",
                backdropFilter: "blur(6px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold)";
                e.currentTarget.style.borderColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(250, 247, 242, 0.92)";
                e.currentTarget.style.borderColor = "rgba(201, 168, 76, 0.5)";
              }}
            >
              <ChevronRight
                size={20}
                color="var(--charcoal)"
                strokeWidth={1.5}
              />
            </button>
          </div>

          {/* dot indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "1.75rem",
              padding: "0 clamp(1.5rem, 5vw, 5rem)",
            }}
          >
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Aller au slide ${i + 1}`}
                style={{
                  width: i === selectedIndex ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  border: "none",
                  background:
                    i === selectedIndex
                      ? "var(--gold)"
                      : "rgba(201, 168, 76, 0.3)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.35s ease, background 0.35s ease",
                }}
              />
            ))}
          </div>
        </section>

        {/* 3 · STATS ───────────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "clamp(4rem, 7vw, 7rem) clamp(1.5rem, 5vw, 5rem)",
            background: "var(--charcoal)",
          }}
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "clamp(0.5rem, 2vw, 2rem)",
              textAlign: "center",
            }}
          >
            {stats.map(({ value, label }) => (
              <motion.div key={label} variants={fadeUp}>
                <AnimatedStat value={value} label={label} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 4 · SERVICES ────────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "clamp(5rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)",
            background: "var(--cream)",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <Label>Ce que nous faisons</Label>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(30px, 4.5vw, 42px)",
                  letterSpacing: "0.06em",
                  color: "var(--text-dark)",
                  fontWeight: 400,
                }}
              >
                Nos services
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {services.map(({ icon: Icon, label, desc }) => (
                <motion.div key={label} variants={fadeUp}>
                  <TiltCard
                    style={{
                      padding: "2.5rem 2rem",
                      border: "1px solid rgba(201, 168, 76, 0.2)",
                      background: "rgba(250, 247, 242, 0.6)",
                      height: "100%",
                    }}
                  >
                    <div style={{ marginBottom: "1.25rem" }}>
                      <Icon size={28} color="var(--gold)" strokeWidth={1.25} />
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "22px",
                        letterSpacing: "0.05em",
                        color: "var(--text-dark)",
                        fontWeight: 400,
                        marginBottom: "0.75rem",
                      }}
                    >
                      {label}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "var(--text-muted)",
                        lineHeight: 1.65,
                      }}
                    >
                      {desc}
                    </p>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              style={{ textAlign: "center", marginTop: "3rem" }}
            >
              <Link
                to="/services"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  borderBottom: "1px solid var(--gold)",
                  paddingBottom: "3px",
                  transition: "color 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--gold-light)";
                  e.currentTarget.style.borderColor = "var(--gold-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--gold)";
                  e.currentTarget.style.borderColor = "var(--gold)";
                }}
              >
                Voir tous nos services →
              </Link>
            </motion.div>
            <SectionDivider />
          </div>
        </section>

        {/* 5 · HOW IT WORKS ────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "clamp(5rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)",
            background: "#F2EDE6",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <Label>Notre processus</Label>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(30px, 4.5vw, 42px)",
                  letterSpacing: "0.06em",
                  color: "var(--text-dark)",
                  fontWeight: 400,
                }}
              >
                Comment ça se passe ?
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "3rem",
              }}
            >
              {steps.map(({ num, title, desc }) => (
                <motion.div key={num} variants={fadeUp}>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "80px",
                      color: "rgba(201, 168, 76, 0.15)",
                      lineHeight: 1,
                      marginBottom: "-0.5rem",
                      letterSpacing: "0.02em",
                      userSelect: "none",
                    }}
                  >
                    {num}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "24px",
                      letterSpacing: "0.05em",
                      color: "var(--text-dark)",
                      fontWeight: 400,
                      marginBottom: "1rem",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 6 · FEATURED EVENT ──────────────────────────────────────────────── */}
        <section
          style={{
            padding: "clamp(5rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)",
            background: "var(--cream)",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              style={{ marginBottom: "3rem" }}
            >
              <Label>À la une</Label>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(30px, 4.5vw, 42px)",
                  letterSpacing: "0.06em",
                  color: "var(--text-dark)",
                  fontWeight: 400,
                }}
              >
                Réalisation du moment
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(2rem, 5vw, 5rem)",
                alignItems: "stretch",
              }}
              className="featured-grid"
            >
              <div
                style={{
                  overflow: "hidden",
                  height: "650px",
                }}
                className="featured-video-container"
              >
                <ShimmerVideo
                  src="/alaune.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>

              <div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.4rem 1rem",
                    background: "var(--gold)",
                    color: "var(--charcoal)",
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "1.5rem",
                  }}
                >
                  Événements professionnels
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(26px, 3.5vw, 38px)",
                    letterSpacing: "0.05em",
                    color: "var(--text-dark)",
                    fontWeight: 400,
                    marginBottom: "1.25rem",
                    lineHeight: 1.2,
                  }}
                >
                  Décoration et mise en place du stand APII aux journées
                  d'investissement à Médenine Djerba
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "var(--text-muted)",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                  }}
                >
                  Écran 3×3 monumental, bureau d'accueil sculpté, salon feutré…
                  Chaque élément a été pensé pour incarner l'excellence et le
                  prestige. Une scénographie complète au service de l'image de
                  l'APII, lors des Journées d'Investissement de Djerba.
                </p>

                <Link
                  to="/galerie"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    borderBottom: "1px solid var(--gold)",
                    paddingBottom: "3px",
                    transition: "color 0.3s ease, border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--gold-light)";
                    e.currentTarget.style.borderColor = "var(--gold-light)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--gold)";
                    e.currentTarget.style.borderColor = "var(--gold)";
                  }}
                >
                  Voir la galerie →
                </Link>
              </div>
            </motion.div>
          </div>

          <SectionDivider />

          <style>{`
            @media (max-width: 768px) {
              .featured-grid { grid-template-columns: 1fr !important; }
              .carousel-arrow { display: none !important; }
            }
          `}</style>
        </section>

        {/* 7 · TESTIMONIALS ────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "clamp(5rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)",
            background: "#F2EDE6",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <Label>Ils nous font confiance</Label>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(30px, 4.5vw, 42px)",
                  letterSpacing: "0.06em",
                  color: "var(--text-dark)",
                  fontWeight: 400,
                }}
              >
                Témoignages
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {testimonials.map(({ initials, name, event, quote }) => (
                <motion.div key={name} variants={fadeUp}>
                  <TiltCard
                    style={{
                      background: "var(--cream)",
                      padding: "2.5rem",
                      border: "1px solid rgba(201, 168, 76, 0.15)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "3px",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill="var(--gold)"
                          color="var(--gold)"
                          strokeWidth={0}
                        />
                      ))}
                    </div>

                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        fontSize: "18px",
                        color: "var(--text-dark)",
                        lineHeight: 1.65,
                        marginBottom: "2rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      &ldquo;{quote}&rdquo;
                    </p>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: "var(--gold)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-display)",
                          fontSize: "14px",
                          color: "var(--charcoal)",
                          fontWeight: 500,
                          letterSpacing: "0.05em",
                          flexShrink: 0,
                        }}
                      >
                        {initials}
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "var(--text-dark)",
                            marginBottom: "2px",
                          }}
                        >
                          {name}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "12px",
                            color: "var(--gold)",
                            letterSpacing: "0.08em",
                          }}
                        >
                          {event}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 8 · CTA BANNER ──────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "clamp(5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)",
            background: "var(--charcoal)",
            textAlign: "center",
          }}
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            style={{ maxWidth: "640px", margin: "0 auto" }}
          >
            <motion.div variants={fadeUp}>
              <Label>Prêt à créer quelque chose de beau ?</Label>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 5vw, 48px)",
                letterSpacing: "0.06em",
                color: "var(--cream)",
                fontWeight: 300,
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Donnons vie à votre événement
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                color: "rgba(250, 247, 242, 0.6)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              Contactez-nous sur WhatsApp pour discuter de votre projet. Nous
              sommes là pour faire de chaque célébration un souvenir
              inoubliable.
            </motion.p>

            <motion.div variants={fadeUp}>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "1rem 2.75rem",
                  background: "var(--gold)",
                  color: "var(--charcoal)",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--gold-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--gold)")
                }
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                Nous contacter sur WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
