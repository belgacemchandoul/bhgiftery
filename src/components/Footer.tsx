import { Link } from 'react-router-dom'
import { Camera, Share2, Music, Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: '#', label: 'Instagram', icon: Camera },
  { href: '#', label: 'Facebook', icon: Share2 },
  { href: '#', label: 'TikTok', icon: Music },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--charcoal)',
        color: 'var(--cream)',
        padding: '5rem clamp(1.5rem, 5vw, 5rem) 2.5rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(201, 168, 76, 0.2)',
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px',
                letterSpacing: '0.1em',
                color: 'var(--gold)',
                marginBottom: '1rem',
                fontWeight: 400,
              }}
            >
              BH Giftery
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'rgba(250, 247, 242, 0.6)',
                lineHeight: '1.7',
                maxWidth: '260px',
              }}
            >
              Décoration &amp; événements à Sfax. Chaque célébration mérite d&apos;être inoubliable.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '1.25rem',
                fontWeight: 500,
              }}
            >
              Navigation
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'rgba(250, 247, 242, 0.7)',
                    transition: 'color 0.3s ease',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 247, 242, 0.7)')}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '1.25rem',
                fontWeight: 500,
              }}
            >
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: Phone, text: '+216 XX XXX XXX' },
                { icon: Mail, text: 'contact@bhgiftery.tn' },
                { icon: MapPin, text: 'Sfax, Tunisie' },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    color: 'rgba(250, 247, 242, 0.7)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                  }}
                >
                  <Icon size={15} color="var(--gold)" strokeWidth={1.5} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '1.25rem',
                fontWeight: 500,
              }}
            >
              Suivez-nous
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '1px solid rgba(201, 168, 76, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(250, 247, 242, 0.7)',
                    transition: 'border-color 0.3s ease, color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gold)'
                    e.currentTarget.style.color = 'var(--gold)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.3)'
                    e.currentTarget.style.color = 'rgba(250, 247, 242, 0.7)'
                  }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: 'rgba(250, 247, 242, 0.4)',
            }}
          >
            {`© ${new Date().getFullYear()} BH Giftery. Tous droits réservés.`}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: 'rgba(250, 247, 242, 0.4)',
            }}
          >
            Sfax, Tunisie
          </p>
        </div>
      </div>
    </footer>
  )
}
