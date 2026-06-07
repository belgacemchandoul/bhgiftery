import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/galerie", label: "Galerie" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        background: scrolled ? "rgba(250, 247, 242, 0.95)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(201, 168, 76, 0.2)" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 5rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
          }}
        >
          <img
            src="/bhgifterylogo.png"
            alt="BH Giftery"
            style={{
              height: "38px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "22px",
              letterSpacing: "0.12em",
              color: scrolled ? "var(--text-dark)" : "var(--gold)",
              fontWeight: 500,
              transition: "color 0.4s ease",
            }}
          >
            BH Giftery
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            gap: "2.5rem",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              style={({ isActive }) => ({
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: isActive ? "var(--gold)" : "var(--text-dark)",
                transition: "color 0.3s ease",
                fontWeight: 500,
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-dark)",
            padding: "10px" /* 24px icon + 20px padding = 44px tap target */,
            display: "none",
            lineHeight: 0,
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              background: "var(--cream)",
              borderTop: "1px solid rgba(201, 168, 76, 0.2)",
              padding: "1.5rem clamp(1.5rem, 5vw, 5rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--gold)" : "var(--text-dark)",
                  fontWeight: 500,
                  minHeight: "44px",
                  display: "flex",
                  alignItems: "center",
                })}
              >
                {label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
